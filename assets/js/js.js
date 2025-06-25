// Data desa berdasarkan kecamatan
const desaData = {
    "Bangorejo": ["Bangorejo", "Kebondalem", "Kedunggebang", "Kaliabang", "Ringintelu", "Sambirejo", "Sambimulyo", "Sukorejo", "Sumberberas", "Sumberagung", "Temurejo", "Wonosobo"],
    "Banyuwangi": ["Banyuwangi", "Banjarsari", "Karangrejo", "Kertosari", "Kepatihan", "Kampung Melayu", "Kebalenan", "Lateng", "Pakis", "Penganjuran", "Pendopo", "Pengantigan", "Sobo", "Singotrunan", "Singonegaran", "Taman Baru", "Tukangkayu"],
    "Blimbingsari": ["Blimbingsari", "Badean", "Bomo", "Gintangan", "Kaligung", "Kaotan", "Karangrejo", "Patoman", "Sukojati", "Watukebo"],
    "Cluring": ["Benculuk", "Cluring", "Kaliploso", "Plampangrejo", "Sarimulyo", "Sraten", "Sembulung", "Tampo", "Tamanagung"],
    "Gambiran": ["Gambiran", "Jajag", "Purwodadi", "Wringinagung", "Wringinrejo", "Yosomulyo"],
    "Genteng": ["Genteng", "Genteng Kulon", "Genteng Wetan", "Kembiritan", "Kaligondo", "Setail"],
    "Giri": ["Boyolangu", "Giri", "Grogol", "Jambersari"],
    "Glagah": ["Bakungan", "Banjarsari", "Glagah", "Kenjo", "Kemiren", "Kampunganyar", "Olehsari", "Paspan", "Rejosari", "Tamansuruh"],
    "Glenmore": ["Bumiharjo", "Glenmore", "Karangharjo", "Margomulyo", "Sepanjang", "Sumbergondo", "Tulungrejo", "Tegalharjo"],
    "Kalibaru": ["Banyuanyar", "Kalibaru", "Kretek", "Kertosari", "Kebunrejo", "Temurejo", "Tegalharjo"],
    "Kalipuro": ["Bulusari", "Kalipuro", "Kelir", "Ketapang", "Pesucen", "Telemung"],
    "Kabat": ["Dadapan", "Gombolirang", "Kabat", "Kedayunan", "Labanasem", "Pakistaji", "Tambong"],
    "Licin": ["Kluncing", "Licin", "Pakel", "Segobang", "Tamansari"],
    "Muncar": ["Blambangan", "Muncar", "Kedungrejo", "Sumbersewu", "Kedungringin", "Tapanrejo", "Tembokrejo", "Tambakrejo"],
    "Pesanggaran": ["Kandangan", "Pesanggaran", "Sumberagung", "Sarongan", "Sumbermulyo"],
    "Rogojampi": ["Aliyan", "Bubuk", "Gitik", "Gladag", "Kedaleman", "Karangbendo", "Lemahbangdewo", "Pengatigan", "Rogojampi"],
    "Sempu": ["Gendoh", "Jambewangi", "Karangsari", "Sempu", "Temuasri", "Tegalarum", "Temuguruh"],
    "Siliragung": ["Buluagung", "Barurejo", "Kesilir", "Siliragung", "Seneporejo"],
    "Singojuruh": ["Alasmalang", "Benelan Kidul", "Cantuk", "Gambor", "Padang", "Kemiri", "Singojuruh", "Singolatren", "Sumberbaru"],
    "Songgon": ["Balak", "Bangunsari", "Bayu", "Bedewang", "Parangharjo", "Songgon", "Sragi", "Sumberarum", "Sumberbulu"],
    "Srono": ["Bagorejo", "Kebaman", "Kepundungan", "Parijatahkulon", "Parijatahwetan", "Rejoagung", "Sukonatar", "Sukomaju", "Srono", "Wonosobo"],
    "Tegaldlimo": ["Kalipait", "Kedungasri", "Kedunggebang", "Kendalrejo", "Purwoasri", "Tegaldlimo", "Wringinputih", "Wringinpitu"],
    "Wongsorejo": ["Alasbuluh", "Bajulmati", "Bangsring", "Bimorejo", "Wongsorejo", "Watukebo"],
};

