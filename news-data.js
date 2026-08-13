// TransferNabız canlı veri katmanı.
// Bu dosya periyodik olarak gerçek spor haberi kaynaklarından taranan
// verilerle güncellenir. Görseller kaynak sitenin kendi haber fotoğrafıdır
// (link önizlemesi mantığıyla); "detail" alanı TransferNabız editörü
// tarafından yazılmış özgün metindir. Her öğe orijinal kaynağa atıf içerir.
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
  detail: [
    "Fenerbahçe'nin yaz döneminde kadrosuna kattığı 33 yaşındaki Belçikalı forvet Romelu Lukaku, sağlık kontrol sürecini tamamladı. Sarı-lacivertli kulübün açıklamasına göre kontroller Medicana Ataşehir Hastanesi'nde yapıldı; kan tetkiklerinin ardından ortopedi, iç hastalıkları, göz, kulak-burun-boğaz, genel cerrahi ve kardiyoloji bölümlerinde detaylı muayeneler gerçekleştirildi.",
    "Efor, akciğer ve kardiyak testlerinin ardından MR çekimiyle süreç tamamlanan Lukaku için kulüp, imza töreninin saatini de netleştirdiğini duyurdu. Napoli'den transfer edilen tecrübeli golcünün Süper Lig'e uyum süreci, sezon başı hazırlık maçlarıyla birlikte değerlendirilecek."
  ],
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
    detail: [
      "Galatasaray'ın kiralık olarak kadrosuna kattığı Lesley Ugochukwu için transferin tamamlanma sürecinde son aşamaya gelindiği konuşuluyor. Oyuncunun menajeri, gerekli formaliteleri tamamlamak üzere İstanbul'da temaslarını sürdürüyor.",
      "Chelsea'den kiralanan genç orta saha oyuncusunun sezon boyunca Galatasaray'ın orta saha rotasyonunda önemli bir seçenek olması bekleniyor."
    ],
    source: { name: "Sporx", url: "https://www.sporx.com/transferler/" }
  },
  {
    title: "Fenerbahçe'de Greenwood için bonservis pürüzü aşıldı",
    meta: "Anlaşma Yakın",
    image: null,
    detail: [
      "Fenerbahçe'nin Mason Greenwood için Marsilya'ya sunduğu teklifte son pürüzün aşıldığı iddia ediliyor. Fransız kulübünün başlangıçta talep ettiği 8 milyon Euroluk bonservis bedelinden vazgeçtiği öne sürülüyor.",
      "Sarı-lacivertlilerin oyuncuyla kişisel şartlarda daha önce anlaştığı, kalan sürecin kulüpler arası bonservis görüşmesine bağlı olduğu belirtiliyor."
    ],
    source: { name: "Fanatik", url: "https://www.fanatik.com.tr/transfer/" }
  },
  {
    title: "Fenerbahçe eski yıldızını geri getiriyor! Şampiyonlar Ligi bombası",
    meta: "İddia",
    image: "https://iaftm.tmgrup.com.tr/9ced42/215/215/0/0/659/659?u=https://iftm.tmgrup.com.tr/2026/08/13/fenerbahce-eski-yildizini-transfer-ediyor-kanaryadan-sampiyonlar-ligi-bombasi-1786602040476.jpeg",
    detail: [
      "Fenerbahçe'nin Şampiyonlar Ligi kadrosunu güçlendirmek amacıyla daha önce formasını giydiği bir ismi geri getirmeyi planladığı öne sürülüyor. Oyuncunun kimliğine dair ayrıntılar kaynak haberde yer alıyor; TransferNabız bu iddiayı doğrulanmış bir gelişme olarak değil, gündemdeki bir rapor olarak aktarıyor.",
      "Kulüp cephesinden konuya ilişkin resmi bir açıklama şu ana kadar yapılmadı. Gelişmenin netleşmesi halinde haberimizi güncelleyeceğiz."
    ],
    source: { name: "aSpor", url: "https://www.aspor.com.tr/fenerbahce/2026/08/13/fenerbahce-eski-yildizini-transfer-ediyor-kanaryadan-sampiyonlar-ligi-bombasi" }
  },
  {
    title: "Trabzonspor, sol bek Lovik'i kadrosuna kattı",
    meta: "Resmi",
    image: null,
    detail: [
      "Norveçli sol bek Mathias Lovik, Parma'dan Trabzonspor'a transfer olarak Süper Lig'e adım attı. Kulüp resmi açıklamasında oyuncunun sözleşme detaylarını paylaştı.",
      "Trabzonspor'un savunma hattını güçlendirmek için yaptığı bu transferle birlikte teknik ekibin kanat seçeneklerinin artması bekleniyor."
    ],
    source: { name: "NTV Spor", url: "https://www.ntvspor.net/transfer" }
  }
];

