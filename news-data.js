// TransferNabız canlı veri katmanı.
// Bu dosya periyodik olarak gerçek spor haberi kaynaklarından taranan
// verilerle güncellenir. Görseller kaynak sitenin kendi haber fotoğrafıdır
// (link önizlemesi mantığıyla); her öğe orijinal kaynağa atıf içerir.
const NEWS_META = {
  generatedAt: "2026-08-13T17:20:00+03:00",
  generatedLabel: "13 Ağustos 2026 · 17:20",
  nextUpdateMinutes: 60
};

const HERO_ITEM = {
  badge: "Son Dakika",
  probability: 95,
  title: "Fenerbahçe'nin yeni transferi Lukaku sağlık kontrolünden geçti",
  lede: "Napoli'den kadroya katılan Belçikalı golcü Romelu Lukaku, Medicana Ataşehir Hastanesi'nde sağlık kontrolünden geçti. Kulüp, imza töreninin saatini de netleştirdi.",
  from: "Napoli",
  to: "Fenerbahçe",
  marketValue: "Resmi",
  byline: "Spor Servisi",
  image: "https://iaftm.tmgrup.com.tr/526e78/1200/675/0/462/1458/1281?u=https://iaspr.tmgrup.com.tr/2026/08/13/fenerbahcenin-yeni-transferi-romelu-lukaku-saglik-kontrolunden-gecti-1786622482173.jpeg",
  source: { name: "Fotomaç", url: "https://www.fotomac.com.tr/fenerbahce/2026/08/13/fenerbahcenin-yeni-transferi-romelu-lukaku-saglik-kontrolunden-gecti" }
};

const SIDE_ITEMS = [
  {
    title: "Galatasaray'ın gündeminde Ugochukwu var",
    meta: "Anlaşma Yakın",
    image: null,
    source: { name: "Sporx", url: "https://www.sporx.com/transferler/" }
  },
  {
    title: "Fenerbahçe'de Greenwood için bonservis pürüzü aşıldı",
    meta: "Anlaşma Yakın",
    image: null,
    source: { name: "Fanatik", url: "https://www.fanatik.com.tr/transfer/" }
  },
  {
    title: "Fenerbahçe eski yıldızını geri getiriyor! Şampiyonlar Ligi bombası",
    meta: "İddia",
    image: "https://iaftm.tmgrup.com.tr/9ced42/215/215/0/0/659/659?u=https://iftm.tmgrup.com.tr/2026/08/13/fenerbahce-eski-yildizini-transfer-ediyor-kanaryadan-sampiyonlar-ligi-bombasi-1786602040476.jpeg",
    source: { name: "aSpor", url: "https://www.aspor.com.tr/fenerbahce/2026/08/13/fenerbahce-eski-yildizini-transfer-ediyor-kanaryadan-sampiyonlar-ligi-bombasi" }
  },
  {
    title: "Trabzonspor, sol bek Lovik'i kadrosuna kattı",
    meta: "Resmi",
    image: null,
    source: { name: "NTV Spor", url: "https://www.ntvspor.net/transfer" }
  }
];

