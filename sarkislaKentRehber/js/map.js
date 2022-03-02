//District Information
var lat = 39.3490;
var longt = 36.4287;
var zoom = 16;
//Map View Options
var map = L.map('map', { zoomControl: false, minZoom: 0 }).setView([lat, longt], zoom);
new L.Control.Zoom({ position: 'topright' }).addTo(map); //zoom position- top right
L.Control.geocoder().addTo(map);
L.control.scale({ position: "bottomright" }).addTo(map);
//Mouse Coordinates
var mousePosition = L.control.mousePosition().addTo(map);
//Polyline Measurement
var lineMeasure = L.control.polylineMeasure().addTo(map);

//=============================
//  MAP LAYERS START
//=============================
//OpenStreetMap
var standartMap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: 'Şarkışla Kent Rehberi' });

//OpenTopoMap
var OpenTopoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    attribution: 'Şarkışla Kent Rehberi'
});

//ESRI Imagenery
var Esri_WorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Şarkışla Kent Rehberi'
});

//Google Street Map
googleStreets = L.tileLayer('https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
    maxZoom: 20,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
});

//Google Satellite Map
googleSat = L.tileLayer('https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
    maxZoom: 20,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
});
//=============================
//  MAP LAYERS END
//=============================

//=============================
//  MAP LAYOUT START
//=============================
//Symbol Data File and Options


var symbol = L.geoJSON.ajax('./GeoJSON/sembol/sembol.geojson', {
    pointToLayer: returnMarkerforSymbol
});

//Road Data File and Options
var road = L.geoJSON.ajax('./GeoJSON/yol/yol.geojson', {
    onEachFeature: returnLineforLine
});

//Cadastral Data File and Options
var cadastral = L.geoJSON.ajax('./GeoJSON/kadastroGultekin-deneme/kadastro.geojson', {
    onEachFeature: returnPolyforCadastral,
    style: returnStyleforCadastral
}).addTo(map);

//Neighborhood Data File and Options
var neighboor = L.geoJSON.ajax('./GeoJSON/mahalleSinir-hata/gultekin-hatali-sinir.geojson');
//=============================
//  MAP LAYOUT END
//=============================

//Map Block
var basemap = {
    "OpenStreetMap": standartMap,
    "OpenTopoMap": OpenTopoMap,
    "ESRI World Imagenery": Esri_WorldImagery,
    "Google Street": googleStreets,
    "Google Satellite": googleSat,
};

//Layer Block
var overlays = {
    "Mahalle Sınır": neighboor,
    "Kadastro Haritası": cadastral,
    "Yol Haritası": road,
    "Semboller": symbol,
};

//Add Map and Options
standartMap.addTo(map); //add default map
L.control.layers(basemap, overlays).addTo(map); //add layer and layout

//FUNCTIONS
//=======================SYMBOL START=====================
//Symbology
function returnMarkerforSymbol(json, latlng) {
    var att = json.properties;

    //renkler icon ile değişebilir
    switch (att.alanTipi) {
        case "Arsa":
            var color = "red";
            break;
        case "Konut":
            var color = "blue";
            break;
        case "Yurt":
            var color = "darkred";
            break;
        case "Eğitim Alanı":
            var color = "pink";
            break;
        case "Dini Tesis":
            var color = "grey";
            break;
        case "Spor Tesisi":
            var color = "green";
            break;
        case "Hastane":
            var color = "darkred";
            break;
        case "Eczane":
            var color = "darkred";
            break;
        case "Akaryakıt İstasyonu":
            var color = "white";
            break;
        default:
            var color = "black";
    }
    // var polygon = L.polygon(latlngs, { color: 'red' }).addTo(map);
    return L.circleMarker(latlng, { radius: 10, color: color }).bindTooltip("<h4>Alan Tipi: " + att.alanTipi + "<br>Kurum: " + att.kurum + "<br>Mülk Adı: " + att.yapiAdi + "</h4>").bindPopup("<h4>Alan Tipi: " + att.alanTipi + "<br>Kurum: " + att.kurum + "<br>Mülk Adı: " + att.yapiAdi + "</h4>").openPopup();
}
//=======================SYMBOL END=====================

