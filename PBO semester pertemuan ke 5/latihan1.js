// Superclass Bendera
class Bendera {
    constructor(namaNegara, warnaUtama) {
        this.namaNegara = namaNegara;
        this.warnaUtama = warnaUtama;
    }

    deskripsiBendera() {
        return `Bendera negara ${this.namaNegara} memiliki warna utama ${this.warnaUtama}.`;
    }
}

// Subclass Bendera
class BenderaIndonesia extends Bendera {
    constructor() {
        super("Indonesia", "Merah Putih");
    }

    deskripsiBendera() {
        return `${super.deskripsiBendera()} Ini adalah bendera dari Indonesia.`;
    }
}

class BenderaPerancis extends Bendera {
    constructor() {
        super("Perancis", "Biru Putih Merah");
    }

    deskripsiBendera() {
        return `${super.deskripsiBendera()} Ini adalah bendera dari Perancis.`;
    }
}

// Superclass Kendaraan
class Kendaraan {
    constructor(jenis, kecepatanMaks) {
        this.jenis = jenis;
        this.kecepatanMaks = kecepatanMaks;
    }

    deskripsiKendaraan() {
        return `Ini adalah kendaraan jenis ${this.jenis} dengan kecepatan maksimum ${this.kecepatanMaks} km/jam.`;
    }
}

// Subclass Kendaraan
class Mobil extends Kendaraan {
    constructor() {
        super("Mobil", 180);
    }

    deskripsiKendaraan() {
        return `${super.deskripsiKendaraan()} Kendaraan ini beroda empat.`;
    }
}

class Motor extends Kendaraan {
    constructor() {
        super("Motor", 120);
    }

    deskripsiKendaraan() {
        return `${super.deskripsiKendaraan()} Kendaraan ini beroda dua.`;
    }
}

// Superclass Makanan
class Makanan {
    constructor(nama, rasa) {
        this.nama = nama;
        this.rasa = rasa;
    }

    deskripsiMakanan() {
        return `Makanan ini adalah ${this.nama} yang memiliki rasa ${this.rasa}.`;
    }
}

// Subclass Makanan
class NasiGoreng extends Makanan {
    constructor() {
        super("Nasi Goreng", "Gurih");
    }

    deskripsiMakanan() {
        return `${super.deskripsiMakanan()} Makanan ini populer di Indonesia.`;
    }
}

class Sushi extends Makanan {
    constructor() {
        super("Sushi", "Asin dan Asam");
    }

    deskripsiMakanan() {
        return `${super.deskripsiMakanan()} Makanan ini berasal dari Jepang.`;
    }
}

// Superclass JenisKelamin
class JenisKelamin {
    constructor(kelamin) {
        this.kelamin = kelamin;
    }

    deskripsiJenisKelamin() {
        return `Jenis kelamin ini adalah ${this.kelamin}.`;
    }
}

// Subclass JenisKelamin
class Pria extends JenisKelamin {
    constructor() {
        super("Pria");
    }

    deskripsiJenisKelamin() {
        return `${super.deskripsiJenisKelamin()} Biasanya memiliki peran laki-laki.`;
    }
}

class Wanita extends JenisKelamin {
    constructor() {
        super("Wanita");
    }

    deskripsiJenisKelamin() {
        return `${super.deskripsiJenisKelamin()} Biasanya memiliki peran perempuan.`;
    }
}

// Superclass HewanPeliharaan
class HewanPeliharaan {
    constructor(nama, suara) {
        this.nama = nama;
        this.suara = suara;
    }

    deskripsiHewanPeliharaan() {
        return `Hewan peliharaan ini adalah ${this.nama} dan mengeluarkan suara ${this.suara}.`;
    }
}

// Subclass HewanPeliharaan
class Kucing extends HewanPeliharaan {
    constructor() {
        super("Kucing", "Meong");
    }

    deskripsiHewanPeliharaan() {
        return `${super.deskripsiHewanPeliharaan()} Kucing sering dipelihara di rumah.`;
    }
}

class Anjing extends HewanPeliharaan {
    constructor() {
        super("Anjing", "Guk Guk");
    }

    deskripsiHewanPeliharaan() {
        return `${super.deskripsiHewanPeliharaan()} Anjing sering dijadikan penjaga rumah.`;
    }
}


// Bendera
let indonesia = new BenderaIndonesia();
let perancis = new BenderaPerancis();
console.log(indonesia.deskripsiBendera());
console.log(perancis.deskripsiBendera());

// Kendaraan
let mobil = new Mobil();
let motor = new Motor();
console.log(mobil.deskripsiKendaraan());
console.log(motor.deskripsiKendaraan());

// Makanan
let nasiGoreng = new NasiGoreng();
let sushi = new Sushi();
console.log(nasiGoreng.deskripsiMakanan());
console.log(sushi.deskripsiMakanan());

// Jenis Kelamin
let pria = new Pria();
let wanita = new Wanita();
console.log(pria.deskripsiJenisKelamin());
console.log(wanita.deskripsiJenisKelamin());

// Hewan Peliharaan
let kucing = new Kucing();
let anjing = new Anjing();
console.log(kucing.deskripsiHewanPeliharaan());
console.log(anjing.deskripsiHewanPeliharaan());
