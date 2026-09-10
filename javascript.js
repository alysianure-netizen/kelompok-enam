const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function ask(question) {
  return new Promise((resolve) => rl.question(question, resolve));
}

function getPrice(age) {
  if (age < 5) return 0;
  if (age <= 12) return 5;
  if (age <= 59) return 10;
  return 7;
}

function getCategory(age) {
  if (age < 5) return 'Anak (gratis)';
  if (age <= 12) return 'Anak-anak';
  if (age <= 59) return 'Dewasa';
  return 'Lansia';
}

async function main() {
  console.log('=== Kalkulator Harga Tiket ===\n');

  // tahap 1: tanya total pengunjung dulu
  let visitorCount = 0;
  while (visitorCount < 1) {
    const input = await ask('Berapa jumlah pengunjung? ');
    visitorCount = parseInt(input, 10);
    if (!visitorCount || visitorCount < 1) {
      console.log('Masukkan angka yang valid, minimal 1.\n');
      visitorCount = 0;
    }
  console.log(`\nSekarang masukkan usia dari pengunjung pertama sampai ke-${visitorCount}.\n`);

  // tahap 2: tanya usia satu-satu, dari pengunjung ke-1 sampai ke-visitorCount
  let subtotal = 0;
  const tickets = [];

  for (let i = 1; i <= visitorCount; i++) {
    let age = -1;
    while (age < 0) {
      const input = await ask(`Usia pengunjung ke-${i} dari ${visitorCount}: `);
      age = parseInt(input, 10);
      if (isNaN(age) || age < 0) {
        console.log('Usia tidak valid, coba lagi.');
        age = -1;
      }
    }
    const price = getPrice(age);
    subtotal += price;
    tickets.push({ nomor: i, usia: age, kategori: getCategory(age), harga: price });
  }

  // tahap 3: hitung total dan diskon
  const dapatDiskon = visitorCount >= 5;
  const diskon = dapatDiskon ? subtotal * 0.1 : 0;
  const totalAkhir = subtotal - diskon;

  console.log('\n--- Rincian Tiket ---');
  tickets.forEach((t) => {
    const hargaText = t.harga === 0 ? 'Gratis' : `$${t.harga.toFixed(2)}`;
    console.log(`#${t.nomor}  ${t.kategori}, ${t.usia} th  ->  ${hargaText}`);
  });

  console.log('\n--- Ringkasan ---');
  console.log(`Jumlah tiket : ${visitorCount}`);
  console.log(`Subtotal     : $${subtotal.toFixed(2)}`);
  if (dapatDiskon) {
    console.log(`Diskon 10%   : -$${diskon.toFixed(2)}`);
  } else {
    console.log('Belum dapat diskon (minimal 5 tiket)');
  }
  console.log(`Total bayar  : $${totalAkhir.toFixed(2)}`);

  rl.close();
}

main();
