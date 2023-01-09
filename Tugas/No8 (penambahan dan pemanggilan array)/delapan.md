# **Final Project Bacth 1**
---

## ***Soal :***
 Ambilah tiap index dalam kalimat string : 
 
 "I am going to be React JS Developer". 
 
 Dengan output :

	First word: I 
	Second word: am 
	Third word: going 
	Fourth word: to 
	Fifth word: be 
	Sixth word: React 
	Seventh word: JS
	Eighth word: Developer

## ***Code :***
let str = 'I am going to be React JS Developer';

console.log("First word : " + str[0]);

console.log("Second word : " + str.substring(2,4));

console.log("Third word : " + str.substring(5,11));

console.log("Fourth word : " + str.substring(11,13));

console.log("Fifth word : " + str.substring(13,17));

console.log("Sixth word : " + str.substring(17,23));

console.log("Seventh word : " + str.substring(23,25));

console.log("Eighth word : " + str.substring(25,35));

## ***Note :***

Subsstring adalah sebuah fungsi untuk memotong string pada JavaScript, atau dengan kata lain Metode substring() mengambil bagian tertentu dari sebuah string. 

Selama proses ekstraksi ini, elemen asli tidak akan dimodifikasi. Sebagai gantinya, JavaScript subString akan mengembalikan string baru, yang berisi karakter yang diambil dari string asli.