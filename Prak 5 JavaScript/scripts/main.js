// Seleksi elemen gambar
var myImage = document.querySelector('#logo-gambar'); // Menggunakan id yang ditambahkan

// Menetapkan fungsi event handler untuk event 'onclick'
myImage.onclick = function() {
    // Mendapatkan nilai atribut 'src' saat ini
    var mySrc = myImage.getAttribute('src');

    // Memeriksa apakah gambar saat ini adalah gambar pertama
    if(mySrc === 'images/foto1.png') {
        // Jika ya, ubah ke gambar kedua
        myImage.setAttribute('src', 'images/foto2.png');
    } else {
        // Jika tidak (sudah gambar kedua), ubah kembali ke gambar pertama
        myImage.setAttribute('src', 'images/foto1.png');
    }
}

// --- Kode untuk Menambahkan Pesan Selamat Datang yang Dinamis ---

// Mengambil referensi ke tombol dan judul
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

// Fungsi untuk mengatur nama pengguna baru
function setUserName() {
    // Meminta pengguna memasukkan data
    var myName = prompt('Silakan masukkan nama Anda.');         
    // Memeriksa apakah pengguna memasukkan nama atau membatalkan
    if (!myName || myName === null) {
        // Jika dibatalkan atau kosong, panggil lagi (opsional: bisa juga di-exit)
        setUserName();
    } else {
        // Menyimpan nama ke Local Storage
        localStorage.setItem('name', myName);
        // Mengubah judul
        myHeading.innerHTML = 'Mozilla is cool, ' + myName;
    }
}

// Blok inisialisasi - dijalankan saat halaman pertama kali dimuat
if (!localStorage.getItem('name')) {
    // Jika 'name' belum ada, minta nama pengguna
    setUserName();
} else {
    // Jika 'name' sudah ada, ambil dan tampilkan
    var storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}

// Menetapkan pengendali event onclick pada tombol untuk memanggil setUserName()
myButton.onclick = function() {
    setUserName();
}