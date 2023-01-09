# **Final Project Bacth 1**
---
## ***Soal :*** 
### Buatlah variable array kosong seperti dibawah ini :
		let sayuran = [ ]
	a.tambahkan data pada array kosong dengan output: 
		[ 'Kangkung',
		  'Bayam',
		  'Buncis',
		  'Kubis',
		  'Timun',
		  'Seledri',
		  'Tauge' ]
	b. urutkan sesuai dengan abjad
## **Penjelasan code A dan B**

* **Code A :** 

    let sayuran = [ ]; 
    
    sayuran.unshift([ 'Kangkung', 'Bayam', 'Buncis','Kubis', 'Timun', 'Seledri', 'Tauge' ]);
        
    console.log(sayuran);

    **Penjelasan :**
    
    Code diatas untuk menambahkan data pada array menggunakan unshift. 
    Unshift disini adalah suatu Methode yang digunakan untuk menambahkan item di index pertama dalam array.

* **Code B :**

    let sayuran = [ 'Kangkung',
		  'Bayam',
		  'Buncis',
		  'Kubis',
		  'Timun',
		  'Seledri',
		  'Tauge'];
        
    sayuran.sort();

    console.log(sayuran);

    **Penjelasan :**
    
    Code diatas adalah code mengurutkan data berdasarkan abjad atau alfabet. Pada code diatas menggunakan perintah sort. Teknik penyortiran array JavaScript atau teknik JavaScript sort array dapat membantu dalam mengurutkan array Anda menurut alfabet, angka, dalam urutan menurun, dan lain sebagainya.