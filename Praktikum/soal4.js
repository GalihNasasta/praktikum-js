let sukuPertama = 4
let rasio = 3
let jumlahSuku = 10
let jumlahTotal = 0

for (let i = 0; i < jumlahSuku; i++) {
    let jumlahSekarang = sukuPertama * Math.pow(rasio, i)
    jumlahTotal += jumlahSekarang
}

console.log("Jumlah 10 suku pertama: "+ jumlahTotal)