// Data desa berdasarkan kecamatan
const desaData = {
    "Bangorejo": ["Bangorejo", "Kebondalem", "Sambirejo", "Sambimulyo", "Sukorejo", "Temurejo", "Ringintelu"],
    "Banyuwangi": ["Banyuwangi", "Lateng", "Pakis", "Penganjuran", "Karangrejo", "Sobo", "Taman Baru", "Kertosari", "Tukangkayu", "Kepatihan"],
    "Cluring": ["Benculuk", "Cluring", "Kaliploso", "Sarimulyo", "Sraten", "Tampo", "Sembulung", "Plampangrejo", "Tamanagung"],
    "Gambiran": ["Gambiran", "Jajag", "Purwodadi", "Wringinagung", "Wringinrejo", "Yosomulyo"],
    "Genteng": ["Genteng", "Genteng Kulon", "Genteng Wetan", "Kembiritan", "Setail"],
    "Giri": ["Giri", "Grogol", "Jambersari", "Boyolangu"],
    "Glagah": ["Glagah", "Bakungan", "Banjarsari", "Kenjo", "Kemiren", "Paspan", "Kampunganyar", "Tamansuruh", "Olehsari", "Rejosari"],
    "Glenmore": ["Glenmore", "Bumiharjo", "Sepanjang", "Sumbergondo", "Margomulyo", "Tulungrejo", "Karangharjo", "Tegalharjo"],
    "Kalibaru": ["Kalibaru", "Banyuanyar", "Kretek", "Kertosari", "Temurejo", "Kebunrejo", "Tegalharjo"],
    "Kalipuro": ["Kalipuro", "Bulusari", "Kelir", "Pesucen", "Telemung", "Ketapang"],
    "Kabat": ["Kabat", "Dadapan", "Kedayunan", "Pakistaji", "Gombolirang", "Labanasem", "Tambong"],
    "Licin": ["Licin", "Pakel", "Segobang", "Tamansari", "Kluncing"],
    "Muncar": ["Muncar", "Tapanrejo", "Sumbersewu", "Blambangan", "Kedungrejo", "Tembokrejo", "Kedungringin", "Tambakrejo"],
    "Pesanggaran": ["Pesanggaran", "Sumberagung", "Sarongan", "Kandangan", "Sumbermulyo"],
    "Rogojampi": ["Rogojampi", "Aliyan", "Gitik", "Pengatigan", "Bubuk", "Gladag", "Kedaleman", "Lemahbangdewo", "Karangbendo"],
    "Sempu": ["Sempu", "Temuasri", "Gendoh", "Tegalarum", "Temuguruh", "Karangsari", "Jambewangi"],
    "Siliragung": ["Siliragung", "Kesilir", "Buluagung", "Barurejo", "Seneporejo"],
    "Singojuruh": ["Singojuruh", "Gambor", "Cantuk", "Alasmalang", "Padang", "Kemiri", "Singolatren", "Benelan Kidul", "Sumberbaru"],
    "Songgon": ["Songgon", "Balak", "Bangunsari", "Sragi", "Sumberarum", "Sumberbulu", "Bayu", "Bedewang", "Parangharjo"],
    "Srono": ["Srono", "Rejoagung", "Wonosobo", "Kebaman", "Sukonatar", "Bagorejo", "Parijatahkulon", "Parijatahwetan", "Kepundungan", "Sukomaju"],
    "Tegaldlimo": ["Tegaldlimo", "Kalipait", "Purwoasri", "Kedungasri", "Wringinputih", "Kendalrejo", "Wringinpitu", "Kedunggebang"],
    "Wongsorejo": ["Wongsorejo", "Alasbuluh", "Watukebo", "Bajulmati", "Bangsring", "Bimorejo"],
};