// Data dusun berdasarkan desa
const dusunData = {
    "Bangorejo": ["Bangorejo","Gunungsari", "Sere", "Tamansari"],
        "Bangorejo": ["Bangorejo","Gunungsari","Sere","Tamansari"],
        "Kebondalem": ["Kebondalem","Kebonrejo","Sandangrejo","Tanjungrejo"],
        "Kedunggebang": ["Kedunggebang","Kedungrejo","Kedungmulyo","Kedungjati"],
        "Kaliabang": ["Kaliabang","Kaliabang Barat","Kaliabang Timur"],
        "Ringintelu": ["Ringintelu","Ringinmulyo","Yudomulyo"],
        "Sambirejo": ["Grogolan","Krajan","Pakelan","Nglejok","Ngrapah"],
        "Sambimulyo": ["Kedungrejo","Sambirejo"],
        "Sukorejo": ["Gundik","Mengai","Wedeng"],
        "Sumberberas": ["Sidomulyo","Sumberayu"],
        "Sumberagung": ["Pancer","Silirbaru","Sungailembu"],
        "Temurejo": ["Kedungringin","Plaosan","Selorejo","Sumberjambe","Temurejo"],
        "Wonosobo": ["Krajan Wetan","Krajan Baru","Komis Wetan","Komis Kulon","Krajan Kulon","Plembangrejo","Sumberwangi"],

    "Banyuwangi": ["Krajan", "Sumberjoyo", "Sumberrejo"],
        "Banyuwangi": ["Krajan","Sumberjoyo","Sumberrejo"],
        "Banjarsari": ["Lingkungan Pandan","Lingkungan Banjarsari","Lingkungan Karanganyar"],
        "Karangrejo": ["Kedasri","Pendarungan","Rejosari"],
        "Kertosari": ["Krajan","Kramat","Karanganom"],
        "Kepatihan": ["Krajan Surodilagan","Ujung"],
        "Kampung Melayu": ["Lingkungan Arab","Lingkungan Tanjung","Lingkungan Kauman","Lingkungan Lateng"],
        "Kebalenan": ["Lingkungan Cungking","Lingkungan Kampung Baru","Lingkungan Wetan","Lingkungan Delima"],
        "Lateng": ["Kenalan","Kebonjeruk","Manggisan"],
        "Pakis": ["Duren","Krajan","Pelampang","Rowo"],
        "Penganjuran": ["Karangtipis","Krajan","Mulyoasri","Welaran"],
        "Pendopo": ["Lingkungan Kepatihan","Lingkungan Karangtengah","Lingkungan Singonegaran","Lingkungan Sumberayu"],
        "Pengantigan": ["Lingkungan Karangasem","Lingkungan Sukowidi","Lingkungan Pengantigan","Lingkungan Wonosari"],
        "Sobo": ["Gareng","Karangente","Sutri","Wonosari"],
        "Singotrunan": ["Lingkungan Karangente","Lingkungan Temenggungan","Lingkungan Kebalenan"],
        "Singonegaran": ["Lingkungan Wonosari","Lingkungan Singonegaran","Lingkungan Karangsari"],
        "Taman Baru": ["Kampung Baru","Tamansari"],
        "Tukangkayu": ["Krajan","Stendo"],

    "Blimbingsari": ["Bentengan", "Blimbingsari", "Krajan", "Pecemengan", "Tegalwero"],
        "Blimbingsari": ["Bentengan","Blimbingsari","Krajan","Pecemengan","Tegalwero"],
        "Badean": ["Cungkingan","Jatisari","Krajan"],
        "Bomo": ["Jatisari","Krajan","Kedunen"],
        "Gintangan": ["Gumukagung","Krajan","Kedungbaru","Kedungsari"],
        "Kaligung": ["Krajan","Kramatagung","Pekiwen"],
        "Kaotan": ["Krajan","Krasak"],
        "Karangrejo": ["Kedasri", "Krajan","Kebonagung"],
        "Patoman": ["Blibis","Patoman barat","Patoman Tengah","Patoman Timur"],
        "Sukojati": ["Krajan","Kampung Lor","Kampung Tengah","Sengon"],
        "Watukebo": ["Amerthasari","Glondong","Gepuro","Gumuk Agung","Krajan","Patoman"],

    "Cluring": ["Cemetuk","Karangrejo","Kepatihan","Krajan","Trembelang"],
        "Benculuk": ["Kebonsari","Kemloso","Krajan","Pancursari","Purwosar"," Rejosari"],
        "Cluring": ["Cemetuk","Karangrejo","Kepatihan","Krajan","Trembelang"],
        "Kaliploso": ["Kalirejo","Plosorejo"],
        "Plampangrejo": ["Krajan","Sumberrejo","Sumberbendo","Rumping","Wringinpitu"],
        "Sarimulyo": ["Cempokosari","Pandansari","Rejomulyo","Sempu"],
        "Sraten": ["Krajan","Sukodadi","Tapansari"],
        "Sembulung": ["Krajan","Talunrejo","Tempursari","Talunrejo"],
        "Tampo": ["Tampo"],
        "Tamanagung": ["Krajan","Sagad","Sumberjeruk","Sumberwaru"],

    "Gambiran": ["Krajan 1", "Krajan 2", "Lidah", "Setembel"],
        "Gambiran": ["Krajan 1","Krajan 2","Lidah","Setembel"],
        "Jajag": ["Bulusari","Kampung Baru","Krajan","Petahunan","Yosowinangun"],
        "Purwodadi": ["Gembolo","Krajan","Tempurejo"],
        "Wringinagung": ["Glowong","Jatisari","Sumberjaya","Sumberjo"], 
        "Wringinrejo": ["Krajan","Mulyorejo","Toyamas","Tamanrejo"], 
        "Yosomulyo": ["Krajan I","Krajan II","Sidomukti"],

    "Genteng": ["Krajan", "Sumberagung", "Sumberjoyo"],
        "Genteng": ["Krajan","Sumberagung","Sumberjoyo"],
        "Genteng Kulon": ["Krajan","Kopen","Jenisari","Maron","Sawahan"], 
        "Genteng Wetan": ["Cangaan","Krajan","Resomulyo"],  
        "Kembiritan": ["Krajan I","Krajan II","Kaliputih","Pandan","Temurjo"],
        "Kaligondo": ["Kaliwadung","Jepit","Selorejo","Sumberwadung","Wadungdolah","Wadungbarat"],
        "Setail": ["Curahketangi I","Curahketangi II","Jalen I","Jalen II","Jalen Darungan"],

    "Giri": ["Krajan", "Sumberejo", "Sumberrejo"],
        "Boyolangu": ["Dadapan"],
        "Giri": ["Krajan","Sumberejo","Sumberrejo"],
        "Grogol": ["Guwo","Kopendukuh","Laos","Pelinggihan","Putuk"], 
        "Jambersari": ["Delik I","Delik II","Jambean","Langring","Mangli"], 

    "Glagah": ["Krajan", "Sumberagung", "Sumberjoyo"],
        "Bakungan": ["Gaplek","Krajan","Karangasem","Watu Ulo"],
        "Banjarsari": ["Krajan","Sumberbendo","Sumberbulu"],
        "Glagah": ["Krajan","Sumberagung","Sumberjoyo"],  
        "Kenjo": ["Krajan","Salakan"],
        "Kemiren": ["Krajan","Kedaleman"],
        "Kampunganyar": ["Krajan","Kalibendo","Kopencungking","Panggang","Rejopuro"],
        "Olehsari": ["Krajan","Joyosari"], 
        "Paspan": ["Krajan","Krajan II","Paspan","Paspan II"],
        "Rejosari": ["Krajan","Watu Ulo"],
        "Tamansuruh": ["Andong","Gadog","Krajan","Mondoluko","Wonosari"],

    "Glenmore": ["Krajan", "Sumberejo", "Sumberrejo"],
        "Bumiharjo": ["Beji","Krajan","Sumberbulu","Sumberbendo","Wonoasih"],
        "Glenmore": ["Krajan","Sumberejo","Sumberrejo"],
        "Karangharjo": ["Krajan","Sumberbulu","Sumberbendo"],
        "Margomulyo": ["Krajan","Sumberbulu","Sumberbendo"], 
        "Sepanjang": ["Krajan","Sumbergondo","Sumberbulu","Sumberbendo"], 
        "Sumbergondo": ["Krajan","Sumberbulu","Sumberbendo"], 
        "Tulungrejo": ["Krajan","Sumberbulu","Sumberbendo"], 
        "Tegalharjo": ["Krajan","Sumberbulu","Sumberbendo"],

    "Kalibaru": ["Krajan", "Sumberejo", "Sumberagung"],
        "Banyuanyar": ["Krajan","Kidul","Tengah"],
        "Kalibaru": ["Krajan","Sumberejo","Sumberagung"], 
        "Kretek": ["Bungkus","Depok","Duwuran","Grogol IX","Grogol VIII","Grogol VII","Mancaingan","Samiran","Sono"], 
        "Kertosari": ["Krajan","Selatan","Tengah"],
        "Kebunrejo": ["Krajan","Barat","Tengah"],  
        "Temurejo": ["Kedungringin","Plaosan","Selorejo","Sumberjambe","Temurejo"],    
        "Tegalharjo": ["Darungan","Krajan","Krikilan","Sidodadi"], 

    "Kalipuro": ["Krajan", "Sumberjoyo", "Sumberrejo"],
        "Bulusari": ["Bulusari Utara","Bulusari Selatan","Gunung Butak","Pojok","Selang","Sawur"],
        "Kalipuro": ["Krajan","Sumberjoyo","Sumberrejo"], 
        "Kelir": ["Banjarwaru","Kopenbayah","Krajan","Pekarangan"],
        "Ketapang": ["Krajan","Sumberbendo"," Sumberbulu"], 
        "Pesucen": ["Bangunrejo","Bulupayung","Krajan","Kopensere","Padangbaru","Plampang"], 
        "Telemung": ["Krajan","Sumberbendo"," Sumberbulu"], 

    "Kabat": ["Krajan", "Sumberagung", "Sumberjoyo"],
        "Dadapan": ["Dadapan Utara","Krajan","Secawan"],
        "Gombolirang": ["Ancar","Cungking","Krajan","Kertosari","Sempu"], 
        "Kabat": ["Krajan","Sumberagung","Sumberjoyo"],  
        "Kedayunan": ["Babakan","Krajan"],
        "Labanasem": ["Krajan Barat","Krajan Timur","Labansukadi","Lawang"], 
        "Pakistaji": ["Dadapan (terdiri dari Dukuh Sumbersari)","Krajan","Kepuh (terdiri dari Dukuh Sumber Kepuh)"],  
        "Tambong": ["Krajan","Kejoyo","Kebunsari"],

    "Licin": ["Benel", "Glondok", "Krajan", "Karangan", "Plembon"],
        "Kluncing": ["Kluncing","Krajan","Sumberbulu","Sumberbendo"], 
        "Licin": ["Benel","Glondok","Krajan","Karangan","Plembon"], 
        "Pakel": ["Sadang","Taman Glugo"],
        "Segobang": ["Banyucindih","Kayangan","Krajan Barat","Krajan Timur","Srampon"], 
        "Tamansari": ["Ampel Gading","Jambu","Krajan","Kebundadap","Sumberwatu","Tanah Los"],  

    "Muncar": ["Krajan", "Sumberagung", "Sumberjoyo"],
        "Blambangan": ["Sukosari"],
        "Kedungrejo": ["Krajan","Kalimati","Muncar","Stoplas","Sampangan"],
        "Kedungringin": ["Krajan","Sumbersewu"], 
        "Muncar": ["Krajan","Sumberagung","Sumberjoyo"],
        "Sumbersewu": ["Krajan","Palurejo"],
        "Tapanrejo": ["Kedung Dandang (6 RW)","Krajan (9 RW)"],  
        "Tembokrejo": ["Muncar Baru"],  
        "Tambakrejo": ["Krajan"],

    "Pesanggaran": ["Krajan", "Sumberejo", "Sumberrejo"],
        "Kandangan": ["Krajan","Sumberbopong","Sumberdadi","Sumberjambe"], 
        "Pesanggaran": ["Krajan","Sumberejo","Sumberrejo"],
        "Sumberagung": ["Pancer","Rejoagung","Silirbaru","Sungailembu"], 
        "Sarongan": ["Sukamade","Sumberbulu","Sumbermulyo"],  
        "Sumbermulyo": ["Mulyosari","Tembakur"],

    "Rogojampi": ["Krajan", "Jagalan", "Lugonto", "Maduran", "Prejengan I", "Prejengan II", "Rogojampi Utara"],
        "Aliyan": ["Bolot","Krajan","Kedawung","Sukodono","Temurejo"],
        "Bubuk": ["Bubuk Krajan","Banje","Sukosari (juga dikenal sebagai Gelundengan)","Warengan"], 
        "Gitik": ["Krajan","Sidomulyo","Sidorejo","Timurejo"],
        "Gladag": ["Krajan","Lateng","susukan Kidul","Susukan Lor"],    
        "Kedaleman": ["Krajan","Kebondalem","Karangsari","Kepatihan","Puspan"],
        "Karangbendo": ["Bades","Jajangsurat","Karanganyar","Krajan","Pancoran"],
        "Lemahbangdewo": ["Krajan","Satriyan","Kebalen Kidul","Kebalen Lor"],
        "Pengatigan": ["Cangkring","Gurit","Krajan","Lugjag"], 
        "Rogojampi": ["Krajan","Jagalan","Lugonto","Maduran","Prejengan I","Prejengan II","Rogojampi Utara"],

    "Sempu": ["Krajan", "Tugung", "Jambewangi"],
        "Gendoh" : ["Klontang","Krajan","Sumberbulu","Sumbermulyo"],
        "Jambewangi": ["Krajan","Panjen","Parastembok","Sidomulyo","Sumberjo","Tlogosari"],
        "Karangsari": ["Dadapan","Gumuk","Karanganyar","Karangrejo","Mangli","Nganjukan"],
        "Sempu": ["Krajan","Jambewangi","Tugung"],
        "Temuasri": ["Awu-Awu","Krajan","Sumberagung"," Sumbermulyo"], 
        "Tegalarum": ["Kedungrengit","Prembulan","Susukan","Tegalwangi"], 
        "Temuguruh": ["Krajan","Sumberbulu","Sumbermulyo","Sumberagung"], 

    "Siliragung": ["Krajan", "Seloagung", "Tegalwagah"],
        "Buluagung": ["Buluagung","Krajan","Sumberurip","Sumberbulu","Sumbermulyo"],
        "Barurejo": ["Krajan","Seneposari","Senepolor","Sumberurip","Sumbermanggis"],
        "Kesilir": ["Kesilir","Silirsari","Siliragung","Sumberagung","Sumbermulyo"], 
        "Siliragung": ["Krajan","Seloagung","Tegalwagah"], 
        "Seneporejo": ["Seneporejo","Sumberbulu","Sumbermulyo","Sumberagung"],

    "Singojuruh": ["Juruh", "Kemiren", "Krajan Barat"],
        "Alasmalang": ["Bangunrejo","Garit","Krajan","Karangasem","Wonorekso"],
        "Benelan Kidul": [" Benelan Kidul","Krajan","Sumberbulu","Sumbermulyo"],
        "Cantuk": ["Cantuk","Krajan","Sumberbulu","Sumbermulyo"],
        "Gambor": ["Gambor","Krajan","Sumberbulu","Sumbermulyo"],    
        "Kemiri": ["Kemiri","Krajan","Sumberbulu","Sumbermulyo"],
        "Padang": ["Krajan","Padang","Sumberbulu","Sumbermulyo"],
        "Singojuruh": ["Juruh","Kemiren","Krajan Barat"], 
        "Singolatren": ["Singolatren","Krajan","Sumberbulu","Sumbermulyo"],  
        "Sumberbaru": ["Krajan","Paeloan","Sumberbulu","Sumbermulyo"],

    "Songgon": ["Bumisari", "Pelantaran", "Kentangan"],
        "Balak": ["Balak Kidul","Balak Lor","Cemoro","Derwono","Tampak Bayan","Wonorejo"], 
        "Bangunsari": ["Bangunsari","Krajan","Sroyo","Sumberbulu","Sumbermulyo"], 
        "Bayu": ["Bayu","Krajan","Sumberbulu","Sumbermulyo"], 
        "Bedewang": ["Bedewang Asem","Bedewang Krajan","Wiyayu Barat","Wiyayu Timur","Tegalwudi"], 
        "Parangharjo": ["Parangharjo","Sumberbulu","Sumbermulyo","Sumberagung"],
        "Songgon": ["Bumisari","Kentangan","Pelantaran"], 
        "Sragi": ["Bongkoran","Kencono","Kendal","Krajan","Pertapan","Sragi Tengah","Watugowok"], 
        "Sumberarum": ["Bejong","Krajan","Kampung Anyar","Mangaran","Pasar","Sumberasih"], 
        "Sumberbulu": ["Sumberbulu","Sumbermulyo","Sumberagung"],

    "Srono": ["Krajan", "Kebaman", "Srono" ],
        "Bagorejo": ["Krajan","Sumberbulu","Sumbermulyo"],  
        "Kebaman": ["Krajan","Sumberbulu","Sumbermulyo"], 
        "Kepundungan": ["Sumberbulu","Sumbermulyo","Sumberagung"],  
        "Parijatahkulon": ["Sumberbulu","Sumbermulyo","Sumberagung"], 
        "Parijatahwetan": ["Sumberbulu","Sumbermulyo","Sumberagung"],
        "Rejoagung": ["Krajan","Sumberagung","Sumbergroto"], 
        "Sukomaju": ["Krajan","Sukorejo","Sumberbulu","Sumbermulyo"],
        "Sukonatar": ["Karang Lo","Krajan","Sumberbulu","Sumbermulyo"],
        "Srono": ["Krajan","Kebaman","Srono"],
        "Wonosobo": ["Krajan","Sumberbulu","Sumbermulyo"],

    "Tegaldlimo": ["Sumberhulur", "Sumberdadi", "Sumberrejo"],
        "Kalipait": ["Kutorejo","Purworejo"],
        "Kedunggebang": ["Kedunggebang"],
        "Kedungasri": ["Kedungasri"], 
        "Kendalrejo": ["Kaliagung","Pandanrejo","Paluagung"], 
        "Purwoasri": ["Krajan","Sambileren"], 
        "Tegaldlimo": ["Sumberhulur","Sumberdadi","Sumberrejo"], 
        "Wringinpitu": ["Wringinpitu"],
        "Wringinputih": ["Kabatmantren","Krajan","Tegalpare"],

    "Wongsorejo": ["Alasmalang", "Krajan", "Pringondadi"],
        "Alasbuluh": ["Krajan 1","Krajan 2"], 
        "Bajulmati": ["Badolan","Galekan","Karanganyar","Krajan"], 
        "Bangsring": ["Krajan 1","Krajan 2","Paras Putih"], 
        "Bimorejo": ["Aseman","Bimo"],
        "Wongsorejo": ["Alasmalang","Krajan","Pringondadi"], 
        "Watukebo": ["Amerthasari","Krajan","Gepuro","Gumuk Agung","Glondong","Patoman"], 
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