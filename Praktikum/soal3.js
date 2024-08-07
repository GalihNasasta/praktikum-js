let tinggi= 1.7 //dalam bentuk meter
let berat= 90 //dalam bentuk kilogram

let BMI=berat/(tinggi)**2

console.log("Tinggi Badan: "+tinggi+" m");
console.log("Berat Badan: "+berat+" kg");
console.log("BMI: "+BMI.toFixed(1));

if (BMI<18.5) {
    console.log("Kekurangan Berat Badan");
    
}else if (BMI>=18.5 && BMI<= 24.9) {
    console.log("Berat Badan Normal(Ideal)");

}else if (BMI>=25.0 && BMI>=29.9) {
    console.log("Kelebihan Berat Badan");

}else if (BMI>= 30.0) {
    console.log("Kegemukan(Obesitas)");

}

