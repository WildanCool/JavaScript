// Nomer 1
const umurPengunjung = 6;
if (umurPengunjung > 5) {
  console.log("Bayar Tiket Penuh");
} else if (umurPengunjung >= 2 && umurPengunjung <= 5) {
  console.log("Bayar Sebagian Harga");
} else {
  console.log("Tidak Bisa Masuk");
}

// Nomer 2
const usia = 17;
if (usia >= 17) {
  console.log("Sudah berhak mendapatkan SIM");
} else {
  console.log("Belum berhak mendapatkan SIM");
}

// Nomer 3
const angka = -5;
if (angka > 0) {
  console.log("Positif");
} else if (angka < 0) {
  console.log("Negatif");
} else {
  console.log("Netral");
}

// Nomer 4
const x = -2;
const y = 3;
if (x > 0 && y > 0) {
  console.log("Player di kanan atas");
} else if (x < 0 && y < 0) {
  console.log("Player di kiri bawah");
} else if (x > 0 && y < 0) {
  console.log("Player di kanan bawah");
} else if (x < 0 && y > 0) {
  console.log("Player di kiri atas");
} else {
  console.log("Player di tengah");
}

// Nomer 5
const totalPembelian = 100;
let diskon = 0;

if (totalPembelian >= 200) {
  diskon = 0.15;
} else if (totalPembelian >= 100 && totalPembelian < 199) {
  diskon = 0.1;
}
console.log(diskon);

const totalSetelahDiskon = totalPembelian - totalPembelian * diskon;
console.log(`Total setelah diskon: Rp ${totalSetelahDiskon}`);

// Nomer 6
const usiaPengguna = 18;
if (usiaPengguna >= 18) {
  console.log("Registrasi berhasil");
} else {
  console.log("Registrasi gagal");
}