// Data dusun berdasarkan desa
const dusunData = {
    "Bangorejo": ["Bangorejo", "Sere", "Gunungsari", "Tamansari"],
        "Bangorejo": ["Bangorejo","Sere","Gunungsari","Tamansari"],
        "Kebondalem": ["Kebondalem","Sandangrejo","Tanjungrejo","Kebonrejo"],
        "Sambirejo": ["Krajan","Pakelan","Grogolan","Nglejok","Ngrapah"],
        "Sambimulyo": ["Sambirejo","Kedungrejo"],
        "Sukorejo": ["Wedeng","Gundik","Mengai"],
        "Temurejo": ["Temurejo","Selorejo","Kedungringin","Plaosan","Sumberjambe"],
        "Ringintelu": ["Ringintelu","Ringinmulyo","Yudomulyo"],

    "Banyuwangi": ["Krajan", "Sumberjoyo", "Sumberrejo"],
        "Banyuwangi": ["Krajan","Sumberjoyo","Sumberrejo"],
        "Lateng": ["Kenalan","Kebonjeruk","Manggisan"],
        "Pakis": ["Duren","Krajan","Pelampang","Rowo"],
        "Penganjuran": ["Karangtipis","Krajan","Mulyoasri","Welaran"],
        "Karangrejo": ["Pendarungan","Rejosari","Kedasri"],
        "Sobo": ["Gareng","Karangente","Sutri","Wonosari"],
        "Taman Baru": ["Tamansari","Kampung Baru"],
        "Kertosari": ["Krajan","Kramat","Karanganom"],
        "Tukangkayu": ["Krajan","Stendo"],
        "Kepatihan": ["Ujung","Krajan Surodilagan"],

    "Cluring": ["Karangrejo", "Trembelang"],
        "Cluring": ["Karangrejo","Trembelang"],
        "Benculuk": ["Kebonsari","Kemloso","Krajan","Pancursari","Purwosar"," Rejosari"],
        "Kaliploso": ["Plosorejo"],
        "Sarimulyo": ["Cempokosari","Pandansari","Rejomulyo","Sempu"],
        "Sraten": ["Krajan","Sukodadi","Tapansari"],
        "Tampo": ["Tampo"],
        "Sembulung": ["Krajan","Talunrejo","Tempursari","Talunrejo"],
        "Plampangrejo": ["Krajan","Sumberrejo","Sumberbendo"],
        "Tamanagung": ["Krajan","Sagad","Sumberjeruk","Sumberwaru"],

    "Gambiran": ["Krajan 1", "Krajan 2", "Lidah", "Setembel"],
        "Gambiran": ["Krajan 1","Krajan 2","Lidah","Setembel"],
        "Jajag": ["Bulusari","Kampung Baru","Krajan","Petahunan","Yosowinangun"],
        "Purwodadi": ["Gembolo","Krajan","Tempurejo"],
        "Wringinagung": ["Glowong","Jatisari","Sumberjaya","Sumberjo"], 
        "Wringinrejo": ["Krajan","Toyamas","Tamanrejo","Mulyorejo"], 
        "Yosomulyo": ["Krajan I","Krajan II","Sidomukti"],

    "Genteng": ["Krajan", "Sumberagung", "Sumberjoyo"],
        "Genteng": ["Krajan","Sumberagung","Sumberjoyo"],
        "Genteng Kulon": ["Krajan","Sawahan","Kopen","Maron","Jenisari"], 
        "Genteng Wetan": ["Resomulyo","Krajan","Cangaan"],  
        "Kembiritan": ["Krajan I","Krajan II","Kaliputih","Temurjo","Pandan"], 
        "Setail": ["Curahketangi I","Curahketangi II","Jalen I","Jalen II","Jalen Darungan"],

    "Giri": ["Krajan", "Sumberejo", "Sumberrejo"],
        "Giri": ["Krajan","Sumberejo","Sumberrejo"],
        "Grogol": ["Pelinggihan","Kopendukuh","Laos","Guwo","Putuk"], 
        "Jambersari": ["Delik I","Delik II","Jambean","Langring","Mangli"], 
        "Boyolangu": ["Dadapan"],

    "Glagah": ["Krajan", "Sumberagung", "Sumberjoyo"],
        "Glagah": ["Krajan","Sumberagung","Sumberjoyo"],
        "Bakungan": ["Krajan","Gaplek","Karangasem","Watu Ulo"],  
        "Kenjo": ["Krajan","Salakan"],
        "Kemiren": ["Krajan","Kedaleman"], 
        "Paspan": ["Krajan","Krajan II","Paspan","Paspan II"],
        "Kampunganyar": ["Krajan","Kalibendo","Panggang","Rejopuro","Kopencungking"],
        "Tamansuruh": ["Krajan","Andong","Mondoluko","Wonosari","Gadog"],
        "Olehsari": ["Krajan","Joyosari"],
        "Rejosari": ["Krajan","Watu Ulo"],

    "Glenmore": ["Krajan", "Sumberejo", "Sumberrejo"],
        "Glenmore": ["Krajan","Sumberejo","Sumberrejo"],
        "Bumiharjo": ["Wonoasih","Beji","Krajan","Sumberbulu","Sumberbendo"],
        "Sepanjang": [" Sumbergondo","Krajan","Sumberbulu","Sumberbendo"], 
        "Sumbergondo": ["Krajan","Sumberbulu","Sumberbendo"], 
        "Margomulyo": ["Krajan","Sumberbulu","Sumberbendo"], 
        "Tulungrejo": ["Krajan","Sumberbulu","Sumberbendo"], 
        "Karangharjo": ["Krajan","Sumberbulu","Sumberbendo"],
        "Tegalharjo": ["Krajan","Sumberbulu","Sumberbendo"],

    "Kalibaru": ["Krajan", "Sumberejo", "Sumberagung"],
        "Kalibaru": ["Krajan","Sumberejo","Sumberagung"],
        "Banyuanyar": ["Krajan","Tengah","Kidul"], 
        "Kretek": ["Grogol IX","Grogol VIII","Grogol VII","Mancaingan","Depok","Duwuran","Bungkus","Samiran","Sono"], 
        "Kertosari": ["Krajan","Tengah","Selatan"],  
        "Temurejo": ["Temurejo","Kedungringin","Selorejo","Plaosan","Sumberjambe"],  
        "Kebunrejo": ["Krajan","Tengah","Barat"],  
        "Tegalharjo": ["Krajan","Sidodadi","Darungan","Krikilan"], 

    "Kalipuro": ["Krajan", "Sumberjoyo", "Sumberrejo"],
        "Kalipuro": ["Krajan","Sumberjoyo","Sumberrejo"],
        "Bulusari": ["Pojok","Bulusari Utara","Bulusari Selatan","Selang","Sawur","Gunung Butak"], 
        "Kelir": ["Banjarwaru","Kopenbayah","Krajan","Pekarangan"], 
        "Pesucen": ["Krajan","Padangbaru","Bangunrejo","Kopensere","Plampang","Bulupayung"], 
        "Telemung": ["Krajan","Sumberbendo"," Sumberbulu"], 
        "Ketapang": ["Krajan","Sumberbendo"," Sumberbulu"],

    "Kabat": ["Krajan", "Sumberagung", "Sumberjoyo"], 
        "Kabat": ["Krajan","Sumberagung","Sumberjoyo"], 
        "Dadapan": ["Dadapan Utara","Krajan","Secawan"], 
        "Kedayunan": ["Babakan","Krajan"], 
        "Pakistaji": ["Krajan","Dadapan (terdiri dari Dukuh Sumbersari)","Kepuh (terdiri dari Dukuh Sumber Kepuh)"], 
        "Gombolirang": ["Krajan","Kertosari","Cungking","Ancar","Sempu"], 
        "Labanasem": ["Krajan Barat","Krajan Timur","Labansukadi","Lawang"],
        "Tambong": ["Krajan","Kejoyo","Kebunsari"],

    "Licin": ["Krajan", "Plembon", "Karangan", "Benel", "Glondok"], 
        "Licin": ["Krajan","Plembon","Karangan","Benel","Glondok"], 
        "Pakel": ["Taman Glugo","Sadang"],
        "Segobang": ["Banyucindih","Kayangan","Krajan Barat","Krajan Timur","Srampon"], 
        "Tamansari": ["Krajan","Sumberwatu","Jambu","Ampel Gading","Tanah Los","Kebundadap"], 
        "Kluncing": ["Kluncing","Sumberbulu","Sumberbendo","Krajan"], 

    "Muncar": ["Krajan", "Sumberagung", "Sumberjoyo"],
        "Muncar": ["Krajan","Sumberagung","Sumberjoyo"],
        "Tapanrejo": ["Kedung Dandang (6 RW)","Krajan (9 RW)"],
        "Sumbersewu": ["Palurejo","Krajan"], 
        "Blambangan": ["Sukosari"], 
        "Kedungrejo": ["Krajan","Stoplas","Kalimati","Sampangan","Muncar"],  
        "Tembokrejo": ["Muncar Baru"], 
        "Kedungringin": ["Krajan","Sumbersewu"], 
        "Tambakrejo": ["Krajan"],

    "Pesanggaran": ["Krajan", "Sumberejo", "Sumberrejo"], 
        "Pesanggaran": ["Krajan","Sumberejo","Sumberrejo"],
        "Sumberagung": ["Pancer","Rejoagung","Silirbaru","Sungailembu"], 
        "Sarongan": ["Sukamade","Sumberbulu","Sumbermulyo"], 
        "Kandangan": ["Krajan","Sumberbopong","Sumberdadi","Sumberjambe"], 
        "Sumbermulyo": ["Mulyosari","Tembakur"],

    "Rogojampi": ["Krajan", "Jagalan", "Lugonto", "Maduran", "Prejengan I", "Prejengan II", "Rogojampi Utara"],
        "Rogojampi": ["Krajan","Jagalan","Lugonto","Maduran","Prejengan I","Prejengan II","Rogojampi Utara"],
        "Aliyan": ["Krajan","Kedawung","Sukodono","Temurejo","Bolot"], 
        "Gitik": ["Krajan","Sidomulyo","Sidorejo","Timurejo"], 
        "Pengatigan": ["Krajan","Gurit","Cangkring","Lugjag"], 
        "Bubuk": ["Bubuk Krajan","Banje","Warengan","Sukosari (juga dikenal sebagai Gelundengan)"], 
        "Gladag": ["Krajan","Lateng","susukan Kidul","Susukan Lor"], 
        "Kedaleman": ["Krajan","Kebondalem","Karangsari","Kepatihan","Puspan"], 
        "Lemahbangdewo": ["Krajan","Satriyan","Kebalen Kidul","Kebalen Lor"], 
        "Karangbendo": ["Bades","Jajangsurat","Karanganyar","Krajan","Pancoran"],

    "Sempu": ["Krajan", "Tugung", "Jambewangi"],
        "Sempu": ["Krajan","Tugung","Jambewangi"],
        "Temuasri": ["Awu-Awu","Krajan","Sumberagung"," Sumbermulyo"], 
        "Gendoh" : ["Klontang","Krajan","Sumberbulu","Sumbermulyo"],
        "Tegalarum": ["Prembulan","Susukan","Tegalwangi","Kedungrengit"], 
        "Temuguruh": ["Krajan","Sumberbulu","Sumbermulyo","Sumberagung"],
        "Karangsari": ["Dadapan","Gumuk","Karanganyar","Karangrejo","Mangli","Nganjukan"], 
        "Jambewangi": ["Krajan","Sidomulyo","Sumberjo","Panjen","Parastembok"," Tlogosari"],

    "Siliragung": ["Krajan", "Seloagung", "Tegalwagah"],
        "Siliragung": ["Krajan","Seloagung","Tegalwagah"],
        "Kesilir": ["Kesilir","Silirsari","Siliragung","Sumberagung","Sumbermulyo"], 
        "Buluagung": ["Buluagung","Krajan","Sumberurip","Sumberbulu","Sumbermulyo"],
        "Barurejo": ["Krajan","Seneposari","Senepolor","Sumberurip","Sumbermanggis"], 
        "Seneporejo": ["Seneporejo","Sumberbulu","Sumbermulyo","Sumberagung"],

    "Singojuruh": ["Juruh", "Kemiren", "Krajan Barat"],
        "Singojuruh": ["Juruh","Kemiren","Krajan Barat"],
        "Gambor": ["Gambor","Krajan","Sumberbulu","Sumbermulyo"], 
        "Cantuk": ["Cantuk","Krajan","Sumberbulu","Sumbermulyo"], 
        "Alasmalang": ["Krajan","Garit","Wonorekso","Bangunrejo"," Karangasem"], 
        "Padang": ["Padang","Krajan","Sumberbulu","Sumbermulyo"], 
        "Kemiri": ["Kemiri","Krajan","Sumberbulu","Sumbermulyo"], 
        "Singolatren": ["Singolatren","Krajan","Sumberbulu","Sumbermulyo"], 
        "Benelan Kidul": [" Benelan Kidul","Krajan","Sumberbulu","Sumbermulyo"], 
        "Sumberbaru": ["Paeloan","Krajan","Sumberbulu","Sumbermulyo"],

    "Songgon": ["Pelantaran", "Kentangan", "Bumisari"],
        "Songgon": ["Pelantaran","Kentangan","Bumisari"],
        "Balak": ["Balak Kidul","Balak Lor","Wonorejo","Tampak Bayan","Derwono","Cemoro"], 
        "Bangunsari": ["Bangunsari","Sroyo","Krajan","Sumberbulu","Sumbermulyo"], 
        "Sragi": ["Kencono","Kendal","Bongkoran","Krajan","Pertapan","Sragi Tengah","Watugowok"], 
        "Sumberarum": ["Bejong","Krajan","Kampung Anyar","Mangaran","Pasar","Sumberasih"], 
        "Sumberbulu": ["Sumberbulu","Sumbermulyo","Sumberagung"], 
        "Bayu": ["Bayu","Krajan","Sumberbulu","Sumbermulyo"], 
        "Bedewang": ["Wiyayu Barat","Wiyayu Timur","Tegalwudi","Bedewang Asem","Bedewang Krajan"], 
        "Parangharjo": ["Parangharjo","Sumberbulu","Sumbermulyo","Sumberagung"],

    "Srono": ["Krajan", "Srono", "Kebaman"],
        "Srono": ["Krajan","Srono","Kebaman"],
        "Rejoagung": ["Sumberagung","Sumbergroto","Krajan"], 
        "Wonosobo": ["Krajan","Sumberbulu","Sumbermulyo"], 
        "Kebaman": ["Krajan","Sumberbulu","Sumbermulyo"], 
        "Sukonatar": ["Karang Lo","Krajan","Sumberbulu","Sumbermulyo"], 
        "Bagorejo": ["Krajan","Sumberbulu","Sumbermulyo"], 
        "Parijatahkulon": ["Sumberbulu","Sumbermulyo","Sumberagung"], 
        "Parijatahwetan": ["Sumberbulu","Sumbermulyo","Sumberagung"], 
        "Kepundungan": ["Sumberbulu","Sumbermulyo","Sumberagung"],
        "Sukomaju": ["Sukorejo","Krajan","Sumberbulu","Sumbermulyo"],

    "Tegaldlimo": ["Sumberhulur", "Sumberdadi", "Sumberrejo"],
        "Tegaldlimo": ["Sumberhulur","Sumberdadi","Sumberrejo"],
        "Kalipait": ["Purworejo","Kutorejo"], 
        "Purwoasri": ["Krajan","Sambileren"], 
        "Kedungasri": ["Kedungasri"], 
        "Wringinputih": ["Kabatmantren","Krajan","Tegalpare"],
        "Kendalrejo": ["Kaliagung","Pandanrejo","Paluagung"], 
        "Wringinpitu": ["Wringinpitu"], 
        "Kedunggebang": ["Kedunggebang"],

    "Wongsorejo": ["Krajan", "Pringondadi", "Alasmalang"],
        "Wongsorejo": ["Krajan","Pringondadi","Alasmalang"],
        "Alasbuluh": ["Krajan 1","Krajan 2"], 
        "Watukebo": ["Krajan","Gepuro","Patoman","Gumuk Agung","Glondong","Amerthasari"], 
        "Bajulmati": ["Badolan","Galekan","Karanganyar","Krajan"], 
        "Bangsring": ["Krajan 1","Krajan 2","Paras Putih"], 
        "Bimorejo": ["Aseman","Bimo"], 
};

