//Scope 
let nilai = 50;
if(true){
    let nilai = 35  
    console.log(nilai)
}
console.log(nilai)

//Reassigned and Redeclared 
var nama; // deklarasi nama 
console.log(nama);  // pemanggilannya

nama = "Firda AR" // menggunakana value string 
console.log(nama);  // pemanggilannya 

var nama = "Fida" //Reassigned and Redeclared 
console.log(nama);  // pemanggilannya 

//Hoisting
New = "try this task" // mengisi variable New 
console.log(New); // menampilkan variable New
var New // variable New akan diangkat keatas sebelum dieksekusi
