/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

const DEFAULT_SITES_MAP = new Map([
  // This first item is the global list fallback for any unexpected geos
  [
    "",
    "https://humatarayici.com/docs/ ,https://www.artadosearch.com/,https://www.facebook.com/,https://www.reddit.com/,https://www.wikipedia.org/,https://twitter.com/",

     
  ],
  [
    "US",
    "https://humatarayici.com/docs/ ,https://www.artadosearch.com/,https://www.facebook.com/,https://www.reddit.com/,https://www.wikipedia.org/,https://twitter.com/",

  ],
  [
    "CA",
    "https://humatarayici.com/docs/ ,https://www.artadosearch.com/,https://www.facebook.com/,https://www.reddit.com/,https://www.wikipedia.org/,https://twitter.com/",

  ],
  [
    "DE",
    "https://humatarayici.com/docs/ ,https://www.artadosearch.com/,https://www.facebook.com/,https://www.reddit.com/,https://www.wikipedia.org/,https://twitter.com/",

  ],
  [
    "PL",
    "https://humatarayici.com/docs/ ,https://www.artadosearch.com/,https://www.facebook.com/,https://www.reddit.com/,https://www.wikipedia.org/,https://twitter.com/",

  ],
  [
    "RU",
    "https://humatarayici.com/docs/ ,https://www.artadosearch.com/,https://www.facebook.com/,https://www.reddit.com/,https://www.wikipedia.org/,https://twitter.com/",

  ],
  [
    "GB",
    "https://humatarayici.com/docs/ ,https://www.artadosearch.com/,https://www.facebook.com/,https://www.reddit.com/,https://www.wikipedia.org/,https://twitter.com/",

  ],
  [
    "FR",
    "https://humatarayici.com/docs/ ,https://www.artadosearch.com/,https://www.facebook.com/,https://www.reddit.com/,https://www.wikipedia.org/,https://twitter.com/",

  ],
  [
    "CN",
    "https://humatarayici.com/docs/ ,https://www.artadosearch.com/,https://www.facebook.com/,https://www.reddit.com/,https://www.wikipedia.org/,https://twitter.com/",

  ],
]);

// Immutable for export.
export const DEFAULT_SITES = Object.freeze(DEFAULT_SITES_MAP);
