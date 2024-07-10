module.exports = {
    env: {
        es2021: true, // veya es2020, es6 vb.
        browser: true,
        node: true,
    },
    overrides: [
        {
          files: ['*.js', '*.vue'], // Linting yapmak istediğiniz dosya türleri
          // İlgili ayarlar
        }
      ],
    extends: [
      'eslint:recommended',
      'plugin:vue/essential'
    ],
    rules: {
      'no-console': 'off', // console.log kullanımını devre dışı bırakır
      'no-undef': 'off' // Tanımsız değişken hatalarını devre dışı bırakır
    },
    globals: {
      browser: 'readonly' // 'browser' global değişkenini tanımlar
    },
    parserOptions: {
      parser: 'babel-eslint'
    }
  };
  