const NEWS_ITEMS = [
  {
    status: "iddia", statusLabel: "İddia", probability: 30,
    title: "Galatasaray'a Osimhen için 130 milyon Euroluk teklif iddiası",
    summary: "Alman basınına göre Al-Hilal, Victor Osimhen için menajer aracılığıyla dev bir sözlü teklif iletti. Sarı-kırmızılıların bu aşamada pazarlığa açık olmadığı belirtiliyor.",
    detail: [
      "Alman basınına yansıyan iddiaya göre Suudi Arabistan ekibi Al-Hilal, Galatasaray'ın Nijeryalı golcüsü Victor Osimhen için bir menajer aracılığıyla 130 milyon Euroluk sözlü bir teklif iletti. Haberin kaynağı gösterilen Sky Sport muhabiri Florian Plettenberg'in bilgilerine göre teklif henüz resmi bir görüşmeye dönüşmedi.",
      "Sarı-kırmızılı yönetimin bu aşamada pazarlığa açık olmadığı ve oyuncuyla 2029'a kadar sözleşmesi bulunduğu belirtiliyor. Geçen sezon 75 milyon Euroluk bonservis bedeliyle kadroya katılan Osimhen için gelecek bir teklifin kabul edilmesi halinde kulüp tarihinin en yüksek satış gelirlerinden biri gerçekleşmiş olacak."
    ],
    from: "Galatasaray", to: "Al-Hilal",
    image: "https://iaftm.tmgrup.com.tr/f9ab4a/1200/675/0/0/800/449?u=https://iftm.tmgrup.com.tr/2026/08/13/galatasaraya-osimhen-icin-tarihi-transfer-teklifi-alman-basinindan-flas-iddia-1786621438727.jpeg",
    source: { name: "Fotomaç", url: "https://www.fotomac.com.tr/galatasaray/2026/08/13/galatasaraya-osimhen-icin-tarihi-transfer-teklifi-alman-basinindan-flas-iddia" }
  },
  {
    status: "iddia", statusLabel: "İddia", probability: 35,
    title: "Galatasaray'dan Premier Lig çıkarması: Martinelli ve Mac Allister hedefte",
    summary: "Cimbom, Arsenal'dan Gabriel Martinelli için 38 milyon sterlini gözden çıkarırken, Liverpool'un orta sahası Alexis Mac Allister'ı da gündemine aldı.",
    detail: [
      "Transfer döneminde şimdiye kadar sadece Lesley Ugochukwu'yu kiralık olarak kadrosuna katan Galatasaray, uzun süredir devam eden sessizliğini bozmak istiyor. Kulübün bu doğrultuda Arsenal'ın Brezilyalı kanat oyuncusu Gabriel Martinelli için 38 milyon sterlini gözden çıkardığı öğrenildi.",
      "İngiliz basınından The Guardian'ın haberine göre sarı-kırmızılılar, Liverpool'un Arjantinli orta sahası Alexis Mac Allister ile de yakından ilgileniyor. Transfermarkt verilerine göre güncel piyasa değeri 70 milyon Euro olan ve Liverpool'la 2028'e kadar sözleşmesi bulunan Mac Allister, geçtiğimiz sezon 150 maça çıkarken 19 gol 20 asistlik performans sergiledi."
    ],
    from: "Arsenal / Liverpool", to: "Galatasaray",
    image: "https://iaftm.tmgrup.com.tr/e084b8/1200/675/0/0/1500/844?u=https://iftm.tmgrup.com.tr/2026/08/13/galatasaraydan-transferde-premier-lig-cikarmasi-martinelli-haricinde-o-yildiz-da-hedefte-1786615970420.jpeg",
    source: { name: "Fotomaç", url: "https://www.fotomac.com.tr/galatasaray/2026/08/13/galatasaraydan-transferde-premier-lig-cikarmasi-martinelli-haricinde-o-yildiz-da-hedefte" }
  },
  {
    status: "yakin", statusLabel: "Anlaşma Yakın", probability: 90,
    title: "Konyaspor'da Masuaku sağlık kontrolünde",
    summary: "Futbol Şube Sorumlusu Ali Camgöz, Arthur Masuaku ile prensipte anlaştıklarını ve aksilik çıkmazsa bu hafta imzanın atılacağını açıkladı.",
    detail: [
      "Konyaspor Futbol Şube Sorumlusu Ali Camgöz, kulüp sözcüsüyle düzenlediği basın toplantısında yeni sezon hedeflerini ve transfer çalışmalarını değerlendirdi. Camgöz, Demokratik Kongolu tecrübeli sol bek Arthur Masuaku ile prensipte anlaşmaya varıldığını, oyuncunun şu anda sağlık kontrolünden geçtiğini açıkladı.",
      "Daha önce Beşiktaş forması giyen ve son olarak İngiltere'nin Sunderland takımında forma giyen Masuaku'nun transferi tamamlandığında kulübün 10 yabancı oyuncu kontenjanından bir hakkı kalacak. Camgöz, sürecin bu hafta içinde sonuçlanmasını beklediklerini belirtti."
    ],
    from: "Serbest", to: "Konyaspor",
    image: "https://iaftm.tmgrup.com.tr/d22c80/1200/675/0/0/2048/1151?u=https://iftm.tmgrup.com.tr/2026/08/10/konyasporda-masuaku-icin-flas-aciklama-1786359961996.jpg",
    source: { name: "Fotomaç", url: "https://www.fotomac.com.tr/transfer/2026/08/10/konyasporda-masuaku-icin-flas-aciklama" }
  },
  {
    status: "resmi", statusLabel: "Resmi", probability: 100,
    title: "Djed Spence, Tottenham'dan Inter'e transfer oldu",
    summary: "İngiliz sağ bek Djed Spence, 31.5 milyon Euro artı bonuslar karşılığında 2031'e kadar Inter'e imza attı.",
    detail: [
      "İngiliz sağ bek Djed Spence'in Tottenham'dan Inter Milan'a transferi resmileşti. İtalyan basınında yer alan haberlere göre anlaşma, 31.5 milyon Euro artı bonuslar karşılığında ve 2031'e kadar geçerli bir sözleşmeyle tamamlandı.",
      "Dünya Kupası'nda İngiltere formasıyla bronz madalya kazanan Spence, Serie A'da yeni bir sayfa açıyor. Inter'in savunma hattını güçlendirmeyi hedeflediği transferle birlikte kulübün yaz harcamaları da artmaya devam ediyor."
    ],
    from: "Tottenham", to: "Inter",
    image: "https://icdn.football-italia.net/wp-content/uploads/2026/08/Djed-Spence-jaw.jpg",
    source: { name: "Football Italia", url: "https://football-italia.net/inter-agreement-spence-tottenham-e31-5m-bonus/" }
  },
  {
    status: "resmi", statusLabel: "Resmi", probability: 100,
    title: "Vlahovic, Beşiktaş'ta 3 yıllık sözleşmeye imza attı",
    summary: "Eski Juventus ve Fiorentina forveti Dusan Vlahovic, Türkiye'de Vincenzo Italiano ile yeniden buluşarak Beşiktaş'la üç yıllık anlaşmaya vardı.",
    detail: [
      "Eski Juventus ve Fiorentina forveti Dusan Vlahovic'in Beşiktaş'a transferi konusunda İtalyan basınına yansıyan haberlere göre üç yıllık bir sözleşmede anlaşma sağlandı. Sırp golcünün, daha önce birlikte çalıştığı teknik direktör Vincenzo Italiano ile İstanbul'da yeniden buluşacağı belirtiliyor.",
      "Beşiktaş cephesinden gelen paylaşımlarda kulübün sosyal medya hesabından oyuncunun geldiğine dair mesajlar paylaşıldı. Sürecin resmi imza töreniyle taçlandırılması bekleniyor."
    ],
    from: "Juventus", to: "Beşiktaş",
    image: null,
    source: { name: "Football Italia", url: "https://football-italia.net/done-deal-vlahovic-agreement-besiktas-contract/" }
  },
  {
    status: "resmi", statusLabel: "Resmi", probability: 100,
    title: "David Romero, Parma'ya transfer oluyor",
    summary: "Arjantinli golcü David Romero, yaklaşık 7 milyon Euro karşılığında İtalya'ya uçtu ve Parma ile sağlık kontrolüne girdi.",
    detail: [
      "Arjantinli genç golcü David Romero, Tigre'den Parma'ya transfer olmak üzere İtalya'ya uçtu. İtalyan basınına göre anlaşma yaklaşık 7 milyon Euro artı bonuslar seviyesinde şekillendi ve oyuncu sağlık kontrolüne girdi.",
      "2026 Dünya Kupası'nda Kolombiya ile oynanan maçta forma giyen Romero, Serie A'daki ilk deneyimini Parma formasıyla yaşayacak."
    ],
    from: "Tigre", to: "Parma",
    image: "https://icdn.football-italia.net/wp-content/uploads/2026/08/David-Romero-Tigre.jpg",
    source: { name: "Football Italia", url: "https://football-italia.net/done-deal-romero-ready-for-parma-e7m-tigres/" }
  },
  {
    status: "resmi", statusLabel: "Resmi", probability: 100,
    title: "Frattesi, Lazio'ya kiralık gitti",
    summary: "Inter, Davide Frattesi'yi 1 milyon Euro kiralama bedeliyle Lazio'ya gönderdi; belirli şartlar oluşursa 14 milyon Euroluk satın alma opsiyonu devreye girecek.",
    detail: [
      "Inter'in orta saha oyuncusu Davide Frattesi, kiralık olarak Lazio'ya transfer oldu. İtalyan basınına göre kiralama bedeli 1 milyon Euro olurken, belirli şartlar gerçekleştiğinde devreye girecek 14 milyon Euroluk bir satın alma opsiyonu da anlaşmaya eklendi.",
      "Inter'in bu transferde oyuncunun ileride satılması halinde belirli bir pay talep eden bir madde bulundurduğu, bonservis bedelinin başlangıçta düşük görünmesinin nedeninin de bu olduğu belirtiliyor."
    ],
    from: "Inter", to: "Lazio",
    image: null,
    source: { name: "Football Italia", url: "https://football-italia.net/frattesi-lazio-e15m-inter-retain-50-per-cent/" }
  },
  {
    status: "yakin", statusLabel: "Anlaşma Yakın", probability: 85,
    title: "Ruggeri, Aston Villa'yla kişisel şartlarda anlaştı",
    summary: "İtalyan sağ bek Matteo Ruggeri, Atletico Madrid'den 25 milyon Euro artı bonuslar karşılığında Aston Villa'ya transfer olmak üzere sağlık kontrolüne gidiyor.",
    detail: [
      "İtalyan sağ bek Matteo Ruggeri, Atletico Madrid'den Aston Villa'ya transfer olmak üzere kişisel şartlarda anlaşmaya vardı. İtalyan basınına göre anlaşma 25 milyon Euro artı 1.5 milyon Euroluk bonuslar seviyesinde şekillendi.",
      "Sağlık kontrolü için İngiltere'ye gitmesi beklenen Ruggeri'nin transferinin önümüzdeki günlerde resmileşmesi bekleniyor."
    ],
    from: "Atletico Madrid", to: "Aston Villa",
    image: null,
    source: { name: "Football Italia", url: "https://football-italia.net/done-ruggeri-agrees-personal-terms-aston-villa/" }
  },
  {
    status: "iddia", statusLabel: "İddia", probability: 40,
    title: "Galatasaray, Martinelli için resmi teklif sundu",
    summary: "İngiliz basınına göre Galatasaray, Arsenal'ın Brezilyalı kanat oyuncusu Gabriel Martinelli için resmi bir teklif verdi.",
    detail: [
      "İngiliz basınında yer alan habere göre Galatasaray, Arsenal'ın Brezilyalı kanat oyuncusu Gabriel Martinelli için resmi bir teklif sundu. BBC Sport'un gündeme getirdiği haberde, teklifin parasal detayları henüz netlik kazanmadı.",
      "Arsenal cephesinin oyuncuyu elde tutma konusundaki tutumu ise kamuoyuyla henüz paylaşılmadı. Martinelli'nin Premier Lig'deki performansı, kulübünü zor bir karar noktasına getirebilir."
    ],
    from: "Arsenal", to: "Galatasaray",
    image: "https://ichef.bbci.co.uk/ace/standard/480/cpsprodpb/4b9b/live/2b0474e0-9692-11f1-870d-5d08c49babb2.png",
    source: { name: "BBC Sport", url: "https://www.bbc.com/sport/football/articles/cwy42p7r00zo" }
  },
  {
    status: "resmi", statusLabel: "Resmi", probability: 100,
    title: "Cristian Romero, Atletico Madrid'e transfer oluyor",
    summary: "Tottenham'ın Arjantinli stoperi Cristian Romero için Atletico Madrid'le 34 milyon sterlinlik anlaşmaya varıldı.",
    detail: [
      "Tottenham'ın Arjantinli stoperi Cristian Romero için Atletico Madrid'le 34 milyon sterlinlik bir anlaşmaya varıldığı BBC Sport tarafından duyuruldu. Dünya Kupası'nda Arjantin formasıyla forma giyen Romero, İspanya'da yeni bir sayfa açmaya hazırlanıyor.",
      "Tottenham'ın savunma hattında bu transferin ardından yeni bir stoper arayışına gireceği değerlendiriliyor."
    ],
    from: "Tottenham", to: "Atletico Madrid",
    image: null,
    source: { name: "BBC Sport", url: "https://www.bbc.com/sport/football/articles/cy8e2vx2l30o" }
  },
  {
    status: "yakin", statusLabel: "Anlaşma Yakın", probability: 55,
    title: "Chelsea, Enzo Fernandez için Man City'ye cuma gününe kadar süre verdi",
    summary: "Chelsea, orta saha oyuncusu Enzo Fernandez için Manchester City'den 120 milyon sterlin veya üzeri bir teklif bekliyor; süre cuma günü doluyor.",
    detail: [
      "Chelsea, orta saha oyuncusu Enzo Fernandez için Manchester City'den net bir teklif bekliyor. Sky Sports'un haberine göre Chelsea yönetimi, City'ye Cuma gününe kadar 120 milyon sterlin veya üzerinde bir teklif sunması için süre tanıdı.",
      "Fernandez'in geleceği Chelsea taraftarları arasında da tartışma konusu; kulübün bu yaz oyuncu satışlarıyla kadrosunu dengelemeye çalıştığı biliniyor."
    ],
    from: "Chelsea", to: "Manchester City",
    image: null,
    source: { name: "Sky Sports", url: "https://www.skysports.com/football/news/11095/13572395/enzo-fernandez-transfer-news-chelsea-set-man-city-deadline-to-bid-for-midfielder" }
  },
  {
    status: "resmi", statusLabel: "Resmi", probability: 100,
    title: "Celtic, Mısırlı kanat Hassan'ı 4 yıllığına transfer etti",
    summary: "Real Oviedo'dan gelen Mısırlı kanat oyuncusu Haissem Hassan, Celtic ile dört yıllık sözleşmeye imza attı ve kritik bir Şampiyonlar Ligi maçına yetişti.",
    detail: [
      "Real Oviedo'dan transfer edilen Mısırlı kanat oyuncusu Haissem Hassan, Celtic ile dört yıllık bir sözleşmeye imza attı. Sky Sports'un haberine göre transfer, oyuncunun kritik bir Şampiyonlar Ligi elemesine yetişmesini sağladı.",
      "Hassan'ın gelişiyle birlikte Celtic'in kanat hattındaki rotasyon seçenekleri artmış oldu."
    ],
    from: "Real Oviedo", to: "Celtic",
    image: null,
    source: { name: "Sky Sports", url: "https://www.skysports.com/football/news/11787/13570650/haissem-hassan-celtic-sign-egypt-winger-from-real-oviedo-on-four-year-deal-worth-lb9m" }
  },
  {
    status: "resmi", statusLabel: "Resmi", probability: 100,
    title: "Real Betis, Fran Garcia'nın kartını Real Madrid'le paylaştı",
    summary: "Real Madridli sol bek Fran Garcia için Real Betis, 2030'a kadar sürecek bir anlaşmayla oyuncunun haklarının yarısını satın aldı.",
    detail: [
      "Real Madrid'in sol beki Fran Garcia için Real Betis'le özel bir anlaşma sağlandı. NewsNow üzerinden derlenen haberlere göre Betis, oyuncunun haklarının yarısını 2030'a kadar sürecek bir düzenlemeyle satın aldı.",
      "İki kulüp arasındaki bu tür ortak sahiplik anlaşmaları, İspanyol futbolunda son dönemde daha sık görülmeye başladı."
    ],
    from: "Real Madrid", to: "Real Betis",
    image: null,
    source: { name: "NewsNow", url: "https://www.newsnow.co.uk/h/Sport/Football/Transfer+News/Confirmed+Transfers" }
  },
  {
    status: "resmi", statusLabel: "Resmi", probability: 100,
    title: "Daley Blind, kariyerini bitirmek için Ajax'a döndü",
    summary: "Tecrübeli savunmacı Daley Blind, futbol hayatını tamamlamak üzere formasını giydiği ilk kulübü Ajax'a duygusal bir dönüş yaptı.",
    detail: [
      "Tecrübeli savunmacı Daley Blind, futbol kariyerini tamamlamak üzere ilk profesyonel kulübü Ajax'a geri döndü. Transfer, oyuncu ve taraftarlar için duygusal bir an olarak nitelendirildi.",
      "Blind'ın deneyiminin genç Ajax kadrosuna liderlik anlamında katkı sağlaması bekleniyor."
    ],
    from: "Serbest", to: "Ajax",
    image: null,
    source: { name: "NewsNow", url: "https://www.newsnow.co.uk/h/Sport/Football/Transfer+News/Confirmed+Transfers" }
  },
  {
    status: "resmi", statusLabel: "Resmi", probability: 100,
    title: "Bayern Münih, Nathaniel Brown'ı 2031'e kadar bağladı",
    summary: "Eintracht Frankfurt'tan transfer edilen Alman savunmacı Nathaniel Brown, Bayern Münih ile uzun soluklu bir sözleşmeye imza attı.",
    detail: [
      "Alman savunmacı Nathaniel Brown, Eintracht Frankfurt'tan Bayern Münih'e transfer oldu. Kulüpler arasında varılan anlaşmayla oyuncu, 2031'e kadar sürecek uzun soluklu bir sözleşmeye imza attı.",
      "Bayern'in savunma rotasyonunu güçlendirmeyi hedeflediği bu transferle birlikte kulübün yaz harcamaları da devam ediyor."
    ],
    from: "Eintracht Frankfurt", to: "Bayern Münih",
    image: null,
    source: { name: "FootballTransfers", url: "https://www.footballtransfers.com/en/transfer-news/" }
  },
  {
    status: "resmi", statusLabel: "Resmi", probability: 100,
    title: "Trabzonspor'da sol bek takviyesi tamam: Mathias Lovik geldi",
    summary: "Norveçli sol bek Mathias Lovik, Parma'dan Trabzonspor'a transfer olarak imzayı attı.",
    detail: [
      "Norveçli sol bek Mathias Lovik, Parma'dan Trabzonspor'a transfer olarak Süper Lig'e adım attı. Kulüp resmi açıklamasında oyuncunun sözleşme detaylarını paylaştı.",
      "Trabzonspor'un savunma hattını güçlendirmek için yaptığı bu transferle birlikte teknik ekibin kanat seçeneklerinin artması bekleniyor."
    ],
    from: "Parma", to: "Trabzonspor",
    image: null,
    source: { name: "NTV Spor", url: "https://www.ntvspor.net/transfer" }
  }
];
