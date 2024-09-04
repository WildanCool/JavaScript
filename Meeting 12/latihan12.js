// Soal 1 Skilvul
function mandi() {
  console.log("Mandi");
}

function sarapan(callback) {
  console.log("Sarapan tertuda 3 detik");
  setTimeout(callback, 3000);
}

function berangkatSekolah() {
  console.log("Berangkat Sekolah");
}

mandi();
sarapan(berangkatSekolah);