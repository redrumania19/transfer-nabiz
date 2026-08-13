// TransferNabız canlı veri katmanı.
// Bu dosya periyodik olarak gerçek spor haberi kaynaklarından taranan
// verilerle güncellenir. Her öğe orijinal kaynağa atıf içerir.
const NEWS_META = {
  generatedAt: "2026-08-13T16:55:00+03:00",
  generatedLabel: "13 Ağustos 2026 · 16:55",
  nextUpdateMinutes: 60
};

const HERO_ITEM = {
  badge: "Son Dakika",
  probability: 90,
  title: "Galatasaray'ın yeni transferi Yaser Asprilla imza için İstanbul'da",
  lede: "Kolombiyalı kanat oyuncusu Asprilla, sarı-kırmızılı kulüple anlaşma sağladıktan sonra İstanbul'a geldi; kulüp de oyuncunun taraftara mesajını paylaştı. Resmi imza töreni için geri sayım sürüyor.",
  from: "Watford",
  to: "Galatasaray",
  marketValue: "€12M",
  byline: "Spor Servisi",
  source: { name: "Milliyet", url: "https://www.milliyet.com.tr/haberleri/super-lig-transfer-haberleri" }
};

const SIDE_ITEMS = [
  {
    title: "Konyaspor, Arthur Masuaku'yu resmen açıkladı",
    meta: "Resmi",
    source: { name: "Milliyet", url: "https://www.milliyet.com.tr/haberleri/super-lig-transfer-haberleri" }
  },
  {
    title: "Trabzonspor'da sol bek Mathias Lovik imzayı attı",
    meta: "Resmi",
    source: { name: "NTV Spor", url: "https://www.ntvspor.net/transfer" }
  },
  {
    title: "Galatasaray, Martinelli'yi Arsenal'den kiralamak istiyor",
    meta: "İddia",
    source: { name: "Milliyet", url: "https://www.milliyet.com.tr/haberleri/super-lig-transfer-haberleri" }
  },
  {
    title: "Beşiktaş'ın gündeminde Fenerbahçe'den iki isim var",
    meta: "İddia",
    source: { name: "Milliyet", url: "https://www.milliyet.com.tr/haberleri/super-lig-transfer-haberleri" }
  }
];

