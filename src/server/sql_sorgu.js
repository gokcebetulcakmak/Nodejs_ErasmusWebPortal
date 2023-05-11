var mysql = require("mysql");

//! Database Oluşturma Komutu

// const con = mysql.createConnection({
//     host: "localhost",
//     user:"root",
//     password:"",
// });
// con.connect(function(err){
//     if (err) throw err;
//     console.log("Baglandi!");
//     con.query("CREATE DATABASE erasmusdb", function(err, result){
//         if(err) throw err;
//         console.log("Veritabanı olusturuldu.")
//     })
// })

//! Tabloları Oluşturma Komutu

// const con = mysql.createConnection({
//     host: "localhost",
//     user:"root",
//     password:"",
//     database:"erasmusdb"

// });

// con.connect(function (err) {
//     if (err) throw err;
//     console.log("Baglandi!");
//     var kullanici="CREATE TABLE Kullanici_Giris(Kisi_ID TINYINT AUTO_INCREMENT PRIMARY KEY  NOT NULL, E_Mail VARCHAR(50) Not NULL, Sifre VARCHAR(30) NOT NULL, isLogin TINYINT NOT NULL);"
//     var kisiselB = "CREATE TABLE Kisisel_Bilgiler(Basvuru_ID TINYINT AUTO_INCREMENT PRIMARY KEY NOT NULL,Basvuran_ID TINYINT Not NULL, Ad VARCHAR(20) NOT NULL, Soyad VARCHAR(20) NOT NULL, Cinsiyet CHAR(1) NOT NULL,DogumTarihi DATE NOT NULL ,Mail VARCHAR(40) NOT NULL, Tel_No VARCHAR(15) NOT NULL,Milliyet VARCHAR(15) NOT NULL, Tc_No  VARCHAR(11), Pasaport_No VARCHAR(11) );"
//     var egitimT="CREATE TABLE Egitim (Egitim_ID TINYINT AUTO_INCREMENT PRIMARY KEY NOT NULL, Universite VARCHAR(35) NOT NULL, Fakulte VARCHAR(35) NOT NULL,  Bolum VARCHAR(30) NOT NULL, Mezuniyet_Durumu VARCHAR(15) NOT NULL, Mezuniyet_Tarih DATE,Ortalama FLOAT NOT NULL,Basvuru_ID TINYINT, FOREIGN KEY (Basvuru_ID) REFERENCES Kisisel_Bilgiler(Basvuru_ID),Basvuran_ID TINYINT);"
//     var adresT="CREATE TABLE Adres( Adres_ID TINYINT AUTO_INCREMENT PRIMARY KEY NOT NULL,Ulke VARCHAR(30) NOT NULL,Sehir VARCHAR(30) NOT NULL, Ilce VARCHAR(30) NOT NULL,  Mahalle VARCHAR(30) NOT NULL, Adres_Aciklama VARCHAR(150) NOT NULL, Basvuru_ID TINYINT, FOREIGN KEY (Basvuru_ID) REFERENCES Kisisel_Bilgiler(Basvuru_ID), Basvuran_ID TINYINT );"
//     var engelliT ="CREATE TABLE Engelli( Engelli_ID TINYINT AUTO_INCREMENT PRIMARY KEY NOT NULL,Engel_Durumu VARCHAR(11) NOT NULL,Engel_Aciklama VARCHAR(100),Basvuru_ID TINYINT, FOREIGN KEY (Basvuru_ID) REFERENCES Kisisel_Bilgiler(Basvuru_ID),Basvuran_ID TINYINT );"
//  var dokuman="CREATE TABLE Dokuman( Dokuman_ID TINYINT AUTO_INCREMENT PRIMARY KEY NOT NULL,Ozgecmis VARCHAR(50) NOT NULL, Niyet_Mektubu VARCHAR(50) NOT NULL,Ikametgah VARCHAR(50) NOT NULL,Pasaport VARCHAR(50) NOT NULL,Diploma VARCHAR(50) NOT NULL,Ingilizce_Yeterlilik VARCHAR(50) NOT NULL, Yuklenme_Tarihi DATE NOT NULL, Basvuru_ID TINYINT, FOREIGN KEY (Basvuru_ID) REFERENCES Kisisel_Bilgiler(Basvuru_ID),Basvuran_ID TINYINT);"

// con.query(kullanici,function(err,result){
//         if(err) throw err;
//         console.log("Kullanıcı Giriş Tablosu oluşturuldu.");
// });
// con.query(kisiselB,function(err,result){
//     if(err) throw err;
//     console.log("Kisisel Bilgiler Tablosu oluşturuldu.");
// });
// con.query(egitimT,function(err,result){
//     if(err) throw err;
//     console.log("Eğitim Tablosu oluşturuldu.");
// });
// con.query(adresT,function(err,result){
//     if(err) throw err;
//     console.log("Adres Tablosu oluşturuldu.");
// });
// con.query(dokuman,function(err,result){
//     if(err) throw err;
//     console.log("Döküman Tablosu oluşturuldu.");
// });
// con.query(engelliT,function(err,result){
//     if(err) throw err;
//     console.log("Engelli Tablosu oluşturuldu.");
// });

// })
