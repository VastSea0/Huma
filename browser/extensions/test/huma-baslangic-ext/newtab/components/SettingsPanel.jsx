import React, { useState } from 'react';

function SettingsPanel({ settings, toggleWidget, updateUsername, updateClockSize, onClose }) {
  console.log('SettingsPanel props:', { settings, toggleWidget, updateUsername, updateClockSize, onClose });
  
   const [tempUsername, setTempUsername] = useState(settings.username);
    const [tempClockSize, setTempClockSize] = useState(settings.clockSize);  

    const handleUsernameChange = (e) => {
      setTempUsername(e.target.value);
    };
  
    const handleUsernameSubmit = () => {
      updateUsername(tempUsername);
    };
    
    const handleSliderChange = (e) => {
      setTempClockSize(e.target.value);
      updateClockSize(e.target.value);
    };

    return (
        <div className="settings-panel-p">
            <h2>Ayarlar</h2>
            <div className="setting-item">
                <label>
                    Kullanıcı Adı:
                    <input
                        type="text"
                        value={tempUsername}
                        onChange={handleUsernameChange}
                    />
                </label>
                <button onClick={handleUsernameSubmit}>Kaydet</button>
            </div>
            <div className="setting-item">
                <label>
                    Saat boyutu:
                    <input
                        type="range"
                        min="10"
                        max="100"
                        value={tempClockSize}
                        onChange={handleSliderChange}
                    />
                </label>
            </div>
            <div className="setting-item">
                <label>
                    <input 
                        type="checkbox" 
                        checked={settings.showClock} 
                        onChange={() => toggleWidget('showClock')} 
                    />
                    Saat Göster
                </label>
            </div>
            <div className="setting-item">
                <label>
                    <input 
                        type="checkbox" 
                        checked={settings.showWeather} 
                        onChange={() => toggleWidget('showWeather')} 
                    />
                    Hava Durumu Göster
                </label>
            </div>
            <div className="setting-item">
                <label>
                    <input 
                        type="checkbox" 
                        checked={settings.showNews} 
                        onChange={() => toggleWidget('showNews')} 
                    />
                    Haberler Göster
                </label>
            </div>
            <div className="setting-item">
                <label>
                    <input 
                        type="checkbox" 
                        checked={settings.showSpaceFlights} 
                        onChange={() => toggleWidget('showSpaceFlights')} 
                    />
                    Uzay Uçuşları Göster
                </label>
            </div>
            <div className="setting-item">
                <label>
                    <input 
                        type="checkbox" 
                        checked={settings.showInfo} 
                        onChange={() => toggleWidget('showInfo')} 
                    />
                    Bilgi Göster
                </label>
            </div>
            <button onClick={onClose}>Kapat</button>
        </div>
    );
}

export default SettingsPanel;