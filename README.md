# SarkislaKentRehberi
![alt text](https://github.com/Goktug-Kurkcu/SarkislaKentRehberi/blob/main/sarkislaKentRehber/img--SS/genel.png)
Sivas ili - Şarkışla ilçesi için hazırlanan Şarkışla Kent Rehberi Prototip Çalışması

# Pilot Bölge
Şarkışla ilçesi Gültekin Mahallesi Doğu Bloğu

# Kullanılan Harita Altlıkları
- OpenStreetMap
- OpenTopoMap
- ESRI World Imagenery
- Google Street Map
- Google Satellite Imagenery

# Görüntülenebilen Tabakalar ve İçerikleri
## Mahalle Sınır
- Gültekin Mahallesine Ait Sınırlar (İlçe merkezi sınırları TKGM sitesindeki sorgular ile oluşturulmuş olup, kırsala kayan kısımlar direk çizilmiştir. Yerleşim Bölgesi sınırlarının gösterilmesi amaçlanmış olup projeye geçilmesi halinde veriler düzenlenecektir.)
## Kadastro Haritası
- TKGM parsel sorguda bulunan veriler üzerinden parseller çizilmiş olup, parsellere ait;
  -- İlçe
  -- Mahalle
  -- Mevki
  -- Taşınmaz No
  -- Ada / Parsel
  -- Alan
  -- Nitelik (Nitelikler düzenlenmiş olup TKGM web sitesinde bulunan nitelik bilgileri -Nitelik Detay- kolonunda toplanmıştır.)
  -- Nitelik Detay
  -- Zemin Tipi
  -- Koordinatlar
  -- Uyarı (Bu kolonun amacı; bazı arsa ya da konut alanlarının üzerinde bulunan okul, hastane gibi yapıların filtrelenmesinde kolaylık sağlanması amacıyla -Nitelik- kolonundaki verilerinin değiştirildiğini göstermek olup, kullanıcıyı TKGM verisinin ne olduğu hakkında bilgilendirmektedir. Örn; Aşık Veysel MYO'nun çalışmada ki -Nitelik- kolonunda --Eğitim Alanı-- yazmakta olup, TKGM'de Arsa olarak geçmektedir. Kullanıcılarımız bu bilgilere UYARI kolonundan ulaşabilir. )
## Yol Haritası
  -- Yol Adı
  -- Yol Uzunluğu
## Semboller

# Ek Bilgiler

## İlerleyen çalışmalarda giderilecek olan eksiklikler

* Çalışma, prototip üretim olup projede bulunacak olan temel uygulamaları göstermektedir. Sorgu ve Taşınmaz No(ya da mahalle-ada/parsel) araamaları, buffer analizi, rota hesaplama araçları pasif bulunmaktadır.

* Çalışma responsive bir yapıda olup, mobil cihazlarda bir miktar görüntü kalitesinde düşmesi gözlemlenmiştir. İleride yapılacak çalışmalarda güncel WEB tasarım teknolojilerinin kullanılması ile bu bozulmaların giderilmesi hedeflenmektedir.

* Çalışma fark edileceği üzere çalışma sayfası statik yapıda olup, veriler GeoJSON dosyalardan okunmaktadır. Çalışmanın dinamik bir yapıya bürünebilmesi için PostgreSQL-PostGIS eklentisi ve backend programlaması için Python Django kullanılması hedeflenmektedir.

# ÖNEMLİ BİLGİLENDİRME
* Sayfa; VS Code üzerinde açılmaya çalışıldığı zaman harita tabakaları kullanılamamakta olup, VS Code - Live Server - eklentisinin kullanılması halinde herhangi bir sorun yaşanmamaktadır.

## Yazar
Göktuğ KÜRKÇÜ <br>
Harita Mühendisi
## İletişim için;
hmgoktugkurkcu34@gmail.com
