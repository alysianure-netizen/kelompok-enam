const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function ask(question) {
  return new Promise((resolve) => rl.question(question, resolve));
}

async function main() {
  let jumlahPengunjung, usia, i;
  let hargaTiket, totalHarga, hargaAkhir, diskon;

  totalHarga = 0;

  jumlahPengunjung = parseInt(await ask('Masukkan jumlah pengunjung: '), 10);

  for (i = 1; i <= jumlahPengunjung; i++) {
    usia = parseInt(await ask(`Masukkan usia pengunjung ke-${i}: `), 10);

    if (usia < 5) {
      hargaTiket = 0;
    } else {
      if (usia <= 12) {
        hargaTiket = 5;
      } else {
        if (usia <= 59) {
          hargaTiket = 10;
        } else {
          hargaTiket = 7;
        }
      }
    }

    totalHarga = totalHarga + hargaTiket;
  }

  if (jumlahPengunjung >= 5) {
    diskon = totalHarga * 0.10;
  } else {
    diskon = 0;
  }

  hargaAkhir = totalHarga - diskon;

  console.log('Jumlah Pengunjung: ' + jumlahPengunjung);
  console.log('Total Harga: ' + totalHarga);
  console.log('Diskon: ' + diskon);
  console.log('Harga: ' + hargaAkhir);

  rl.close();
}

main();
