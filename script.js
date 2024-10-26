// Membuat dropdown menu
const dropdown = document.querySelector('.dropdown');
const dropdownMenu = document.querySelector('.dropdown-menu');


//Dropdown Menu: Sebuah menu tersembunyi yang muncul ketika elemen tertentu diklik.
dropdown.addEventListener('click', () => {
    dropdownMenu.classList.toggle('show');
});

// Elemen Dropdown: Fitur ini dipicu oleh elemen HTML dengan kelas "dropdown". Elemen ini bisa berupa tombol, tautan, atau elemen lain yang dapat diklik.
// Aksi Klik: Ketika pengguna mengklik elemen "dropdown", kode JavaScript akan dijalankan.
// Toggle Menu: Kode akan mencari elemen HTML dengan kelas "dropdown-menu" dan mengubah keadaannya antara ditampilkan dan disembunyikan. Pengubahan keadaan ini dilakukan dengan menambahkan atau menghapus kelas "show" pada elemen "dropdown-menu".