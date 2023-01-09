# **Final Project Bacth 1**
---

## ***Soal :***
Buatlah sebuah function tambahDataFilm yang menambahkan object ke array. Dengan menampilkan output sebagai berikut :

	[
		{Judul: "Infinity War, durasi: "2 Jam", genre: "Action", Tahun: "2019"}
		{Judul: "End Game", durasi: "3 Jam", genre: "Action", Tahun: "2019"}
		{Judul: "Captain Marvel", durasi: "2 Jam", genre: "Action", Tahun: "2018"}
		{Judul: "Doctor Strange," durasi: "2 Jam", genre: "Action", Tahun: "2018"}
		{Judul: "Iron Man 1," durasi: "2 Jam", genre: "Action", Tahun: "2008"}
	]

## ***code :***
function tambahdatafilm(judul, durasi, genre, tahun){

    return console.log("judul : " +judul+" durasi :" +durasi+" genre : " +genre+"tahun : " +tahun);
  }

  tambahdatafilm("Infinity_War "," 2 jam ","action ","2019 ")

  tambahdatafilm("End Game "," 3 jam ","action ","2019 ")

  tambahdatafilm("Captain Marvel "," 2 jam ","action ","2018 ")

  tambahdatafilm("Doctor Strange "," 2 jam ","action ","2018 ")

  tambahdatafilm("Iron Man 1 "," 2 jam ","action ","2008 ")


## ***Penjelasan :***
function tambahdatafilm(judul, durasi, genre, tahun){ 
    
    -> buat terlebih dulu function tambahdatafilm yang berisikan judul, durasi, genre, tahun yang dimna sesuai dengan objek yang mau ditambahkan dalam arraynya.

return console.log("judul : " +judul+" durasi :" +durasi+" genre : " +genre+"tahun : " +tahun); 

    -> memanggil function yang dibuat dengan retrunt console.log("...") lalu isikan sesuai dengan urutan objek yang ingin ditambahkan dalam bentuk arraynyaa. ("judul : " +judul+" durasi :" +durasi+" genre : " +genre+"tahun : " +tahun); misalkan urutan objek yang mau di tambahkan itu seperti contoh di atas ini.


}

tambahdatafilm("Infinity_War "," 2 jam ","action ","2019 ")
tambahdatafilm("End Game "," 3 jam ","action ","2019 ")
tambahdatafilm("Captain Marvel "," 2 jam ","action ","2018 ")
tambahdatafilm("Doctor Strange "," 2 jam ","action ","2018 ")
tambahdatafilm("Iron Man 1 "," 2 jam ","action ","2008 ")

    -> penambahan ojek ke arraynya dapat dilakukan seperti contoh diatas