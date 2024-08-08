let barang = [
    {nama: "Beras", harga: 10000, jumlah:1},
    {nama: "Gula", harga: 14000, jumlah:9},
    {nama: "Telur", harga: 20000, jumlah:2},
    {nama: "Minyak Goreng", harga: 9000, jumlah:10}
]

let totalHarga=0
for (let i = 0; i < barang.length; i++) {
    totalHarga+=barang[i].harga * barang[i].jumlah
}
console.log("Harga Total: Rp "+totalHarga.toLocaleString());