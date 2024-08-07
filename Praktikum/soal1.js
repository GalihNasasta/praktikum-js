let panjang= 30
let lebar= 20.5
let harga= 1500000
let ppn= 0.15

let luasTanah= panjang*lebar
let hargaTotal= luasTanah*harga

let hasilPpn=hargaTotal*ppn
let hargaFinal=hargaTotal+hasilPpn

console.log("Total Harga Tanah yang harus dibayar oleh Pak Arman sebanyak Rp "+hargaFinal.toLocaleString())
//toLocaleString untuk memberi titik pada hargaFinal