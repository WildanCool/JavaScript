// Nomer 1 Soal Skilvul
class Pelajar {
  constructor(nama, sekolah) {
    var _nama = nama;
    var _sekolah = sekolah;

    this.setNama = function (nama) {
      _nama = nama;
    };

    this.setSekolah = function (sekolah) {
      _sekolah = sekolah;
    };

    this.getNama = function () {
      return _nama;
    };

    this.getSekolah = function () {
      return _sekolah;
    };
  }

  belajar() {
    return `${this.getNama()} belajar di ${this.getSekolah()}`;
  }
}

let pelajar = new Pelajar("Alpha", "Skilvul");
console.log(pelajar.belajar());

// Nomer 2 Soal Skilvul

class PersegiPanjang {
  constructor(panjang, lebar) {
    this.panjang = panjang;
    this.lebar = lebar;
  }

  luas() {
    var hasil = this.panjang * this.lebar;
    return hasil;
  }

  keliling() {
    var hasil = 2 * (this.panjang + this.lebar);
    return hasil;
  }
}

let persegiPanjang = new PersegiPanjang(4, 3);
console.log(persegiPanjang.luas());
console.log(persegiPanjang.keliling());

// Nomer 1 Soal GDrive
class Mobil {
  constructor(merk, tahun) {
    var _merk = merk;
    var _tahun = tahun;

    this.setMerk = function (merk) {
      _merk = merk;
    };

    this.setTahun = function (tahun) {
      _tahun = tahun;
    };

    this.getMerk = function () {
      return _merk;
    };

    this.getTahun = function () {
      return _tahun;
    };
  }

  keluaran() {
    return `${this.getMerk()} keluaran tahun ${this.getTahun()}`; //nyoba2 sendiri
  }
}

let mobil = new Mobil("Toyota", 2020);
console.log(mobil.getMerk());
console.log(mobil.getTahun());
console.log(mobil.keluaran());

// Nomer 2 Soal GDrive
class Pesawat {
  constructor(jenis, kecepatan) {
    var _jenis = jenis;
    var _kecepatan = kecepatan;

    this.setJenis = function (jenis) {
      _jenis = jenis;
    };

    this.setKecepatan = function (kecepatan) {
      _kecepatan = kecepatan;
    };

    this.getJenis = function () {
      return _jenis;
    };

    this.getKecepatan = function () {
      return _kecepatan;
    };
  }

  terbang() {
    return `${this.getJenis()} terbang dengan kecepatan ${this.getKecepatan()}`;
  }
}

class Jet extends Pesawat {
  constructor(jenis, kecepatan, kapasitasBahanBakar) {
    super(jenis, kecepatan);
    var _kapasitasBahanBakar = kapasitasBahanBakar;

    this.setkapasitasBahanBakar = function (kapasitasBahanBakar) {
      _kapasitasBahanBakar = kapasitasBahanBakar;
    };

    this.getkapasitasBahanBakar = function () {
      return _kapasitasBahanBakar;
    };
  }

  isiBahanBakar() {
    return `Isi bahan bakar ${this.getkapasitasBahanBakar()}`;
  }

  info() {
    return `${this.getJenis()} sedang terbang dengan kecepatan ${this.getKecepatan()} dengan beahan bakar ${this.getkapasitasBahanBakar()} liter`;
  } // nyoba2 sendiri
}

let jet = new Jet("QATAR AIRWAYS", "11.000 KM", 1000);
console.log(jet.isiBahanBakar());
console.log(jet.terbang());
console.log(jet.info());

// Nomer 3 Soal GDrive
class Karyawan {
  constructor(nama, jabatan, gaji) {
    var _nama = nama;
    var _jabatan = jabatan;
    var _gaji = gaji;

    this.setNama = function (nama) {
      _nama = nama;
    };

    this.setJabatan = function (jabatan) {
      _jabatan = jabatan;
    };

    this.setGaji = function (gaji) {
      _gaji = gaji;
    };

    this.getNama = function () {
      return _nama;
    };

    this.getJabatan = function () {
      return _jabatan;
    };

    this.getGaji = function () {
      return _gaji;
    };
  }
}

class Manager extends Karyawan {
  constructor(nama, jabatan, gaji) {
    super(nama, jabatan, gaji);
  }

  beriTunjangan() {
    return `${this.getNama()} Tunjangan  ${this.getJabatan()} ${this.getGaji()}`;
  }
}

let manager = new Manager("Terra", "Manager", 5000000);
console.log(manager.beriTunjangan());

// Nomer 4 Soal GDrive
class Kendaraan {
  constructor(kecepatan) {
    var _kecepatan = kecepatan;

    this.setKecepatan = function (kecepatan) {
      _kecepatan = kecepatan;
    };

    this.getKecepatan = function () {
      if (kecepatan < 0) {
        return (kecepatan = 0);
      } else {
        return (_kecepatan = kecepatan); // bisa disini
      }

      // return _kecepatan; // atau disini
    };
  }
}

let kendaraan = new Kendaraan(100);
console.log(kendaraan.getKecepatan());

// Nomer 5 Soal GDrive
class AkunBank {
  constructor(saldo, setoran) {
    var _saldo = saldo;
    var _setoran = setoran;

    this.setSaldo = function (saldo) {
      _saldo = saldo;
    };

    this.setSetoran = function (setoran) {
      _setoran = setoran;
    };

    this.getSaldo = function () {
      if (_saldo < 0) {
        return (_saldo = null);
      } else {
        return (_saldo = saldo + setoran);
      }
    };

    this.getSetoran = function () {
      return _setoran;
    };
  }
}

let akunBank = new AkunBank(-100, 5000000);
console.log(akunBank.getSaldo());

// Nomer 6 Soal GDrive
class Karyawan2 {
  constructor(nama, gaji) {
    var _nama = nama;
    var _gaji = gaji;

    this.setNama = function (nama) {
      _nama = nama;
    };

    this.setGaji = function (gaji) {
      _gaji = gaji;
    };

    this.getNama = function () {
      return _nama;
    };

    this.getGaji = function () {
      return _gaji;
    };
  }
}

class Manager2 extends Karyawan2 {
  constructor(nama, gaji) {
    super(nama, gaji);
  }

  buatLaporan() {
    return `${this.getNama()} Laporan Gaji ${this.getGaji()}Rp`;
  }
}

let manager2 = new Manager2("Terra", 5000000);
console.log(manager2.buatLaporan());