// Fungsi untuk mengupdate opsi desa berdasarkan kecamatan yang dipilih
function updateDesaOptions() {
    const kecamatanSelect = document.getElementById('kecamatan');
    const desaSelect = document.getElementById('desa');
    const selectedKecamatan = kecamatanSelect.value;

    // Kosongkan dropdown desa
    desaSelect.innerHTML = '<option value="">Pilih Desa/Kelurahan</option>';

    // Jika kecamatan dipilih, tambahkan opsi desa
    if (selectedKecamatan && desaData[selectedKecamatan]) {
        desaData[selectedKecamatan].forEach(desa => {
            const option = document.createElement('option');
            option.value = desa;
            option.textContent = desa;
            desaSelect.appendChild(option);
        });
    }

    // Reset dropdown dusun
    document.getElementById('dusun').innerHTML = '<option value="">Pilih Dusun/Jalan</option>';
}

// Fungsi untuk mengupdate opsi dusun berdasarkan desa yang dipilih
function updateDusunOptions() {
    const desaSelect = document.getElementById('desa');
    const dusunSelect = document.getElementById('dusun');
    const selectedDesa = desaSelect.value;

    // Kosongkan dropdown dusun
    dusunSelect.innerHTML = '<option value="">Pilih Dusun/Jalan</option>';

    // Jika desa dipilih dan ada data dusun, tambahkan opsi dusun
    if (selectedDesa && dusunData[selectedDesa]) {
        dusunData[selectedDesa].forEach(dusun => {
            const option = document.createElement('option');
            option.value = dusun;
            option.textContent = dusun;
            dusunSelect.appendChild(option);
        });
    }
}

