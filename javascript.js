// Ticket Price Calculator

let jumlahTiket = parseInt(prompt("Masukkan jumlah pengunjung:"));
let totalHarga = 0;

for (let i = 1; i <= jumlahTiket; i++) {
    let usia = parseInt(prompt("Masukkan usia pengunjung ke-" + i + ":"));
    let hargaTiket;

    // Menentukan harga tiket berdasarkan usia
    if (usia < 5) {
        hargaTiket = 0;
    } else if (usia >= 5 && usia <= 12) {
        hargaTiket = 5;
    } else if (usia >= 13 && usia <= 59) {
        hargaTiket = 10;
    } else {
        hargaTiket = 7;
    }

    totalHarga += hargaTiket;

    console.log(
        "Pengunjung ke-" + i +
        " | Usia: " + usia +
        " | Harga tiket: $" + hargaTiket
    );
}

// Diskon 10% jika membeli 5 tiket atau lebih
let diskon = 0;

if (jumlahTiket >= 5) {
    diskon = totalHarga * 0.10;
}

let hargaAkhir = totalHarga - diskon;

// Menampilkan hasil
console.log("-----------------------------");
console.log("Jumlah tiket : " + jumlahTiket);
console.log("Total harga  : $" + totalHarga);
console.log("Diskon       : $" + diskon);
console.log("Harga akhir  : $" + hargaAkhir);
console.log("-----------------------------");

alert(
    "Jumlah tiket: " + jumlahTiket +
    "\nTotal harga: $" + totalHarga +
    "\nDiskon: $" + diskon +
    "\nHarga akhir: $" + hargaAkhir
);
