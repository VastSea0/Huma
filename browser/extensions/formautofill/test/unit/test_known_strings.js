"use strict";
/* global FormAutofillHeuristics: true */

const KNOWN_NAMES = {
  "cc-name": ["cc-name", "card-name", "cardholder-name", "cardholder"],
  "cc-number": [
    "cc-number",
    "cc-num",
    "card-number",
    "card-num",
    "number",
    "cc",
    "cc-no",
    "card-no",
    "credit-card",
    "numero-carte",
    "carte",
    "carte-credit",
    "num-carte",
    "cb-num",
  ],
  "cc-exp": [
    "cc-exp",
    "card-exp",
    "cc-expiration",
    "card-expiration",
    "cc-ex",
    "card-ex",
    "card-expire",
    "card-expiry",
    "validite",
    "expiration",
    "expiry",
    "mm-yy",
    "mm-yyyy",
    "yy-mm",
    "yyyy-mm",
    "expiration-date",
    "payment-card-expiration",
    "payment-cc-date",
  ],
  "cc-exp-month": [
    "exp-month",
    "cc-exp-month",
    "cc-month",
    "card-month",
    "cc-mo",
    "card-mo",
    "exp-mo",
    "card-exp-mo",
    "cc-exp-mo",
    "card-expiration-month",
    "expiration-month",
    "cc-mm",
    "cc-m",
    "card-mm",
    "card-m",
    "card-exp-mm",
    "cc-exp-mm",
    "exp-mm",
    "exp-m",
    "expire-month",
    "expire-mo",
    "expiry-month",
    "expiry-mo",
    "card-expire-month",
    "card-expire-mo",
    "card-expiry-month",
    "card-expiry-mo",
    "mois-validite",
    "mois-expiration",
    "m-validite",
    "m-expiration",
    "expiry-date-field-month",
    "expiration-date-month",
    "expiration-date-mm",
    "exp-mon",
    "validity-mo",
    "exp-date-mo",
    "cb-date-mois",
    "date-m",
  ],
  "cc-exp-year": [
    "exp-year",
    "cc-exp-year",
    "cc-year",
    "card-year",
    "cc-yr",
    "card-yr",
    "exp-yr",
    "card-exp-yr",
    "cc-exp-yr",
    "card-expiration-year",
    "expiration-year",
    "cc-yy",
    "cc-y",
    "card-yy",
    "card-y",
    "card-exp-yy",
    "cc-exp-yy",
    "exp-yy",
    "exp-y",
    "cc-yyyy",
    "card-yyyy",
    "card-exp-yyyy",
    "cc-exp-yyyy",
    "expire-year",
    "expire-yr",
    "expiry-year",
    "expiry-yr",
    "card-expire-year",
    "card-expire-yr",
    "card-expiry-year",
    "card-expiry-yr",
    "an-validite",
    "an-expiration",
    "annee-validite",
    "annee-expiration",
    "expiry-date-field-year",
    "expiration-date-year",
    "cb-date-ann",
    "expiration-date-yy",
    "expiration-date-yyyy",
    "validity-year",
    "exp-date-year",
    "date-y",
  ],
};

add_setup(async () => {
  ({ FormAutofillHeuristics } = ChromeUtils.importESModule(
    "resource://gre/modules/shared/FormAutofillHeuristics.sys.mjs"
  ));
});

for (let field in KNOWN_NAMES) {
  KNOWN_NAMES[field].forEach(name => {
    add_task(async () => {
      ok(
        FormAutofillHeuristics.testRegex(
          FormAutofillHeuristics.RULES[field],
          name
        ),
        `RegExp for ${field} matches string '${name}'`
      );
    });
  });
}