// Fungsi untuk inisialisasi peta
function initializeMap() {
    // Default koordinat (contoh: SMK Muhammadiyah 6 Rogojampi)
    const defaultLat = -8.3056;
    const defaultLng = 114.2811;

    // Inisialisasi peta
    const map = L.map('map').setView([defaultLat, defaultLng], 15);

    // Tambahkan tile layer (OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Tambahkan marker dengan drag and drop
    const marker = L.marker([defaultLat, defaultLng], {
        draggable: true
    }).addTo(map)
        .bindPopup("<b>Lokasi Rumah</b><br>Geser pin ke lokasi yang tepat")
        .openPopup();

    // Update koordinat saat marker digeser
    marker.on('dragend', function (event) {
        const position = marker.getLatLng();
        document.getElementById('latitude').value = position.lat;
        document.getElementById('longitude').value = position.lng;
    });

    // Tambahkan event untuk klik peta
    map.on('click', function (e) {
        marker.setLatLng(e.latlng);
        document.getElementById('latitude').value = e.latlng.lat;
        document.getElementById('longitude').value = e.latlng.lng;
    });

    // Coba dapatkan lokasi pengguna
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            const userLat = position.coords.latitude;
            const userLng = position.coords.longitude;

            // Update marker position
            marker.setLatLng([userLat, userLng]);
            map.setView([userLat, userLng], 15);

            // Update hidden inputs
            document.getElementById('latitude').value = userLat;
            document.getElementById('longitude').value = userLng;
        }, function (error) {
            console.error("Error getting location: ", error);
        });
    }
}

