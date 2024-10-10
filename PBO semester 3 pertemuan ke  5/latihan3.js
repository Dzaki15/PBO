class SensorPasut {
    constructor(nama, lokasi) {
      this.nama = nama  
      this.lokasi = lokasi
      this._status ='mati'
    } 
    aktifkan() {
        this._status = 'hidup'
        return `sensor ${this.nama} dengan lokasi ${this.lokasi} aktif`;
    }
    matikan() {
        this._status = 'mati'
        return `sensor ${this.nama} dengan lokasi ${this.lokasi} mati`;
    }  
    getStatus() {
     return status `sensor ${this.nama} dengan lokasi ${this.lokasi} ${this._status}`  
    }         
}

let sensorPasutMerak = new SensorPasut('sensor selat sunda', 'merak')
console.log(sensorPasutMerak.aktifkan())
console.log(sensorPasutMerak.getStatus())



