document.addEventListener('DOMContentLoaded', () => {
    const contentList = document.getElementById('contentList');

    // Sayfaları yükle ve görüntüle
    chrome.storage.local.get({ savedPages: [] }, (result) => {
        const savedPages = result.savedPages;

        savedPages.forEach(page => {
            const div = document.createElement('div');
            div.className = 'content-item';

            const textarea = document.createElement('textarea');
            textarea.value = JSON.stringify(page, null, 2);
            textarea.readOnly = true; // Kullanıcıların düzenlemesini engelle

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Sil';
            deleteButton.addEventListener('click', () => {
                const confirmed = confirm('Bu içeriği silmek istediğinizden emin misiniz?');
                if (confirmed) {
                    chrome.storage.local.get({ savedPages: [] }, (result) => {
                        const savedPages = result.savedPages.filter(p => p.id !== page.id);
                        chrome.storage.local.set({ savedPages }, () => {
                            alert('İçerik silindi!');
                            div.remove();
                        });
                    });
                }
            });

            div.appendChild(textarea);
            div.appendChild(deleteButton);
            contentList.appendChild(div);
        });
    });

    const bgColorInput = document.getElementById('bgColor');
    const textColorInput = document.getElementById('textColor');
    const buttonColorInput = document.getElementById('buttonColor');
    const classColorInput = document.getElementById('classColor');
    const saveButton = document.getElementById('saveSettings');
    const settingsTextarea = document.getElementById('settingsTextarea');

    // Mevcut ayarları yükle
    chrome.storage.local.get('colorSettings', (result) => {
        if (result.colorSettings) {
            const { bgColor, textColor, buttonColor, classColor } = result.colorSettings;
            bgColorInput.value = bgColor || '#ffffff';
            textColorInput.value = textColor || '#000000';
            buttonColorInput.value = buttonColor || '#000000';
            classColorInput.value = classColor || '#000000';
            
            // JSON formatında textarea'ya yaz
            settingsTextarea.value = JSON.stringify(result.colorSettings, null, 2);
        }
    });

    saveButton.addEventListener('click', () => {
        const colorSettings = {
            bgColor: bgColorInput.value,
            textColor: textColorInput.value,
            buttonColor: buttonColorInput.value,
            classColor: classColorInput.value
        };

        // Ayarları chrome.storage'a kaydet
        chrome.storage.local.set({ colorSettings }, () => {
            alert('Ayarlar kaydedildi! Şimdi yapman gereken şey bu metni kenar çubuğuna yüklemek');

            // JSON formatında textarea'ya yaz
            settingsTextarea.value = JSON.stringify(colorSettings, null, 2);
        });
    });
});
