import os
from PIL import Image


def default_brander(boyut):
  # Kaynak dosya yolu
  kaynak_dosya = "default.png"

  # Kopyalanacak dosya adlarının formatı
  dosya_adi_formati = "default{}.png"

  # Kopyalanacak boyutlar listesi
  boyutlar = boyut 

  # Hedef klasör
  hedef_klasor = os.path.dirname(kaynak_dosya)

  # Kaynak dosyayı oku
  kaynak_resim = Image.open(kaynak_dosya)

  # Her boyut için yeni bir dosya oluştur ve kopyala
  for boyut in boyutlar:
    # Yeni dosya adı
    yeni_dosya_adi = dosya_adi_formati.format(boyut)

    # Yeni dosya yolu
    yeni_dosya_yolu = os.path.join(hedef_klasor, yeni_dosya_adi)

    # Resim boyutunu yeniden boyutlandır
    yeni_resim = kaynak_resim.resize((boyut, boyut))

    # Yeni dosyaya kaydet
    yeni_resim.save(yeni_dosya_yolu)

  print("Kopyalama işlemi tamamlandı!")


default_brander(boyut=[16, 48, 64,])