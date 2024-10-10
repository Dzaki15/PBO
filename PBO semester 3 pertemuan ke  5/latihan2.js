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

    // Getter untuk mengakses properti private
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

    infoKapal() {
        return `Kapal ini ${this.#nama} berjenis kapal ${this.#jenis} dengan kapasitas ${this.#kapasitas} dan tujuan ${this.#tujuan}`;
    }
}

class TahunProduksiKapal extends Kapal {
    #tahunProduksi;

    constructor(nama, jenis, kapasitas, tujuan, tahunProduksi) {
        super(nama, jenis, kapasitas, tujuan);
        this.#tahunProduksi = tahunProduksi;
    }

    // Getter untuk properti private
    getTahunProduksi() {
        return this.#tahunProduksi;
    }

    tahunProduksiKapal() {
        return `dengan tahun produksi ${this.#tahunProduksi}`;
    }
}

class BeratKapal extends Kapal {
    #beratKapal;

    constructor(nama, jenis, kapasitas, tujuan, beratKapal) {
        super(nama, jenis, kapasitas, tujuan);
        this.#beratKapal = beratKapal;
    }

    // Getter untuk properti private
    getBeratKapal() {
        return this.#beratKapal;
    }

    infoBeratKapal() {
        return `dengan berat kapal ${this.#beratKapal} ton`;
    }
}

let kapalPenumpang1 = new TahunProduksiKapal('kapal penumpang', 'ferry', 100, 'bakau huni', 2010);
console.log(kapalPenumpang1.infoKapal());
console.log(kapalPenumpang1.tahunProduksiKapal());

let kapalBarang = new BeratKapal('kapal barang', 'Kargo', 100, 'bakau huni', 5000);
console.log(kapalBarang.infoKapal());
console.log(kapalBarang.infoBeratKapal());
