const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "erasmusdb",
});

connection.connect((err) => {
  if (err) {
    console.error("Veritabanina baglanirken hata oluştu", err);
    return;
  }

  console.log("Veritabanina baglanildi.");
});
app.post("/kayit", (req, res) => {
  const { email, sifre1 } = req.body;
  const query = "INSERT INTO kullanici_giris (e_mail,sifre) VALUE (?,?)";
  connection.query(query, [email, sifre1], (err, result) => {
    if (err) {
      console.error("Veritabanına bilgi girerken hata: ", err);
      res.status(500).send({ error: "Kayit oluşturulurken bir hata oluştu." });
      return;
    }
    console.log(result);
    res.status(200).send({ message: "Kayit başarılı!" });
  });
});

app.post("/", (req, res) => {
  const { email, sifre1 } = req.body;
  const query = "SELECT * FROM kullanici_giris WHERE e_mail=? AND sifre=?";
  connection.query(query, [email, sifre1], (err, result) => {
    if (err) {
      console.error("Bilgilerin kontrolunde hata olustu");
      res.status(500).send({ error: "Bilgilerin kontrolunde hata olustu." });

      return;
    }
    if (result.length > 0) {
      const user_id = result[0].Kisi_ID;

      isLoginQuery = "UPDATE kullanici_giris SET isLogin = 1 WHERE Kisi_ID=?";
      connection.query(isLoginQuery, user_id), (err, result);
      if (err) {
        console.error("Login bilgisi güncellenirken hata oluştu");
        res.status(500).send({ error: "Login güncellenemedi" });
      }

      res.status(200).send({ message: "1", id: user_id });
    } else {
      res.status(200).send({ message: "0" });
    }
  });
});
app.post("/signout", (req, res) => {
  const { id } = req.body;
  const query = "UPDATE kullanici_giris SET isLogin = 0 WHERE Kisi_ID=?";
  connection.query(query, [id], (err, result) => {
    if (err) {
      console.error("isLogin guncellemesinde hata olustu", err);
      res.status(500).send({ error: "Bilgilerin kontrolunde hata olustu." });
      return;
    }
    res.status(200).send({ message: "Kullanici cikisi guncellendi" });
  });
});
app.post("/formGonder", (req, res) => {
  const {
    id,
    isim,
    soyisim,
    cinsiyet,
    dtarih,
    mail,
    telnum,
    milliyet,
    tc,
    pasaport,
    engeldurum,
    engelaciklama,
    universite,
    fakulte,
    bolum,
    ortalama,
    mezundurum,
    mezuntarih,
    ulke,
    il,
    ilce,
    mahalle,
    acikadres,
    ozgecmis,
    niyetm,
    ikametgah,
    pasaportb,
    diploma,
    ingilizce,
  } = req.body;

  const kontrolQuery = "SELECT * FROM kisisel_bilgiler WHERE Basvuran_ID = ?";

  connection.query(kontrolQuery, [id], (err, result) => {
    console.log(result);

    if (result.length > 0) {
      res
        .status(201)
        .send({ error: "Aynı hesaptan yalnizca bir basvuru yapilabilir." });
      return;
    } else {
      const kisiselB =
        "INSERT INTO Kisisel_Bilgiler (Basvuran_ID, Ad, Soyad, Cinsiyet, DogumTarihi, Mail, Tel_No, Milliyet, Tc_No, Pasaport_No) VALUES(?,?,?,?,?,?,?,?,?,?)";

      connection.query(
        kisiselB,
        [
          id,
          isim,
          soyisim,
          cinsiyet,
          dtarih,
          mail,
          telnum,
          milliyet,
          tc,
          pasaport,
        ],
        (err, result) => {
          if (err) {
            console.error("Veritabanina ekleme yapilirken hata olustu. ", err);
            res
              .status(500)
              .send({ error: "Veritabanina ekleme yapilirken hata olustu." });
            return;
          }
          const basvuru_id = result.insertId; // otomatik artan basvuru_id'yi alır
          const yuklenme_tarihi = new Date().toISOString();

          res
            .status(200)
            .send({ message: "Kişisel Bilgiler basariyla kaydedildi." });
          const egitim =
            "INSERT INTO Egitim (Universite, Fakulte, Bolum, Mezuniyet_Durumu, Mezuniyet_Tarih, Ortalama, Basvuru_ID,Basvuran_ID) VALUES(?,?,?,?,?,?,?,?)";
          const adres =
            "INSERT INTO Adres (Ulke, Sehir, Ilce,  Mahalle, Adres_Aciklama, Basvuru_ID, Basvuran_ID) VALUES(?,?,?,?,?,?,?)";
          const engelli =
            "INSERT INTO Engelli (Engel_Durumu, Engel_Aciklama, Basvuru_ID,Basvuran_ID) VALUES(?,?,?,?)";

          const dokuman =
            "INSERT INTO Dokuman (Ozgecmis, Niyet_Mektubu, Ikametgah, Pasaport, Diploma, Ingilizce_Yeterlilik, Yuklenme_Tarihi, Basvuru_ID, Basvuran_ID) VALUES(?,?,?,?,?,?,?,?,?)";

          connection.query(egitim, [
            universite,
            fakulte,
            bolum,
            mezundurum,
            mezuntarih,
            ortalama,
            basvuru_id,
            id,
          ]);
          connection.query(adres, [
            ulke,
            il,
            ilce,
            mahalle,
            acikadres,
            basvuru_id,
            id,
          ]);
          connection.query(engelli, [
            engeldurum,
            engelaciklama,
            basvuru_id,
            id,
          ]);
          connection.query(dokuman, [
            ozgecmis,
            niyetm,
            ikametgah,
            pasaportb,
            diploma,
            ingilizce,
            yuklenme_tarihi,
            basvuru_id,
            id,
          ]);
        }
      );
    }
  });
});

