# **Final Project Bacth 1**
---
## **Menghilangkan tanda seru (!) pada kalimat "Hello Word"** 

### ***soal :*** 
Hilangkan tanda seru pada string  pada kalimat dibawah ini : 

let kalimat = "Hello! Wo!rld!"

### ***Code :***
function remove (x){

    let kalimat = x.split('!')
    return kalimat.join('');
};

console.log(remove('Hello! Wo!rld!'))

### ***Penjelasan :***
Pada code diatas untuk menghilangkan tanda seru (!) pada kalimat string hello word diatas menggunakan *function remove.* Metode remove() menghapus elemen (atau simpul) dari dokumen. 
Pada code diatas juga ada perintah *split*. Perintah split adalah perintah yang digunakan untuk membagi string menjadi array substring dan mengembalikan array baru tanpa mengubah string asli.

***Note :***

* The element or node is removed from the Document Object Model (the DOM).

* The split() method doesn't modify the original string.