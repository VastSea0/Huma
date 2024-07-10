#!/usr/local/bin/node

if (process.argv.length < 5) {
  console.log('Run as:');
  console.log('  merge-locale-changes.sh _locales/(lang)/messages.json messages-with-changes.json _locales/(reference-lang)/messages.json');
  console.log('For example:');
  console.log('  merge-locale-changes.sh _locales/ja/messages.json ja-messages-with-changes.json _locales/en/messages.json');
  process.exit(1);
}

const fs = require('fs');
const path = require('path');

const original  = path.resolve(process.argv[2]);
const modified  = path.resolve(process.argv[3]);
const reference = path.resolve(process.argv[4]);


function toFormattedValue(value) {
  return JSON.stringify(value)
    .replace(/{"/g, '{ "')
    .replace(/:{/g, ': {')
    .replace(/"}/g, '" }')
    .replace(/"([:,])"/g, '"$1 "')
    .replace(/\$([1-9]+)/g, '__DOLLER__$1');
}

function merge(before, after) {
  const beforeParsed = JSON.parse(before);
  const afterParsed = JSON.parse(after);

  let result = before;

  for (const [key, value] of Object.entries(beforeParsed)) {
    if (!(key in afterParsed))
      continue;

    const afterValue = afterParsed[key];
    if (value.message == afterValue.message)
      continue;

    result = result.replace(
      new RegExp(
        `(\\n\\s*${JSON.stringify(key)}\\s*:\\s*{\\s*"message"\\s*:\\s*)".+?"(?:(\\s*},)|(,\\s*"placeholders"\\s*:\\s*)([\\w\\W]+?)(}}))`
      ),
      (match, keyPart, simpleEndPart, placeholderKeyPart, placeholderValuePart, placeholderEndPart) => {
        const placeholders = !afterValue.placeholders ?
          '' :
          JSON.stringify(afterValue.placeholders) != JSON.stringify(value.placeholders) ?
            (() => {
              let merged = placeholderValuePart;
              for (const [placeholder, definition] of Object.entries(afterValue.placeholders)) {
                merged = merged.replace(
                  new RegExp(
                    `("example"\\s*:\\s*)${JSON.stringify(value.placeholders[placeholder].example)}`
                  ),
                  `$1${JSON.stringify(definition.example)}`
                );
              }
              return merged;
            })() :
            placeholderValuePart;
        return `${keyPart}${JSON.stringify(afterValue.message)}${simpleEndPart || ''}${placeholderKeyPart || ''}${placeholders}${placeholderEndPart || ''}`;
      }
    );
  }

  for (const [key, value] of Object.entries(afterParsed)) {
    if (key in beforeParsed)
      continue;

    result = result.replace(/\n\}([\s\n]*)$/, `,\n${JSON.stringify(key)}: ${toFormattedValue(value)}\n}$1`);
  }

  return result.replace(/__DOLLER__/g, '\$');
}


const merged = merge(
  fs.readFileSync(original, 'utf8'),
  fs.readFileSync(modified, 'utf8')
);

const final = merge(
  fs.readFileSync(reference, 'utf8'),
  merged
);

fs.writeFileSync(original, final, 'utf8');
