# Bilgi Baykuşu 🦉

İlkokul 4. sınıf öğrencisi için MEB müfredatına dayalı çalışma ve takip uygulaması.
Günlük çalışma akışı, konu anlatımları, günlük sınav, ödül sistemi, veli paneli ve
yapay zekâ destekli "Öğretmene Sor" özelliğini içerir.

Çalışan uygulama: Claude Artifact olarak yayınlanır (link ailede paylaşılır).

## Dosyalar

| Dosya | Açıklama |
|---|---|
| `app.html` | Uygulamanın tamamı: HTML + CSS + JS + müfredat verisi tek dosyada. Claude Artifact kaynağı. |

`app.html` bilinçli olarak `<!doctype html>` / `<html>` / `<head>` etiketleri **içermez**:
Artifact yayın süreci bu iskeleti kendisi ekler. Dosyayı tarayıcıda doğrudan açmak
yerine Artifact olarak yayınlamak gerekir.

## Özellikler

- **Haftalık program**: 7 günlük ders sıralaması (Pazar serbest tekrar günü), çalışılmayan dersler için hatırlatıcı
- **Derslerim**: 7 ders → ünite → konu ağacı (90 konu), her konu için öğretmen diliyle konu anlatımı, bazı konularda SVG şema, sesli okuma
- **Günlük sınav**: 20 soru; karışık veya tek ders; çoktan seçmeli + Türkçe'de boşluk doldurma (yazılı) soruları; yanlışlarda anında açıklama ve sınav sonunda "Tekrar Edelim" özeti
- **Uyarlanabilir seviye motoru**: ders bazında 0-100 sürekli seviye puanı (kolay → orta → zor → 🚀 ileri), ünite bazlı ustalık puanı ve aralıklı tekrar takvimi; sorular zayıf/tekrarı gelmiş ünitelerden seçilir
- **Yapay zekâ öğretmen**: "Öğretmene Sor" sekmesinde serbest soru-cevap; sınavda her seferinde yeni üretilen sorular; konu anlatımında "Başka Türlü Anlat"
- **Ödüller**: puanla alınan, veli tarafından tanımlanan ödüller (ör. 15 dk tablet) ve kullanım geçmişi
- **Rozetler**: 10 rozet, her biri için "nasıl kazanılır" + ilerleme çubuğu
- **Veli paneli**: PIN korumalı; haftalık rapor (yazdırma/PDF), konu durumları düzenleme, ödül yönetimi, günlük notları, sıfırlama
- **Diğer**: sesli okuma (TTS), mikrofonla cevap (STT), açık/koyu tema, günlük not defteri, günün cümlesi, konfeti

## Seviye motoru nasıl çalışır

**Ders seviyesi (rating, 0-100).** Her sınavdan sonra o dersin puanı
`rating += (başarı% − 75) × 0.45 × min(1, soruSayısı/8)` ile güncellenir. Hedef doğruluk
%75: üstünde kalırsa seviye yavaşça yükselir, altında kalırsa düşer, tam %75'te sabit durur.
Rating'den seviye türetilir: `<40` kolay, `40-69` orta, `70-89` zor, `≥90` **ileri**.
İleri seviyede sorular 4. sınıf müfredatının üstünde, çok adımlı üretilir — yani sistem
çocuk geliştikçe tavana vurmaz. Veli (ya da çocuk) seviyeyi elle de seçebilir; bu rating'i
o bandın ortasına taşır.

**Ünite ustalığı (0-100) ve aralıklı tekrar.** Sınavdaki her ünite için doğru/yanlış sayısı
ustalık puanına işlenir: doğru → `score += max(6, (100−score)×0.35)`, yanlış →
`score = score×0.55 − 5`. Doğru serisi uzadıkça sonraki tekrar aralığı açılır
(1 → 2 → 4 → 8 → 16 → 30 gün); bir yanlış, üniteyi yarına geri getirir.
Tekrar tarihi gelen üniteler ana ekranda "🔁 Tekrar Zamanı" kartında toplanır ve tek
tuşla hedefli tekrar sınavı başlatılır.

**Soru seçimi.** Sınavlar üniteleri rastgele değil önceliğe göre seçer:
`(100−ustalık)/100 + tekrarıGeldiyse×1.2 + hiçGörülmediyse×0.6 + küçük rastgelelik`.
Böylece zayıf ve unutulmaya yüz tutmuş üniteler öne çıkar.

**Yapay zekâ de profili görür.** "Öğretmene Sor" ve yapay zekâ soru üretimi, öğrencinin
ders seviyelerini ve en zayıf 3 ünitesini prompt'ta alır; anlatım ve soru zorluğu buna
göre ayarlanır.

