# **Final Project Bacth 1**
---
## Scope, Reassigned dan Redeclared, dan Hoisting

### **1. Scope**
     Adalah jangkauan kode program dimana perintah program masih bisa mengakses variabel. Jika kita mendefinisikan suatu variabel pada file PHP, maka variabel tersebut dapat diakses oleh seluruh kode program pada halaman yang sama. Sedangkan Scope di dalam JavaScript bisa dikatakan sebagai cakupan atau jangkauan program yang ditandai dengan tanda kurung kurawal atau curly brackets ({...}). Terdapat tiga jenis scope dalam javascript, yaitu global scope, local scope dan block scope.
* ***Scope Global***

    Saat kita mengeksekusi atau menjalankan kode program yang telah kita buat, javascript engine akan membuat global execution context, yaitu tempat dimana kode javascript yang di luar fungsi-fungsi javascript akan dievaluasi dan dieksekusi. Tempat evaluasi dan eksekusi kode fungsi javascript dinamakan function execution context. Jadi, secara sederhana global scope adalah ruang lingkup di luar ruang lingkup fungsi-fungsi dalam kode javascript yang kita buat.
    
    Variabel yang dideklarasikan dalam global scope biasa disebut variabel global. Variabel global dapat diakses dan dimodifikasi hampir dimana saja di dalam kode program yang kita buat. 
* ***Local Scope***

    Local scope adalah ruang lingkup dalam sebuah fungsi dalam javascript. Local scope juga sering disebut function scope. Variabel yang dideklarasikan dalam local scope hanya bisa di akses dalam scope tersebut dan tidak dapat diakses secara global atau local scope yang lain.
* ***Block Scope***
    
    Dari update ES6, terdapat dua keyword baru untuk mendeklarasikan variabel, yaitu let dan const. Let dan const ini dapat digunakan untuk mendeklarasikan variabel dalam block scope. Secara umum, block scope adalah ruang lingkup di dalam area kurung kurawal {}, seperti if statement, switch statement, for loop, while loop, dan do while loop. Variabel yang dideklarasikan dalam block scope biasa disebut block level variable.

### **2. Reassigned dan Redeclared**
    Redeclared berarti pendeklarasian variable dengan nama yang sama dalam scope yang sama. Jika kita menggunakan keyword var, maka hal ini diizinkan. Hal ini sangat berbahaya karena bisa menimbulkan bug di kemudian hari, terlebih jika terdapat lebih dari satu programmer yang mengerjakan codebase yang sama dan saling tidak aware terhadap nama variable yang digunakan masing-masing. Yang terjadi kemudian bisa ditebak, akan terjadi saling timpa variable di dalam codebase tersebut.
    Variabel var dapat di-update nilainya (reassigned) dan dapat di deklarasi ulang namanya (redeclared). 

### **3. Hoisting**
    Berbeda dengan var, yang akan “diangkat” ke bagian paling atas dalam scope dengan value “undefined”, pemanggilan variable let sebelum pendeklarasian akan menghasilkan error.
    Hoisting ini ibarat variabelnya “diangkat" atau “dipindahkan” ke atas. Maksudnya, gimana? Jika kita assign sebuah variabel var lebih dulu, JavaScript akan mendeklarasikan variabel tersebut ke atas atau mengangkatnya ke posisi atas di dalam scope. Hasilnya nggak akan error kok, tapi bakalan membuat kita bingung. Jadi, sebaiknya variabel dideklarasikan di awal sebelum di-assign. Untuk lebih jelasnya,coba perhatikan contoh di samping!