app.post("/formGoster", (req, res) => {
  const user_id = req.body.id;

  const query =
    "SELECT * FROM kisisel_bilgiler kb JOIN adres a ON kb.Basvuran_ID = a.Basvuran_ID LEFT JOIN egitim e ON kb.Basvuran_ID = e.Basvuran_ID LEFT JOIN engelli eg ON kb.Basvuran_ID = eg.Basvuran_ID LEFT JOIN dokuman d ON kb.Basvuran_ID = d.Basvuran_ID WHERE kb.Basvuran_ID = ?";

  connection.query(query, [user_id], (err, result) => {

    if (err) {
      console.error("Veritabanindan bilgi alinirken hata olustu. ", err);
      res
        .status(500)
        .send({ error: "Veritabanindan bilgi alinirken hata olustu." });
      return;
    }
    if (result.length === 0) {
      res.status(200).send({ message: "Basvuru Bulunamadi." });
      return;
    }
    
    const dogumtarih = result[0].DogumTarihi;
    // Tarihi dd/mm/yyyy formatına dönüştürme
    const dogumdate = new Date(dogumtarih);
    const formattedBirthDate = `${dogumdate.getDate()}/${dogumdate.getMonth() + 1}/${dogumdate.getFullYear()}`;

    const mezuniyet = result[0].Mezuniyet_Tarih;
    // Tarihi dd/mm/yyyy formatına dönüştürme
    const mezundate = new Date(mezuniyet);
    const formattedMezunDate = `${mezundate.getDate()}/${mezundate.getMonth() + 1}/${mezundate.getFullYear()}`;

    res.status(200).send({
      isim: result[0].Ad,
      soyisim: result[0].Soyad,
      cinsiyet: result[0].Cinsiyet,
      dtarih: formattedBirthDate,
      mail: result[0].Mail,
      telnum: result[0].Tel_No,
      milliyet: result[0].Milliyet,
      tc: result[0].Tc_No,
      pasaport: result[0].Pasaport_No,
      engeldurum: result[0].Engel_Durumu,
      engelaciklama: result[0].Engel_Aciklama,
      universite: result[0].Universite,
      fakulte: result[0].Fakulte,
      bolum: result[0].Bolum,
      ortalama: result[0].Ortalama,
      mezundurum: result[0].Mezuniyet_Durumu,
      mezuntarih: formattedMezunDate,
      ulke: result[0].Ulke,
      il: result[0].Sehir,
      ilce: result[0].Ilce,
      mahalle: result[0].Mahalle,
      acikadres: result[0].Adres_Aciklama,
      ozgecmis: result[0].Ozgecmis,
      niyetm: result[0].Niyet_Mektubu,
      ikametgah: result[0].Ikametgah,
      pasaportb: result[0].Pasaport,
      diploma: result[0].Diploma,
      ingilizce: result[0].Ingilizce_Yeterlilik,
    });
  });
});

app.post("/sifreDegistir", (req, res) => {
  const { id, newPassword } = req.body;

  const updateQuery = "UPDATE kullanici_giris SET sifre = ? WHERE Kisi_ID = ?";
  connection.query(updateQuery, [newPassword, id], (err, result) => {
    if (err) {
      console.error("Veritabanında güncelleme yaparken hata: ", err);
      res.status(500).send({ error: "İşlem gerçekleştirilemedi." });
      return;
    }
    res.status(200).send({ message: "Şifre başarıyla güncellendi." });
  });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server ${PORT} üzerinde dinleniyor.`);
});
