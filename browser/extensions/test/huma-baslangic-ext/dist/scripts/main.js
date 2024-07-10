document.addEventListener('DOMContentLoaded', () => {
    // Zamanı güncelle
    function updateTime() {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      document.getElementById('time').textContent = `${hours}:${minutes}`;
    }
  
    // İlk zaman güncellemesi ve her dakika güncelle
    updateTime();
    setInterval(updateTime, 60000);
  
    // Arama motorunu ayarla
    const searchInput = document.querySelector('input[type="text"]');
    searchInput.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        const query = searchInput.value;
        const url = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
        window.location.href = url;
      }
    });
  });