// Fungsi untuk menampilkan preview foto
function setupPhotoPreview() {
    const photoInput = document.getElementById('photo-input');
    const photoPreview = document.getElementById('preview-photo');
    const photoPlaceholder = document.querySelector('.photo-placeholder span');

    photoInput.addEventListener('change', function () {
        if (this.files && this.files[0]) {
            const reader = new FileReader();

            reader.onload = function (e) {
                photoPreview.src = e.target.result;
                photoPreview.style.display = 'block';
                photoPlaceholder.style.display = 'none';
            }

            reader.readAsDataURL(this.files[0]);
        }
    });
}

// Fungsi untuk generate biodata
function setupGenerateButton() {
    const generateBtn = document.getElementById('generate-btn');
    const resultSection = document.getElementById('result-section');
    const resultContent = document.getElementById('result-content');
    const formSections = document.querySelectorAll('.form-section');
    const photoInput = document.getElementById('photo-input');

    generateBtn.addEventListener('click', function () {
        // Validasi lokasi
        const latitude = document.getElementById('latitude').value;
        const longitude = document.getElementById('longitude').value;

        if (!latitude || !longitude) {
            alert('Silahkan tentukan lokasi rumah di peta');
            document.getElementById('map').scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
            return;
        }

        // Array untuk menyimpan inputan yang akan ditampilkan
        let biodataItems = [];

        // Fungsi untuk menambahkan item jika nilai tidak kosong
        function addItemIfNotEmpty(label, value) {
            if (value && value.trim() !== '') {
                biodataItems.push({
                    label: label,
                    value: value
                });
            }
        }

        // Format tanggal lahir jika ada
        let formattedDate = '';
        const birthDateValue = document.getElementById('birth-date').value;
        if (birthDateValue) {
            const birthDate = new Date(birthDateValue);
            formattedDate = birthDate.toLocaleDateString('id-ID', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
            });
        }

        // Gabungkan tempat dan tanggal lahir jika keduanya ada
        let birthInfo = '';
        const birthPlace = document.getElementById('birth-place').value;
        if (birthPlace && formattedDate) {
            birthInfo = `${birthPlace}, ${formattedDate}`;
        } else if (birthPlace) {
            birthInfo = birthPlace;
        } else if (formattedDate) {
            birthInfo = formattedDate;
        }

        // Tambahkan data pribadi jika ada
        addItemIfNotEmpty('Nama Lengkap', document.getElementById('full-name').value);
        addItemIfNotEmpty('Panggilan', document.getElementById('nickname').value);
        if (birthInfo) addItemIfNotEmpty('TTL', birthInfo);
        addItemIfNotEmpty('Kelas', document.getElementById('class').value);
        addItemIfNotEmpty('No. Induk', document.getElementById('student-id').value);
        addItemIfNotEmpty('NISN', document.getElementById('nisn').value);
        addItemIfNotEmpty('Agama', document.getElementById('religion').value);
        addItemIfNotEmpty('Anak Ke-', document.getElementById('child-number').value);
        addItemIfNotEmpty('Jumlah Saudara', document.getElementById('siblings').value);
        
        // Tambahkan data orang tua jika ada
        addItemIfNotEmpty('Nama Ayah', document.getElementById('father-name').value);
        addItemIfNotEmpty('Pekerjaan Ayah', document.getElementById('father-job').value);
        addItemIfNotEmpty('Pendidikan Ayah', document.getElementById('father-education').value);
        addItemIfNotEmpty('Nama Ibu', document.getElementById('mother-name').value);
        addItemIfNotEmpty('Pekerjaan Ibu', document.getElementById('mother-job').value);
        addItemIfNotEmpty('Pendidikan Ibu', document.getElementById('mother-education').value);
        
        // Gabungkan alamat dari berbagai field
        const kecamatan = document.getElementById('kecamatan').value;
        const desa = document.getElementById('desa').value;
        const dusun = document.getElementById('dusun').value;
        const rt = document.getElementById('rt').value;
        const rw = document.getElementById('rw').value;

        let fullAddress = [];
        if (kecamatan) fullAddress.push(`Kec. ${kecamatan}`);
        if (desa) fullAddress.push(`Desa ${desa}`);
        if (dusun) fullAddress.push(`Dusun ${dusun}`);
        if (rt || rw) fullAddress.push(`RT/RW ${rt}/${rw}`);

        if (fullAddress.length > 0) {
            addItemIfNotEmpty('Alamat', fullAddress.join(', '));
        }

        addItemIfNotEmpty('No. HP', document.getElementById('phone').value);
        addItemIfNotEmpty('Koordinat Lokasi', `${latitude}, ${longitude}`);

        // Membuat HTML untuk hasil biodata hanya untuk inputan yang diisi
        let html = '';

        biodataItems.forEach(item => {
            html += `
                <div class="info-item">
                    <div class="info-label">${item.label}</div>
                    <div class="info-value"><span class="colon">:</span><span class="colon"> </span>${item.value}</div>
                </div>
            `;
        });
        
        // Tambahkan peta ke hasil
        html += `
            <div class="info-item">
                <div class="info-label">Lokasi Rumah </div>
                <div class="info-value">
                    <div id="resultMap" style="height: 250px; width: 100%; margin-top: 10px;"></div>
                </div>
            </div>
        `;
             
        // Menambahkan foto jika ada
        if (photoInput.files && photoInput.files[0]) {
            const reader = new FileReader();

            reader.onload = function (e) {
                const photoHtml = `
                    <div style="text-align: center; margin-bottom: 20px;">
                        <img src="${e.target.result}" style="max-width: 120px; max-height: 160px; border-radius: 5px;">
                    </div>
                `;
                resultContent.innerHTML = photoHtml + html;

                // Inisialisasi peta hasil
                setTimeout(() => {
                    const resultMap = L.map('resultMap').setView([latitude, longitude], 15);
                    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    }).addTo(resultMap);

                    L.marker([latitude, longitude]).addTo(resultMap)
                        .bindPopup("<b>Lokasi Rumah </b>")
                        .openPopup();
                }, 100);

                // Sembunyikan form dan tampilkan hasil
                formSections.forEach(section => section.style.display = 'none');
                resultSection.style.display = 'block';

                // Scroll ke hasil
                resultSection.scrollIntoView({ behavior: 'smooth' });
            }

            reader.readAsDataURL(photoInput.files[0]);
        } else {
            resultContent.innerHTML = html;

            // Inisialisasi peta hasil
            setTimeout(() => {
                const resultMap = L.map('resultMap').setView([latitude, longitude], 15);
                L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                }).addTo(resultMap);

                L.marker([latitude, longitude]).addTo(resultMap)
                    .bindPopup("<b>Lokasi Rumah </b>")
                    .openPopup();
            }, 100);

            // Menampilkan hasil hanya jika ada data yang diisi
            if (biodataItems.length > 0) {
                // Sembunyikan form dan tampilkan hasil
                formSections.forEach(section => section.style.display = 'none');
                resultSection.style.display = 'block';
                resultSection.scrollIntoView({ behavior: 'smooth' });
            } else {
                alert('Silakan isi minimal satu data untuk membuat biodata');
            }
        }
    });
}

// Fungsi untuk memuat library Leaflet
function loadLeaflet() {
    const leafletCSS = document.createElement('link');
    leafletCSS.rel = 'stylesheet';
    leafletCSS.href = 'https://unpkg.com/leaflet@1.7.1/dist/leaflet.css';
    document.head.appendChild(leafletCSS);

    const leafletJS = document.createElement('script');
    leafletJS.src = 'https://unpkg.com/leaflet@1.7.1/dist/leaflet.js';
    leafletJS.onload = initializeMap;
    document.head.appendChild(leafletJS);
}

// Inisialisasi saat DOM siap
document.addEventListener('DOMContentLoaded', function () {
    // Setup event listeners
    document.getElementById('kecamatan').addEventListener('change', updateDesaOptions);
    document.getElementById('desa').addEventListener('change', updateDusunOptions);
    
    // Setup photo preview
    setupPhotoPreview();
    
    // Setup generate button
    setupGenerateButton();
    
    // Load Leaflet library
    loadLeaflet();
});