const NEWS_ITEMS = [
  {
    status: "resmi", statusLabel: "Resmi", probability: 100,
    title: "Real Betis, Fran Garcia'nın kartını Real Madrid'le paylaştı",
    summary: "Real Madridli sol bek Fran Garcia için Real Betis, 2030'a kadar sürecek bir anlaşmayla oyuncunun haklarının yarısını satın aldı.",
    from: "Real Madrid", to: "Real Betis",
    source: { name: "NewsNow", url: "https://www.newsnow.co.uk/h/Sport/Football/Transfer+News/Confirmed+Transfers" }
  },
  {
    status: "resmi", statusLabel: "Resmi", probability: 100,
    title: "Daley Blind, kariyerini bitirmek için Ajax'a döndü",
    summary: "Tecrübeli savunmacı Daley Blind, futbol hayatını tamamlamak üzere formasını giydiği ilk kulübü Ajax'a duygusal bir dönüş yaptı.",
    from: "Serbest", to: "Ajax",
    source: { name: "NewsNow", url: "https://www.newsnow.co.uk/h/Sport/Football/Transfer+News/Confirmed+Transfers" }
  },
  {
    status: "resmi", statusLabel: "Resmi", probability: 100,
    title: "Chelsea, uzun görüşmelerin ardından Pep Chavarria'yı kadrosuna kattı",
    summary: "Stamford Bridge yönetimi, uzun süredir takip ettiği Pep Chavarria transferini yaklaşık 21 milyon Euroya tamamladı.",
    from: "Villarreal", to: "Chelsea",
    source: { name: "NewsNow", url: "https://www.newsnow.co.uk/h/Sport/Football/Transfer+News/Confirmed+Transfers" }
  },
  {
    status: "resmi", statusLabel: "Resmi", probability: 100,
    title: "Gustavo Hamer, 'hayalindeki' transferle Coventry City'ye döndü",
    summary: "Orta saha oyuncusu Gustavo Hamer'ın Coventry City'ye dönüşü kulüp tarafından resmen doğrulandı.",
    from: "Sheffield United", to: "Coventry City",
    source: { name: "NewsNow", url: "https://www.newsnow.co.uk/h/Sport/Football/Transfer+News/Confirmed+Transfers" }
  },
  {
    status: "resmi", statusLabel: "Resmi", probability: 100,
    title: "Konyaspor'da yeni transfer: Arthur Masuaku resmen kadroda",
    summary: "Tecrübeli sol bek Arthur Masuaku, Konyaspor'la anlaşarak Süper Lig'deki yeni durağına imza attı.",
    from: "Serbest", to: "Konyaspor",
    source: { name: "Milliyet", url: "https://www.milliyet.com.tr/haberleri/super-lig-transfer-haberleri" }
  },
  {
    status: "resmi", statusLabel: "Resmi", probability: 100,
    title: "Trabzonspor'da sol bek takviyesi tamam: Mathias Lovik geldi",
    summary: "Norveçli sol bek Mathias Lovik, Parma'dan Trabzonspor'a transfer olarak imzayı attı.",
    from: "Parma", to: "Trabzonspor",
    source: { name: "NTV Spor", url: "https://www.ntvspor.net/transfer" }
  },
  {
    status: "yakin", statusLabel: "Anlaşma Yakın", probability: 90,
    title: "Galatasaray'ın yeni transferi Asprilla, imza için İstanbul'da",
    summary: "Kolombiyalı kanat oyuncusu, anlaşma sonrası İstanbul'a geldi; kulüp oyuncunun taraftara seslendiği mesajı paylaştı.",
    from: "Watford", to: "Galatasaray",
    source: { name: "Milliyet", url: "https://www.milliyet.com.tr/haberleri/super-lig-transfer-haberleri" }
  },
  {
    status: "yakin", statusLabel: "Anlaşma Yakın", probability: 75,
    title: "Tchouameni'de Real Madrid'e bağlılık sinyali",
    summary: "Fransız orta saha oyuncusunun, iyileştirilmiş şartlarla Real Madrid'deki geleceğini garantilemeye yakın olduğu belirtiliyor.",
    from: "Real Madrid", to: "Real Madrid",
    source: { name: "NewsNow", url: "https://www.newsnow.co.uk/h/Sport/Football/Transfer+News/Confirmed+Transfers" }
  },
  {
    status: "iddia", statusLabel: "İddia", probability: 35,
    title: "Galatasaray'ın gözü Arsenal'de: Martinelli için ilk temas",
    summary: "Sarı-kırmızılıların, Brezilyalı kanat oyuncusunu kiralık olarak kadroya katmak için Arsenal'le ilk temasları kurduğu konuşuluyor.",
    from: "Arsenal", to: "Galatasaray",
    source: { name: "Milliyet", url: "https://www.milliyet.com.tr/haberleri/super-lig-transfer-haberleri" }
  },
  {
    status: "iddia", statusLabel: "İddia", probability: 25,
    title: "Beşiktaş'ın transfer listesinde Fenerbahçeli iki isim",
    summary: "Siyah-beyazlı yönetimin gündemine, Fenerbahçe kadrosundan iki oyuncunun eklendiği iddiaları gündemde.",
    from: "Fenerbahçe", to: "Beşiktaş",
    source: { name: "Milliyet", url: "https://www.milliyet.com.tr/haberleri/super-lig-transfer-haberleri" }
  },
  {
    status: "resmi", statusLabel: "Resmi", probability: 100,
    title: "Bayern Münih, Nathaniel Brown'ı 2031'e kadar bağladı",
    summary: "Eintracht Frankfurt'tan transfer edilen Alman savunmacı Nathaniel Brown, Bayern Münih ile uzun soluklu bir sözleşmeye imza attı.",
    from: "Eintracht Frankfurt", to: "Bayern Münih",
    source: { name: "FootballTransfers", url: "https://www.footballtransfers.com/en/transfer-news/" }
  },
  {
    status: "resmi", statusLabel: "Resmi", probability: 100,
    title: "Arsenal, şampiyonluğu savunmak için dört transfer birden yaptı",
    summary: "Bruno Guimarães, Christos Tzolis, Piero Hincapié ve Illan Meslier ile kadrosunu genişleten Arsenal, Premier Lig'de unvanını korumayı hedefliyor.",
    from: "Çeşitli Kulüpler", to: "Arsenal",
    source: { name: "FootballTransfers", url: "https://www.footballtransfers.com/en/transfer-news/" }
  }
];
