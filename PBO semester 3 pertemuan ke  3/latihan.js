const sik = {
    kelas : 'b',
    angkatan : '2023',
    walidosen : 'Wildan'
}

console.log(sik.kelas);
console.log(sik.angkatan);
console.log(sik.walidosen);

const siKel = {}

siKel.atribut1 = 'contoh atribut 1'
siKel.atribut2 = 'contoh atribut 2'
siKel.atribut3 = 'contoh atribut 3'

console.log(siKel.atribut3);

delete siKel.atribut2;

let orang = {
    nama : 'Bintang',
    pekerjaan : 'Wiraswasta',
    kendaraan : {
        mobil : 'Fortuner',
        motor : "kawasaki ninja",
        pesawat : 'Boeing',
    }
}

console.log(orang.kendaraan.mobil)

orang.kendaraan.mobil = 'pajero sport'
console.log(orang.kendaraan.mobil)

let tampil = 'nama saya' + orang.nama + ',saya bekerja sebagai ' + orang.pekerjaan + 'sehari-hari saya terbiasa menggunakan pesawat pribadi dengan jenis ' + orang.kendaraan.pesawat

//document.getElementById('objek').innerHTML = tampil

let mahasiswa ={
    namaDepan : "Bintang",
    namabelakang : "Hikmatuloh",
    namalengkap : function(){
        return this.namaDepan + '' + this.namabelakang
    }
}

let tampilMHS = 'nama saya' + mahasiswa.namaDepan + ",nama lengkap saya adalah " + namalengkap

document.getElementById('objek').innerHTML = tampilMHS

function mahasiswaSIK(nama, kelas, angkatan){
    this.nama = nama,
    this.kelas = kelas,
    this.angkatan = angkatan
}

const mhs1 = new mahasiswaSIK('bintang', 'B', 2023);
const mhs2 = new mahasiswaSIK('Habibi', 'B', 2023);
const mhs3 = new mahasiswaSIK('keizha', 'B', 2023);

console.log('nama mahasiswa pertama adalah' + mhs1.nama)
console.log('nama mahasiswa kedua adalah' + mhs2.nama)
console.log('nama mahasiswa ketiga adalah' + mhs3.nama)