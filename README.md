# Hüma Tarayıcısı
![image](https://github.com/VastSea0/Huma/assets/144556903/13e56ba3-2023-4581-a2c8-0c88fdbb78fd)

Hüma Tarayıcısı, ilk yerli web tarayıcısı olma hedefiyle özgür yazılım prensiplerine bağlı kalarak Pardus yazılım ağına(ekosistem,) katkıda bulunmak için geliştirilmiş bir web tarayıcısıdır.

## Hakkında

Hüma, gizlilik odaklı tasarımıyla dikkat çeker ve kullanıcıların çevrimiçi gizliliğini korur. Hızlı, hafif ve özelleştirilebilir arayüzüyle Türk topluluğunun ihtiyaçlarını karşılar.

Hüma projesi, Egehan'ın 2022 yılında Python ile QtWebEngine motorunu kullanarak ilk web tarayıcısını yapmasıyla başladı. "VastSea Browser" olarak adlandırılan bu tarayıcı, basit ve deneysel bir proje olduğundan günlük kullanıma uygun değildi. İlerleyen zamanlarda çeşitli deneysel projeler geliştirildi, ancak bunlar daha küçük ve karmaşık olmayan yapılardı. 2023 yılında Teknofest yarışmalarında Pardus için bir yarışma olduğunu öğrenen Egehan, Pardus için güçlü bir tarayıcı yapma fikrini düşündü. Ancak, Chromium projesi ile bir tarayıcı geliştirmek zorluğundan dolayı ertelendi. Bu süreçte "Füze Paket Yükleyicisi" adında bir proje geliştirdi, fakat teknik sorunlar nedeniyle proje askıya alındı. Bu esnada Hüma fikri tekrar doğdu.

Hüma Egehan KAHRAMAN tarafından 2024 yılının Ocak ayında araştırılmaya başlanmıştır. Şubat ayında, başarısız olan Füze Paket Yükleyicisi projesinin iptali ile bu fikri gerçeğe dönüştürmek üzere çalışmalara başladı. İlk olarak Electron çerçevesi ile yazılan sürüm geliştirildi, ancak bunun yeterli olmayacağını düşünerek eş zamanlı olarak Firefox tabanlı bir tarayıcı yapmayı kavramaya çalıştı. Yaklaşık iki aylık araştırma ve geliştirme sonucunda, kaynak koddan derlenen ilk Firefox sürümü Şubat 2024'te ortaya çıktı. 27 Mart 2024 tarihinde ise temel gayesi olan Firefox çatalı olma yolunda ilk adımını atarak Firefox tarayıcısının bir çatalı olarak yeniden geliştirilmeye başlandı.

Mayıs 2024 itibarıyla, Hüma'nın kararlı ve özgün olabilmesi için Egehan tüm gayretiyle çalışmakta ve bu projeyi Pardus ekosistemine kazandırmayı hedeflemektedir. Aynı zamanda Türklerin ilk web tarayıcısı olma misyon ve vizyonuna sahip olan bu tarayıcı, yüksek hedefleri benimseyerek durmadan gelişimini sürdürmektedir.

### Hüma Destanı
Hüma, Türk mitolojisinde önemli bir yere sahip efsanevi bir kuştur. Hüma'nın kanatları altında ebedi mutluluk ve sonsuz hayat sembolize edilir. Hüma'nın görüldüğüne inanılan kişi, sonsuz yaşam ve mutluluk vaadiyle dolu bir geleceğe sahip olacağına inanılırdı.

Hüma Web Tarayıcısı özgür yazılım felsefesini benimsemiş tamamen açık kaynak ve özgür bir yazılımdır. Egehan KAHRAMAN tarafından 'Türklerin ilk Web Tarayıcısı' konsepti ile yazılmış olan bu yazılım Chromium tabanını kullanmıştır (Şu anda geliştirilen FireFox tabanını kullanır) İçerisinde bir çok özelliğin bulunduğu bu tarayıcı sizin verilerinizi her hangi bir yere göndermez, dağıtmaz veya satmazdır. Verileriniz sizinle güvenli kalır...

Hüma Web Tarayıcı özgür yazılımları tamamen destekler ve geliştirilmesine katkıda bulunmayı amaçlar bu nedenle GPL lisansı altında Kamuya açık olarak paylaşılmış bir yazılımdır.
## 15 HAZİRAN 2024 HÜMA YAZISI:
Bu proje, 2022 Aralık ve 2023 Ocak aylarında QtWebEngine kullanan oldukça basit bir deneyseldi. O zamanlar amacım sadece deneysel bir şey yapmak ve Python hakkında biraz daha bilgi edinmekti. 2023 Eylül ayına kadar hiçbir şey eklemedim, fakat daha sonra fark ettim ki Türklerin bir web tarayıcısı yoktu; sadece Android için bir tarayıcı vardı (açık kaynak olduğundan emin değilim, sanırım kapalı kaynak). Bu durumu düşünerek, Türkçe bir tarayıcı yapmak istedim. Bu tarayıcı sadece Türkçe olmayacaktı, aynı zamanda Türk mitolojisi ve tarihini araştırmak isteyenlere internetsiz erişim sağlayacak bir proje olacaktı.

Projeye özgün bir şeyler eklemek konusunda çok titiz davrandım. Sadece Chromium veya Firefox'un adını değiştirip iki logo ekleyerek bir tarayıcı sunmak istemedim. Bu yüzden tarayıcıya çeşitli özellikler eklemeye başladım. İlk olarak Electron kullanan bir tarayıcı vardı, bu tarayıcı Anka adıyla Hüma'nın ilk kararlı sürümü olacaktı. Mart ayına kadar bu sürümü geliştirdim. Ancak, Anka adını Hüma olarak değiştirdim çünkü Anka adı her yerde kullanılmıştı ve herkes tarafından biliniyordu. Hüma ise mitolojimizi araştırırken öğrendiğim, pek duyulmamış bir kuştu. Hüma, cennet kuşu olarak geçer; cennette uçar ve arada insanlara görünür. Hüma'nın üzerinden geçtiği insanların yüceleceğine ve tahta geçeceğine inanılır. Böylece, en sonunda Anka adı Hüma olarak değiştirildi.

Başından beri Firefox tabanlı bir tarayıcı yapmak istemiştim, ancak Electron'dan başlamak daha doğru oldu. Electron tabanlı sürümü geliştirirken Firefox'u derlemeyi denedim. İlk zamanlar hiçbir Firefox çatalını başarılı bir şekilde derleyemedim. Ancak, Electron tabanlı sürüme odaklanmayı bıraktığımda tüm çabamı Firefox'a verdim ve sonunda nasıl derleyeceğimi ve paketleyeceğimi öğrendim. İlerleyen zamanda, Electron tabanlı sürümde olan özellikleri bu sürüme ekledim ve sonunda ilk yerli web tarayıcımızın ilk gösterimlerini başarıyla tamamladım.

Şu anda Hüma'nın başlıca özellikleri şunlardır:
- **Kendi Teması:** Varsayılan olarak yüklü gelir.
- **Hüma Gezgini:** Hüma'nın varsayılan eklentisidir. Hüma Gezgini, tarayıcının sayfaları arasında ve Hüma'nın alt projelerinde gezinmek, yer imlerine kolayca erişmek için kullanılır. Takvim, yapılacak listesi ve belki yapay zeka desteği ekleyeceğim.
- **Hüma Tarih ve Hüma Mitoloji:** Bu sayfalar mitolojimizi ve tarihimiz tanıtan, internetsiz bir ansiklopedidir. Sayfalar tarayıcı içerisinde tutulur.
- **Hüma Bulut:** Hüma tarayıcısı için geliştirilmiş bir bulut sistemidir. Dosyalar taşıyabilir, şu anda dosya başı sınır 10MB'dir.
- **Hüma Betik:** Türkçe söz dizimine sahip betik yazmak isteyenler için bir web yorumcusudur. Webde çalışır ve şu anda sadece tek satır yazım biçimini destekler.

Hüma büyük çaplı bir proje olma hedefi güttüğü için şu anda tamamen bitmiş değildir. Hüma, açık kaynak ve özgür yazılımdır. Şu anda resmi bir web sitesi yoktur (yakında tamamlanacak ve yayınlanacak).

Hüma'nın diğer bir alt projesi ise Ak Ana'dır. (Ak Ana, Hüma adından önce düşündüğüm bir isimdi; Ak Ana, tanrıya yaratma fikrini veren bir tanrıçadır.) Ak Ana, örneğin WhatsApp gibi web sitelerini indirmemizi sağlayan PWA yöntemine bir alternatiftir. PWA, şu anda Firefox'ta olmayan bir özelliktir ve ben de Ak Ana ile bu PWA'yı sağlamayı amaçladım.

# Hüma Özel Sayfaları
## Hüma Türk Tarihi Web Sayfası
Türk tarihi, Orta Asya'dan başlayarak günümüze kadar uzanan köklü bir geçmişe sahiptir. Türkler, tarih boyunca çeşitli medeniyetlere ev sahipliği yapmış ve kendilerine özgü bir kültür ve yaşam tarzı geliştirmişlerdir.

# Hüma Gezgini ve Teması
## Hüma Gezgini

Hüma Gezgini, taraycınızda varsayılan olarak yüklü gelen bir eklentidir. Eklenti, yer imleriniz ve Hüma projesinin bağlantıları arasında gezinmenize yardımcı olurken aynı zamanda size bir tarayıcı rehberi olacaktır. Tarayıcınızda ki sayfalar arasında kolayca gezinebilmenizi sağlar ve özelleştirebilidir. Eklentiye erişebilmek için bilgisayar farenizden sağ tuşa basın ve çıkan menüden "Hüma Gezgini'ni aç" seçeneğini seçin. Kenar Çubuğunda eklentiniz görünecektir. Keyifli kullanmalar!

## Hüma Teması

Hüma Teması, tarayıcınızda varsayılan olarak gelen bir temadır. Hoşunuza gitmediği durumlarda veya sıkıldığınızda yüzlerce tema arasından en uygun temayı bularak tarayıcınızı özgürce kullanabilirsiniz!

Özellikler:

    Yerli ve özgün bir web tarayıcısı
    Firefox ile uyumlu
    Güvenli ve hızlı
    Türk Tarihi ve Türk Mitolojisi hakkında bilgi içeren statik yerel sayfalar
    Türkçe söz dizimine sahip "HümaBetik" dili
    Kolay kurulum ve kullanım

Sürümler:

    Hüma-Electron: Electron ile yazılmış deneysel sürüm.
    Hüma (Firefox Çatalı): Asıl hedef olan ve şu anda üzerinde geliştirilmeye devam edilen Firefox çatalı sürüm.

Kurulum:

Projeyi klonlayın:

    git clone https://github.com/VastSea0/Huma.git

Dizine gidin:

    cd Huma

Ön yükleme yapın:

    ./mach bootstrap

Derleme:

    ./mach build

Paketleme:

    ./mach package

Çalıştırma:

    ./mach run

Daha Fazla Bilgi:

    Proje Deposu: [https://github.com/VastSea0/Huma](https://github.com/VastSea0/Huma)
    Mozilla Geliştirici Belgeleri: [https://developer.mozilla.org/en-US/](https://firefox-source-docs.mozilla.org)
    
Projeye Katkı Sağlamak:

Hüma Tarayıcısı'nın gelişmesine katkıda bulunmak istiyorsanız, lütfen projenin GitHub deposuna göz atın ve açık sorunlara bakın. Her türlü katkı açıktır.

Teşekkürler!

Hüma Tarayıcısı'nı kullanmayı seçtiğiniz için teşekkür ederiz. Herhangi bir sorunuz veya öneriniz varsa, lütfen bizimle iletişime geçmekten çekinmeyin.

# Ekran Görüntüleri

![Ekran Görüntüsü_20240606_013240](https://github.com/VastSea0/Huma/assets/144556903/da9d0e43-a203-49f1-bfe7-b05fe462f669)
![image](https://github.com/VastSea0/Huma/assets/144556903/517245a7-d9a0-4efe-93ae-2d6a0c509126)
![image](https://github.com/VastSea0/Huma/assets/144556903/c9e96df5-c06f-413c-8659-880c8c8323b2)
![image](https://github.com/VastSea0/Huma/assets/144556903/7d36524b-cf12-4136-9ea4-3064923d2ec8)
![image](https://github.com/VastSea0/Huma/assets/144556903/8b557b31-84f5-4cbb-89be-6aaf30a359f0)
![image](https://github.com/VastSea0/Huma/assets/144556903/686ea2cb-4cb3-49f2-894f-e82c663ddcda)
![image](https://github.com/VastSea0/Huma/assets/144556903/2899af51-c05b-43a7-bbd1-fa73e239abd8)
![image](https://github.com/VastSea0/Huma/assets/144556903/6e774006-e589-4e76-9e62-86d1f7f7be59)
![image](https://github.com/VastSea0/Huma/assets/144556903/82fa8f29-308a-468f-a7f2-f926762434d1)

**İletişim:** 
- Instagram: [@marsstakiuzayliyim](https://www.instagram.com/marsstakiuzayliyim/)
- Web Sitesi: [vastsea.com.tr](https://vastsea.com.tr)
- Blog Sitesi: [vastseablog.com](https://vastseablog.com)
- Instagram Hesabı: [@vastseaofficial](https://www.instagram.com/vastseaofficial/)

 

