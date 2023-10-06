// if else
let ie = 5
if (ie %2 == 0) {
    console.log("Genap");
} else{
    console.log("Ganjil");
} 

// nested if
let id = "Putra";
let alamat = "Karawang";

if (id == "Putra"){
    if (alamat == "Karawang") {
        console.log("Hallo kakak Mentor");
    }
}

// switch case
let s = 3
switch (s) {
    case 1:
        console.log("Satu")
        break;
    case 2:
        console.log("Dua")
        break;
    default:
        console.log("Lebih dari Dua")
}

// for statement
const nama = ["Putra", "Fajar", "Restu"];

for (let i in nama) {
    console.log(nama[i]);
}

// while, do while
let i = 1;
while(i <=3) {
    console.log(`Hallo`)
    i++;
}

let j =1
do {
    console.log(`Hayyo`)
    j++;
} while (j <= 5)

// function
function VolKubus(a, b) {
    let VolA;
    let VolB;
    let total;

    VolA = a + a + a;
    VolB = b + b + b;

    total = VolA + VolB;
    return total;
}
console.log(VolKubus(6, 5))


































// Dwi Putra Ardiansyah WEB C Afternoon