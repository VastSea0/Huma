// src/components/SponsoredSitesWidget.js
import React from 'react';

const SponsoredSitesWidget = () => {
  const sponsoredSites = [
    { name: 'Sponsor Site 1', url: 'https://www.sponsorsite1.com' },
    { name: 'Sponsor Site 2', url: 'https://www.sponsorsite2.com' },
  ];

  return (
    <div className="widget sponsored-sites">
      <h2>Sponsorlu Siteler</h2>
      <ul>
        {sponsoredSites.map((site, index) => (
          <li key={index}>
            <a href={site.url} target="_blank" rel="noopener noreferrer">
              <img src={`https://www.google.com/s2/favicons?domain=${site.url}`} alt={site.name} />
              {site.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SponsoredSitesWidget;