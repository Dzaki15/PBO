class Kapal {
    #nama;
    #jenis;
    #kapasitas;
    #tujuan;
    #_status;

    constructor(nama, jenis, kapasitas, tujuan) {
        this.#nama = nama;
        this.#jenis = jenis;
        this.#kapasitas = kapasitas;
        this.#tujuan = tujuan;
        this.#_status = 'tersedia';
    }

    getNama() {
        return this.#nama;
    }

    getJenis() {
        return this.#jenis;
    }

    getKapasitas() {
        return this.#kapasitas;
    }

    getTujuan() {
        return this.#tujuan;
    }

    // Metode infoKapal ini akan di-overriden oleh subclass
    infoKapal() {
        return `Kapal ini ${this.#nama} berjenis kapal ${this.#jenis} dengan kapasitas ${this.#kapasitas} dan tujuan ${this.#tujuan}`;
    }
}

// Subclass 1: Kapal Penumpang
class KapalPenumpang extends Kapal {
    #tahunProduksi;

    constructor(nama, kapasitas, tujuan, tahunProduksi) {
        super(nama, 'Penumpang', kapasitas, tujuan);
        this.#tahunProduksi = tahunProduksi;
    }

    infoKapal() {
        return `${super.infoKapal()} dengan tahun produksi ${this.#tahunProduksi}`;
    }
}

// Subclass 2: Kapal Barang
class KapalBarang extends Kapal {
    #beratMaksimal;

    constructor(nama, kapasitas, tujuan, beratMaksimal) {
        super(nama, 'Barang', kapasitas, tujuan);
        this.#beratMaksimal = beratMaksimal;
    }

    infoKapal() {
        return `${super.infoKapal()} dengan berat maksimal ${this.#beratMaksimal} ton`;
    }
}

// Subclass 3: Kapal Tanker
class KapalTanker extends Kapal {
    #muatanCairan;

    constructor(nama, kapasitas, tujuan, muatanCairan) {
        super(nama, 'Tanker', kapasitas, tujuan);
        this.#muatanCairan = muatanCairan;
    }

    infoKapal() {
        return `${super.infoKapal()} dengan muatan cairan ${this.#muatanCairan} liter`;
    }
}

// Subclass 4: Kapal Pesiar
class KapalPesiar extends Kapal {
    #jumlahDek;

    constructor(nama, kapasitas, tujuan, jumlahDek) {
        super(nama, 'Pesiar', kapasitas, tujuan);
        this.#jumlahDek = jumlahDek;
    }

    infoKapal() {
        return `${super.infoKapal()} dengan jumlah dek ${this.#jumlahDek}`;
    }
}

// Subclass 5: Kapal Kontainer
class KapalKontainer extends Kapal {
    #kapasitasKontainer;

    constructor(nama, kapasitas, tujuan, kapasitasKontainer) {
        super(nama, 'Kontainer', kapasitas, tujuan);
        this.#kapasitasKontainer = kapasitasKontainer;
    }

    infoKapal() {
        return `${super.infoKapal()} dengan kapasitas kontainer ${this.#kapasitasKontainer} TEU`;
    }
}

// Fungsi untuk menguji polimorfisme
function tampilkanInfoKapal(kapal) {
    console.log(kapal.infoKapal());
}

// Contoh Penggunaan dengan Polimorfisme:
let kapalPenumpang1 = new KapalPenumpang('Kapal Penumpang Ferry', 200, 'Jakarta', 2015);
let kapalBarang1 = new KapalBarang('Kapal Kargo', 300, 'Surabaya', 8000);
let kapalTanker1 = new KapalTanker('Kapal Tanker Minyak', 500, 'Balikpapan', 2000000);
let kapalPesiar1 = new KapalPesiar('Kapal Pesiar Mewah', 1000, 'Bali', 10);
let kapalKontainer1 = new KapalKontainer('Kapal Kontainer Raksasa', 1000, 'Singapura', 20000);

// Polimorfisme: menggunakan fungsi yang sama untuk berbagai subclass
tampilkanInfoKapal(kapalPenumpang1);
tampilkanInfoKapal(kapalBarang1);
tampilkanInfoKapal(kapalTanker1);
tampilkanInfoKapal(kapalPesiar1);
tampilkanInfoKapal(kapalKontainer1);
