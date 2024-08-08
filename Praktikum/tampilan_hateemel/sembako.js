        function hitungTotal() {
    const hargaBeras = 10000 // harga per kg
    const hargaGula = 14000 // harga per kg
    const hargaTelur = 20000 // harga per kg
    const hargaMinyak = 9000 // harga per liter

    document.getElementByClass("harga_gula").innerText =

    const beras = document.getElementById("beras").value
    const gula = document.getElementById("gula").value
    const telur = document.getElementById("telur").value
    const minyak = document.getElementById("minyak").value

    const totalBeras = beras * hargaBeras
    const totalGula = gula * hargaGula
    const totalTelur = telur * hargaTelur
    const totalMinyak = minyak * hargaMinyak

    const total = totalBeras + totalGula + totalTelur + totalMinyak

    document.getElementById("total").innerText = "Total Harga: Rp "+total.toLocaleString()
} 