//=======================ROAD START=====================
//Roads
function returnLineforLine(json, lyr) {
    var att = json.properties;

    return lyr.bindTooltip("<h4>Yol Adı: " + att.yolAdi + "<br>Yol Uzunluğu: " + att.yolUzunluk + "m</h4>").bindPopup("<h4>Yol Adı: " + att.yolAdi + "<br>Yol Uzunluğu: " + att.yolUzunluk + "m</h4>").openPopup();
}
//=======================ROAD END=====================

//=======================CADASTRAL START=====================
//Cadastral Borders
function returnPolyforCadastral(json, lyr) {
    var att = json.properties;

    return lyr.bindTooltip("<h4>İlçe: " + att.ilce + "<br>Mahalle: " + att.mahalle + "<br>Mevki: " + att.mevki + "<br>Taşınmaz No: " + att.tasinmazNo + "<br>Ada/Parsel: " + att.ada + " / " + att.parsel + "<br>Alan: " + att.alan + "<br>Nitelik: " + att.nitelik + "<br>Nitelik Detayı: " + att.nitelikDet + "<br>Zemin Tipi: " + att.zeminTipi + "<br>Koordinatlar: " + att.TKGM_Koord + "<br>Uyarı: " + att.UYARI + "</h4>").bindPopup("<h4>İlçe: " + att.ilce + "<br>Mahalle: " + att.mahalle + "<br>Mevki: " + att.mevki + "<br>Taşınmaz No: " + att.tasinmazNo + "<br>Ada/Parsel: " + att.ada + " / " + att.parsel + "<br>Alan: " + att.alan + "<br>Nitelik: " + att.nitelik + "<br>Nitelik Detayı: " + att.nitelikDet + "<br>Zemin Tipi: " + att.zeminTipi + "<br>Koordinatlar: " + att.TKGM_Koord + "<br>Uyarı: " + att.UYARI + "</h4>").openPopup();
}

//Cadastral Style
function returnStyleforCadastral(json) {
    var att = json.properties;
    //renkler icon ile değişebilir
    switch (att.nitelik) {
        case "Arsa":
            return { color: 'brown' };
        case "Konut":
            return { color: 'blue' };
        case "Yurt":
            return { color: 'darkred' };
        case "Eğitim Alanı":
            return { color: "pink" };
        case "Dini Tesis":
            return { color: "grey" };
        case "Spor Tesisi":
            return { color: "green" };
        case "Hastane":
            return { color: "darkred" };
        case "Eczane":
            return { color: "darkred" };
        case "Akaryakıt İstasyonu":
            return { color: "white" };
        default:
            return { color: "black" };
    }
}
//=======================CADASTRAL END=====================

//======================= INDEX.HTML - HEADER - NAV - ONCLICK FUNCTİONS START =====================

//Map Page - Header >Nav >a onclick = Functions 
// search image (For responsive design)...
function searchBTN_func() {
    var estateNo = prompt("Taşınmaz No:");
    var neighborhood = prompt("Taşınmaz No girdi iseniz giriş yapmanız gerekmemekte...\nMahalle: ");
    var block = prompt("Taşınmaz No girdi iseniz giriş yapmanız gerekmemekte...\nAda No: ");
    var parcel = prompt("Taşınmaz No girdi iseniz giriş yapmanız gerekmemekte...\nParsel No: ");
}

// filter image (for responsive design)...
function filterBTN_func() {
    var filter = prompt("1-Belediye\n2-Güvenlik Güçleri\n3-Sağlık Birimleri\n4-Eğitim Alanları\n5-Konaklama Yerleri\n6-Eğlence Alanları\n7-Parklar ve Spor Tesisleri\n8-Kültürel Alanlar\n9-Arsalar\n10-Konutlar\n\n\nGörmek istediğiniz yapıları giriniz...")
}

//======================= INDEX.HTML - HEADER - NAV - ONCLICK FUNCTİONS END =====================