const NEWS_ITEMS = [
  {
    status: "iddia", statusLabel: "İddia", probability: 30,
    title: "Galatasaray'a Osimhen için 130 milyon Euroluk teklif iddiası",
    summary: "Alman basınına göre Al-Hilal, Victor Osimhen için menajer aracılığıyla dev bir sözlü teklif iletti. Sarı-kırmızılıların bu aşamada pazarlığa açık olmadığı belirtiliyor.",
    from: "Galatasaray", to: "Al-Hilal",
    image: "https://iaftm.tmgrup.com.tr/f9ab4a/1200/675/0/0/800/449?u=https://iftm.tmgrup.com.tr/2026/08/13/galatasaraya-osimhen-icin-tarihi-transfer-teklifi-alman-basinindan-flas-iddia-1786621438727.jpeg",
    source: { name: "Fotomaç", url: "https://www.fotomac.com.tr/galatasaray/2026/08/13/galatasaraya-osimhen-icin-tarihi-transfer-teklifi-alman-basinindan-flas-iddia" }
  },
  {
    status: "iddia", statusLabel: "İddia", probability: 35,
    title: "Galatasaray'dan Premier Lig çıkarması: Martinelli ve Mac Allister hedefte",
    summary: "Cimbom, Arsenal'dan Gabriel Martinelli için 38 milyon sterlini gözden çıkarırken, Liverpool'un orta sahası Alexis Mac Allister'ı da gündemine aldı.",
    from: "Arsenal / Liverpool", to: "Galatasaray",
    image: "https://iaftm.tmgrup.com.tr/e084b8/1200/675/0/0/1500/844?u=https://iftm.tmgrup.com.tr/2026/08/13/galatasaraydan-transferde-premier-lig-cikarmasi-martinelli-haricinde-o-yildiz-da-hedefte-1786615970420.jpeg",
    source: { name: "Fotomaç", url: "https://www.fotomac.com.tr/galatasaray/2026/08/13/galatasaraydan-transferde-premier-lig-cikarmasi-martinelli-haricinde-o-yildiz-da-hedefte" }
  },
  {
    status: "yakin", statusLabel: "Anlaşma Yakın", probability: 90,
    title: "Konyaspor'da Masuaku sağlık kontrolünde",
    summary: "Futbol Şube Sorumlusu Ali Camgöz, Arthur Masuaku ile prensipte anlaştıklarını ve aksilik çıkmazsa bu hafta imzanın atılacağını açıkladı.",
    from: "Serbest", to: "Konyaspor",
    image: "https://iaftm.tmgrup.com.tr/d22c80/1200/675/0/0/2048/1151?u=https://iftm.tmgrup.com.tr/2026/08/10/konyasporda-masuaku-icin-flas-aciklama-1786359961996.jpg",
    source: { name: "Fotomaç", url: "https://www.fotomac.com.tr/transfer/2026/08/10/konyasporda-masuaku-icin-flas-aciklama" }
  },
  {
    status: "resmi", statusLabel: "Resmi", probability: 100,
    title: "Djed Spence, Tottenham'dan Inter'e transfer oldu",
    summary: "İngiliz sağ bek Djed Spence, 31.5 milyon Euro artı bonuslar karşılığında 2031'e kadar Inter'e imza attı.",
    from: "Tottenham", to: "Inter",
    image: "https://icdn.football-italia.net/wp-content/uploads/2026/08/Djed-Spence-jaw.jpg",
    source: { name: "Football Italia", url: "https://football-italia.net/inter-agreement-spence-tottenham-e31-5m-bonus/" }
  },
  {
    status: "resmi", statusLabel: "Resmi", probability: 100,
    title: "Vlahovic, Beşiktaş'ta 3 yıllık sözleşmeye imza attı",
    summary: "Eski Juventus ve Fiorentina forveti Dusan Vlahovic, Türkiye'de Vincenzo Italiano ile yeniden buluşarak Beşiktaş'la üç yıllık anlaşmaya vardı.",
    from: "Juventus", to: "Beşiktaş",
    image: null,
    source: { name: "Football Italia", url: "https://football-italia.net/done-deal-vlahovic-agreement-besiktas-contract/" }
  },
  {
    status: "resmi", statusLabel: "Resmi", probability: 100,
    title: "David Romero, Parma'ya transfer oluyor",
    summary: "Arjantinli golcü David Romero, yaklaşık 7 milyon Euro karşılığında İtalya'ya uçtu ve Parma ile sağlık kontrolüne girdi.",
    from: "Tigre", to: "Parma",
    image: "https://icdn.football-italia.net/wp-content/uploads/2026/08/David-Romero-Tigre.jpg",
    source: { name: "Football Italia", url: "https://football-italia.net/done-deal-romero-ready-for-parma-e7m-tigres/" }
  },
  {
    status: "resmi", statusLabel: "Resmi", probability: 100,
    title: "Frattesi, Lazio'ya kiralık gitti",
    summary: "Inter, Davide Frattesi'yi 1 milyon Euro kiralama bedeliyle Lazio'ya gönderdi; belirli şartlar oluşursa 14 milyon Euroluk satın alma opsiyonu devreye girecek.",
    from: "Inter", to: "Lazio",
    image: null,
    source: { name: "Football Italia", url: "https://football-italia.net/frattesi-lazio-e15m-inter-retain-50-per-cent/" }
  },
  {
    status: "yakin", statusLabel: "Anlaşma Yakın", probability: 85,
    title: "Ruggeri, Aston Villa'yla kişisel şartlarda anlaştı",
    summary: "İtalyan sağ bek Matteo Ruggeri, Atletico Madrid'den 25 milyon Euro artı bonuslar karşılığında Aston Villa'ya transfer olmak üzere sağlık kontrolüne gidiyor.",
    from: "Atletico Madrid", to: "Aston Villa",
    image: null,
    source: { name: "Football Italia", url: "https://football-italia.net/done-ruggeri-agrees-personal-terms-aston-villa/" }
  },
  {
    status: "iddia", statusLabel: "İddia", probability: 40,
    title: "Galatasaray, Martinelli için resmi teklif sundu",
    summary: "İngiliz basınına göre Galatasaray, Arsenal'ın Brezilyalı kanat oyuncusu Gabriel Martinelli için resmi bir teklif verdi.",
    from: "Arsenal", to: "Galatasaray",
    image: "https://ichef.bbci.co.uk/ace/standard/480/cpsprodpb/4b9b/live/2b0474e0-9692-11f1-870d-5d08c49babb2.png",
    source: { name: "BBC Sport", url: "https://www.bbc.com/sport/football/articles/cwy42p7r00zo" }
  },
  {
    status: "resmi", statusLabel: "Resmi", probability: 100,
    title: "Cristian Romero, Atletico Madrid'e transfer oluyor",
    summary: "Tottenham'ın Arjantinli stoperi Cristian Romero için Atletico Madrid'le 34 milyon sterlinlik anlaşmaya varıldı.",
    from: "Tottenham", to: "Atletico Madrid",
    image: null,
    source: { name: "BBC Sport", url: "https://www.bbc.com/sport/football/articles/cy8e2vx2l30o" }
  },
  {
    status: "yakin", statusLabel: "Anlaşma Yakın", probability: 55,
    title: "Chelsea, Enzo Fernandez için Man City'ye cuma gününe kadar süre verdi",
    summary: "Chelsea, orta saha oyuncusu Enzo Fernandez için Manchester City'den 120 milyon sterlin veya üzeri bir teklif bekliyor; süre cuma günü doluyor.",
    from: "Chelsea", to: "Manchester City",
    image: null,
    source: { name: "Sky Sports", url: "https://www.skysports.com/football/news/11095/13572395/enzo-fernandez-transfer-news-chelsea-set-man-city-deadline-to-bid-for-midfielder" }
  },
  {
    status: "resmi", statusLabel: "Resmi", probability: 100,
    title: "Celtic, Mısırlı kanat Hassan'ı 4 yıllığına transfer etti",
    summary: "Real Oviedo'dan gelen Mısırlı kanat oyuncusu Haissem Hassan, Celtic ile dört yıllık sözleşmeye imza attı ve kritik bir Şampiyonlar Ligi maçına yetişti.",
    from: "Real Oviedo", to: "Celtic",
    image: null,
    source: { name: "Sky Sports", url: "https://www.skysports.com/football/news/11787/13570650/haissem-hassan-celtic-sign-egypt-winger-from-real-oviedo-on-four-year-deal-worth-lb9m" }
  },
  {
    status: "resmi", statusLabel: "Resmi", probability: 100,
    title: "Real Betis, Fran Garcia'nın kartını Real Madrid'le paylaştı",
    summary: "Real Madridli sol bek Fran Garcia için Real Betis, 2030'a kadar sürecek bir anlaşmayla oyuncunun haklarının yarısını satın aldı.",
    from: "Real Madrid", to: "Real Betis",
    image: null,
    source: { name: "NewsNow", url: "https://www.newsnow.co.uk/h/Sport/Football/Transfer+News/Confirmed+Transfers" }
  },
  {
    status: "resmi", statusLabel: "Resmi", probability: 100,
    title: "Daley Blind, kariyerini bitirmek için Ajax'a döndü",
    summary: "Tecrübeli savunmacı Daley Blind, futbol hayatını tamamlamak üzere formasını giydiği ilk kulübü Ajax'a duygusal bir dönüş yaptı.",
    from: "Serbest", to: "Ajax",
    image: null,
    source: { name: "NewsNow", url: "https://www.newsnow.co.uk/h/Sport/Football/Transfer+News/Confirmed+Transfers" }
  },
  {
    status: "resmi", statusLabel: "Resmi", probability: 100,
    title: "Bayern Münih, Nathaniel Brown'ı 2031'e kadar bağladı",
    summary: "Eintracht Frankfurt'tan transfer edilen Alman savunmacı Nathaniel Brown, Bayern Münih ile uzun soluklu bir sözleşmeye imza attı.",
    from: "Eintracht Frankfurt", to: "Bayern Münih",
    image: null,
    source: { name: "FootballTransfers", url: "https://www.footballtransfers.com/en/transfer-news/" }
  },
  {
    status: "resmi", statusLabel: "Resmi", probability: 100,
    title: "Trabzonspor'da sol bek takviyesi tamam: Mathias Lovik geldi",
    summary: "Norveçli sol bek Mathias Lovik, Parma'dan Trabzonspor'a transfer olarak imzayı attı.",
    from: "Parma", to: "Trabzonspor",
    image: null,
    source: { name: "NTV Spor", url: "https://www.ntvspor.net/transfer" }
  }
];