## Mimari notlar

Tek dosya, bağımlılıksız (framework yok). Dışarıdan sadece Google Fonts yüklenir.
JS tek bir IIFE içinde; durum `state` nesnesinde tutulur, her değişimde `render()`
tüm görünümü yeniden çizer (uygulama boyutu için yeterince hızlı).

### Çalışma zamanı yetenekleri (Artifact'a bağlı)

İki özellik Claude Artifact çalışma zamanına bağlıdır ve `capabilities` ile tanımlanır:

- `db` → tüm kalıcı veri (ilerleme, puan, seviye, ödüller, günlük notlar, sınav geçmişi)
- `sample` → yapay zekâ öğretmen ve yapay zekâ ile soru üretimi

Her ikisi de yoksa uygulama çökmez: ilgili butonlar gizlenir, geri kalanı çalışır.

Yayınlarken her iki yetenek de açıkça belirtilmelidir:

```
capabilities: { "db": {}, "sample": {} }
```

### Veri şeması (`db`)

| Yol | İçerik |
|---|---|
| `progress/<dersId>__<konuId>` | `{ status, updatedAt, subjectId, topicId }` — status: `yok` / `ogreniliyor` / `ogrenildi` / `tekrar` |
| `levels/<dersId>` | `{ level, rating }` — rating 0-100 sürekli seviye puanı; level ondan türetilir (1 kolay, 2 orta, 3 zor, 4 ileri) |
| `mastery/<dersId>__<üniteId>` | `{ score, seen, correct, streak, lastSeen, dueAt }` — ünite ustalığı ve sonraki tekrar tarihi |
| `meta/stats` | puan, seri, sınav geçmişi, kullanılan ödüller, yazılı soru sayacı |
| `meta/settings` | veli PIN'i |
| `sessions/<YYYY-MM-DD>` | o günün çalışma dakikası |
| `rewards/<id>` | `{ name, emoji, cost }` |
| `journal/<YYYY-MM-DD>` | `{ text }` — "Bugün Ne Öğrendim?" notu |

### Müfredatı güncellemek

Ders kitabı değiştiğinde düzenlenecek yerler (`app.html` içinde, sırayla):

1. `CURRICULUM` — ders → ünite → konu listesi (konu id'leri diğer tablolarda anahtar olarak kullanılır)
2. `TOPIC_LESSONS` — konu id → konu anlatımı metni (her konu için bir kayıt olmalı)
3. `TOPIC_DIAGRAMS` — konu id → SVG şema (isteğe bağlı)
4. `QUESTIONS` — ünite id → soru listesi (matematik hariç; matematik soruları `genMath()` ile üretilir)

Konu id'leri ile anlatım anahtarlarının birebir örtüştüğünü doğrulamak için:

```bash
node -e "
const h=require('fs').readFileSync('app.html','utf8');
const topics=[...h.match(/const CURRICULUM = \[[\s\S]*?\n  \];/)[0].matchAll(/\{id:'([a-z0-9]+)',name:/g)].map(m=>m[1]);
const lessons=[...h.match(/const TOPIC_LESSONS = \{[\s\S]*?\n  \};/)[0].matchAll(/^\s*([a-z0-9]+):\"/gm)].map(m=>m[1]);
console.log('konu:',topics.length,'anlatım:',lessons.length);
console.log('eksik:',topics.filter(t=>!lessons.includes(t)));
"
```

### Değişiklik sonrası sözdizimi kontrolü

```bash
node -e "const fs=require('fs');const h=fs.readFileSync('app.html','utf8');fs.writeFileSync('/tmp/x.js',h.match(/<script>([\s\S]*)<\/script>/)[1]);"
node --check /tmp/x.js
```

## Bağımsız siteye taşıma (ileride)

Uygulamayı kendi alan adında barındırmak istenirse `db` ve `sample` yerine şunlar gerekir:

- **Veri**: Supabase / Firebase gibi bir servis (ücretsiz katman yeterli) → `state.db` çağrılarının o servise uyarlanması
- **Yapay zekâ**: Anthropic API anahtarını saklayan küçük bir sunucu (API anahtarı tarayıcıya konulamaz) → `sampleFn` çağrılarının o uca yönlendirilmesi
- **Barındırma**: GitHub Pages statik dosya için yeterli, ancak yapay zekâ ucu için bir sunucu/işlev gerekir

Bu adıma geçilene kadar Artifact sürümü tek ve tam çalışan sürümdür.
