// Nomer 1
var nilai = 90;
var kehadiran = 20;
var totalpertemuan = 25;
var kategoriNilai = "";

var lulus = (kehadiran / totalpertemuan) * 100;

if (nilai >= 85) {
  console.log((kategoriNilai = "Nilai A"));
  if (lulus >= 75) {
    console.log(kategoriNilai + " Lulus");
  } else {
    console.log(kategoriNilai + " Tidak Lulus");
  }
} else if (nilai > 70 && nilai < 85) {
  console.log((kategoriNilai = "Nilai B"));
  if (lulus >= 75) {
    console.log(kategoriNilai + " Lulus");
  } else {
    console.log(kategoriNilai + " Tidak Lulus");
  }
} else if (nilai >= 50 && nilai < 71) {
  console.log((kategoriNilai = "Nilai C"));
  if (lulus >= 75) {
    console.log(kategoriNilai + " Lulus");
  } else {
    console.log(kategoriNilai + " Tidak Lulus");
  }
} else if (nilai < 50) {
  console.log((kategoriNilai = "TIDAK LULUS"));
}
