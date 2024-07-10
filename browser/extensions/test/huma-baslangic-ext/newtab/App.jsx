import React, { useState, useEffect } from 'react';
import Clock from './components/Clock';
import SearchBar from './components/SearchBar';
import WeatherWidget from './components/WeatherWidget';
import NewsWidget from './components/NewsWidget';
import SpaceFlightsWidget from './components/SpaceFlightsWidget';
import InfoWidget from './components/InfoWidget';
import SettingsPanel from './components/SettingsPanel';
import BookmarksWidget from './components/BookmarksWidget';
import SponsoredSitesWidget from './components/SponsoredSitesWidget';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Font Awesome CSS dosyasını ekleyin

function App() {
  const [settings, setSettings] = useState({
    showClock: true,
    showWeather: true,
    showNews: true,
    showSpaceFlights: true,
    showInfo: true,
    showBookmarks: true,
    showSponsoredSites: true,
    username: localStorage.getItem('username') || 'Kullanıcı',
    clockSize: localStorage.getItem('clockSize') || '24',
  });
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    localStorage.setItem('username', settings.username);
    localStorage.setItem('clockSize', settings.clockSize);
  }, [settings.username, settings.clockSize]);

  const toggleWidget = (widgetName) => {
    setSettings(prevSettings => ({
      ...prevSettings,
      [widgetName]: !prevSettings[widgetName]
    }));
  };

  const updateUsername = (newUsername) => {
    setSettings(prevSettings => ({
      ...prevSettings,
      username: newUsername
    }));
  };

  const updateClockSize = (newClockSize) => {
    setSettings(prevSettings => ({
      ...prevSettings,
      clockSize: newClockSize
    }));
  };

  return (
    <div className="app">
      {settings.showClock && <Clock username={settings.username} clockSize={settings.clockSize} />}
      <SearchBar />
      <div className="widgets">
        {settings.showInfo && <InfoWidget />}
        {settings.showWeather && <WeatherWidget />}
        {settings.showNews && <NewsWidget />}
        {settings.showSpaceFlights && <SpaceFlightsWidget />}
        {settings.showSponsoredSites && <SponsoredSitesWidget />}
      </div>
      <div className='bookmarks-row'>
        {settings.showBookmarks && <BookmarksWidget />}
      </div>
      <button
  className="settings-button"
  onClick={() => {
    console.log('Ayarlar butonu tıklandı');
    setShowSettings(!showSettings);
  }}
>
  <i className="fas fa-cog"></i>  
</button>
      {showSettings && (
  <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.5)' }}>
    <SettingsPanel
      settings={settings}
      toggleWidget={toggleWidget}
      updateUsername={updateUsername}
      updateClockSize={updateClockSize}
      onClose={() => setShowSettings(false)}
    />
  </div>
)}
    </div>
  );
}

export default App;