let totalHarga = 0;

let jumlahPengunjung = parseInt(prompt("Masukkan jumlah pengunjung:"));

for (let i = 1; i <= jumlahPengunjung; i++) {
    let usia = parseInt(prompt("Masukkan usia pengunjung ke-" + i + ":"));
    
    let hargaTiket = 0;
    if (usia < 5) {
        hargaTiket = 0;
    } else if (usia <= 12) {
        hargaTiket = 5;
    } else if (usia <= 59) {
        hargaTiket = 10;
    } else {
        hargaTiket = 7;
    }
    
    totalHarga += hargaTiket;
}

let diskon = (jumlahPengunjung >= 5) ? (totalHarga * 0.10) : 0;
let hargaAkhir = totalHarga - diskon;

alert(
    "Jumlah Pengunjung: " + jumlahPengunjung + "\n" +
    "Total Harga: " + totalHarga + "\n" +
    "Diskon: " + diskon + "\n" +
    "Harga Akhir: " + hargaAkhir
);
