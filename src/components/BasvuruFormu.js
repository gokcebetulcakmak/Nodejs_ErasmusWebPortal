import React, { useState,useEffect } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const engelAciklama = () => {
  var engeldurum = document.getElementById("engel").value;
  var aciklamaDiv = document.getElementById("aciklamaDiv");
  if (engeldurum == "Var") {
    aciklamaDiv.style.display = "block";
  } else {
    aciklamaDiv.style.display = "none";
  }
};
export function mezunTarih() {
  var mezundurum = document.getElementById("mezun").value;
  var aciklamaDiv = document.getElementById("mtarih");
  if (mezundurum == "evet") {
    aciklamaDiv.style.display = "block";
  } else {
    aciklamaDiv.style.display = "none";
  }
}
const milliyetDegistir = () => {
  var milliyet = document.getElementById("milliyet").value;
  if (milliyet == "Türk") {
    document.getElementById("tcKimlikNo").style.display = "block";
    document.getElementById("pasaportNo").style.display = "none";
  } else if (milliyet == "Yabancı") {
    document.getElementById("pasaportNo").style.display = "block";
    document.getElementById("tcKimlikNo").style.display = "none";
  } else {
    document.getElementById("pasaportNo").style.display = "none";
    document.getElementById("tcKimlikNo").style.display = "none";
  }
};

export default function BasvuruFormu() {
  const navigate = useNavigate();
  useEffect(() => {
    var isLogin = sessionStorage.getItem("isLogin");
    if (isLogin !== "true") {
      navigate("/");
    }
  });

  const [isim, setIsim] = useState("");
  const [soyisim, setSoyisim] = useState("");
  const [cinsiyet, setCinsiyet] = useState("");
  const [dtarih, setDtarih] = useState("");
  const [mail, setMail] = useState("");
  const [telnum, setTelnum] = useState("");
  const [milliyet, setMilliyet] = useState("");
  const [tc, setTc] = useState("");
  const [pasaport, setPasaport] = useState("");
  const [engeldurum, setEngeldurum] = useState("");
  const [engelaciklama, setEngelaciklama] = useState("");
  const [universite, setUniversite] = useState("");
  const [fakulte, setFakulte] = useState("");
  const [bolum, setBolum] = useState("");
  const [ortalama, setOrtalama] = useState("");
  const [mezundurum, setMezundurum] = useState("");
  const [mezuntarih, setMezuntarih] = useState("");
  const [ulke, setUlke] = useState("");
  const [il, setIl] = useState("");
  const [ilce, setIlce] = useState("");
  const [mahalle, setMahalle] = useState("");
  const [acikadres, setAcikadres] = useState("");
  const [ozgecmis, setOzgecmis] = useState("");
  const [niyetm, setNiyetm] = useState("");
  const [ikametgah, setIkametgah] = useState("");
  const [pasaportb, setPasaportb] = useState("");
  const [diploma, setDiploma] = useState("");
  const [ingilizce, setIngilizce] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [basvuru_id, setBasvuruId] = useState("");

  const id = sessionStorage.getItem("id");

  const basvuruGonder = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/formGonder", {
        id,
        basvuru_id,
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
      });
      console.log(response);
      if (response.status === 200) {
        setIsim("");
        setSoyisim("");
        setCinsiyet("");
        setDtarih("");
        setMail("");
        setTelnum("");
        setMilliyet("");
        setTc("");
        setPasaport("");
        setEngeldurum("");
        setEngelaciklama("");
        setUniversite("");
        setFakulte("");
        setBolum("");
        setOrtalama("");
        setMezundurum("");
        setMezuntarih("");
        setUlke("");
        setIl("");
        setIlce("");
        setMahalle("");
        setAcikadres("");
        setTc("");
        setPasaport("");
        setOzgecmis("");
        setIkametgah("");
        setPasaportb("");
        setDiploma("");
        setNiyetm("");
        setIngilizce("");
        setSuccess("Başvurunuz göderilmiştir.");
      } else {
        setError(response.data.error);
      }
    } catch (err) {
      setError("Veritabani baglantisinda hata olustu. ", err);
    }
  };
  return (
    <div className="row">
      <div className="col-md-3">
        <Sidebar />
      </div>
      <div className="home ">
        <div className="row mt-3 mb-3">
          <div className="col-md-8 mx-auto ">
            <form
              className="text-white"
              name="basvuruForm"
              onSubmit={basvuruGonder}
            >
              <div>
                <h2>Başvuru Formu</h2>
              </div>
              <div>
                <h4>Kişisel Bilgiler</h4>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>İsim : </label>
                    <input
                      type="text"
                      className="form-control"
                      id="isim"
                      value={isim}
                      onChange={(e) => setIsim(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Soyisim : </label>
                    <input
                      type="text"
                      className="form-control"
                      id="soyisim"
                      value={soyisim}
                      onChange={(e) => setSoyisim(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-md-6 ">
                  <label>Cinsiyet:</label>
                  <div>
                    <select
                      className="form-control"
                      id="cinsiyet"
                      value={cinsiyet}
                      onChange={(e) => setCinsiyet(e.target.value)}
                      required
                    >
                      <option>Seçiniz...</option>
                      <option value="K">Kadın</option>
                      <option value="E">Erkek</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6 ">
                  <div className="form-group">
                    <label>Doğum Tarihi:</label>
                    <input
                      type="date"
                      id="dtarih"
                      value={dtarih}
                      className="form-control"
                      onChange={(e) => setDtarih(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="row mt-2">
                <div className="col-md-6 form-group ">
                  <label htmlFor="exampleInputEmail1">Email :</label>
                  <input
                    type="email"
                    className="form-control"
                    id="mail"
                    value={mail}
                    onChange={(e) => setMail(e.target.value)}
                    required
                  />
                </div>
                <div className="col-md-6 form-group ">
                  <label>Telefon Numarası :</label>
                  <input
                    type="text"
                    className="form-control"
                    id="telnum"
                    value={telnum}
                    onChange={(e) => setTelnum(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-md-6">
                  <label>Milliyet : </label>
                  <select
                    className="form-control"
                    id="milliyet"
                    value={milliyet}
                    onChange={(e) => {
                      setMilliyet(e.target.value);
                      milliyetDegistir();
                    }}
                  >
                    <option value="">Seçiniz...</option>
                    <option value="Türk">Türk</option>
                    <option value="Yabancı">Yabancı Uyruklu</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <div
                    id="tcKimlikNo"
                    className="form-group"
                    style={{ display: "none" }}
                  >
                    <label htmlFor="tc">TC Kimlik No:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="tc"
                      value={tc}
                      onChange={(e) => setTc(e.target.value)}
                      required
                    />
                  </div>
                  <div
                    id="pasaportNo"
                    className="form-group"
                    style={{ display: "none" }}
                  >
                    <label htmlFor="pasaport">Pasaport No:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="pasaport"
                      value={pasaport}
                      onChange={(e) => setPasaport(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="row mt-2">
                <div className="col-md-6 ">
                  <label htmlFor="engel">Engel Durumu : </label>

                  <div>
                    <select
                      className="form-control"
                      id="engel"
                      value={engeldurum}
                      onChange={(e) => {
                        engelAciklama();
                        setEngeldurum(e.target.value);
                      }}
                      required
                    >
                      <option>Seçiniz...</option>
                      <option value="Var">Engeli Var</option>
                      <option value="Yok">Engeli Yok</option>
                    </select>
                  </div>
                </div>
                <div
                  className="col-md-6 "
                  id="aciklamaDiv"
                  style={{ display: "none" }}
                >
                  <label htmlFor="aciklama">Açıklama</label>
                  <input
                    type="text"
                    className="form-control"
                    id="engelaciklama"
                    value={engelaciklama}
                    onChange={(e) => setEngelaciklama(e.target.value)}
                  />
                </div>
              </div>
              <div className="row mt-3">
                <h4>Eğitim Bilgileri</h4>
              </div>

              <div className="row mt-2">
                <div className="col-md-6">
                  <label>Üniversite : </label>
                  <input
                    type="text"
                    className="form-control"
                    id="universite"
                    value={universite}
                    onChange={(e) => setUniversite(e.target.value)}
                  />
                </div>
                <div className="col-md-6">
                  <label>Fakülte : </label>
                  <input
                    type="text"
                    className="form-control"
                    id="fakulte"
                    value={fakulte}
                    onChange={(e) => setFakulte(e.target.value)}
                  />
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-md-6">
                  <label>Bölüm : </label>
                  <input
                    type="text"
                    className="form-control"
                    id="bolum"
                    value={bolum}
                    onChange={(e) => setBolum(e.target.value)}
                  />
                </div>
                <div className="col-md-6">
                  <label>Ortalama : </label>
                  <input
                    type="number"
                    className="form-control"
                    id="ortalama"
                    value={ortalama}
                    onChange={(e) => setOrtalama(e.target.value)}
                  />
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-md-6 ">
                  <label htmlFor="mezun">Mezuniyet Durumu : </label>
                  <div>
                    <select
                      className="form-control"
                      id="mezun"
                      value={mezundurum}
                      onChange={(e) => {
                        mezunTarih();
                        setMezundurum(e.target.value);
                      }}
                      required
                    >
                      <option>Seçiniz...</option>
                      <option value="evet">Mezun Oldu</option>
                      <option value="hayır">Devam Ediyor</option>
                    </select>
                  </div>
                </div>
                <div
                  className="col-md-6 "
                  id="mtarih"
                  style={{ display: "none" }}
                >
                  <label htmlFor="mtarih">Mezuniyet Tarihi : </label>
                  <input
                    type="date"
                    value={mezuntarih}
                    id="mezuntarih"
                    className="form-control"
                    onChange={(e) => setMezuntarih(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="row mt-3">
                <h4>Adres Bilgileri</h4>
              </div>
              <div className="row mt-2">
                <div className="col-md-6">
                  <label>Ülke : </label>
                  <input
                    type="text"
                    className="form-control"
                    id="ulke"
                    value={ulke}
                    onChange={(e) => setUlke(e.target.value)}
                  />
                </div>
                <div className="col-md-6">
                  <label>Şehir : </label>
                  <input
                    name="il"
                    id="il"
                    className="form-control"
                    value={il}
                    onChange={(e) => setIl(e.target.value)}
                  />
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-md-6">
                  <label>İlçe: </label>
                  <input
                    name="ilce"
                    id="ilce"
                    value={ilce}
                    className="form-control"
                    onChange={(e) => setIlce(e.target.value)}
                  />
                </div>
                <div className="col-md-6">
                  <label>Mahalle: </label>
                  <input
                    type="text"
                    id="mahalle"
                    value={mahalle}
                    className="form-control"
                    onChange={(e) => setMahalle(e.target.value)}
                  />
                </div>
              </div>
              <div className="row mt-2">
                <div>
                  <label>Açık Adres: </label>
                  <input
                    type="text"
                    id="acikadres"
                    value={acikadres}
                    className="form-control"
                    onChange={(e) => setAcikadres(e.target.value)}
                  />
                </div>
              </div>
              <div className="row mt-3">
                <h4>Dökümanlar</h4>
                <p>Lütfen istenilen dökümanları yükleyiniz.</p>
                <div className="form-group row">
                  <div className="col-4">
                    <label>Özgeçmiş : </label>
                  </div>
                  <div className="col-4">
                    <input
                      type="file"
                      value={ozgecmis}
                      className="form-control-file "
                      id="ozgecmis"
                      onChange={(e) => setOzgecmis(e.target.value)}
                    />
                  </div>
                </div>
                <div className="form-group mt-2 row">
                  <div className="col-4">
                    <label>Niyet Mektubu : </label>
                  </div>
                  <div className="col-4">
                    <input
                      type="file"
                      value={niyetm}
                      className="form-control-file"
                      id="niyetm"
                      onChange={(e) => setNiyetm(e.target.value)}
                    />
                  </div>
                </div>
                <div className="form-group mt-2 row">
                  <div className="col-4">
                    {" "}
                    <label>İkametgah : </label>
                  </div>
                  <div className="col-4">
                    <input
                      type="file"
                      value={ikametgah}
                      className="form-control-file"
                      id="ikametgah"
                      onChange={(e) => setIkametgah(e.target.value)}
                    />
                  </div>
                </div>
                <div className="form-group mt-2 row">
                  <div className="col-4">
                    {" "}
                    <label>Pasaport : </label>
                  </div>
                  <div className="col-4">
                    <input
                      type="file"
                      value={pasaportb}
                      className="form-control-file"
                      id="pasaportb"
                      onChange={(e) => setPasaportb(e.target.value)}
                    />
                  </div>
                </div>
                <div className="form-group mt-2 row">
                  <div className="col-4">
                    {" "}
                    <label>Diploma : </label>
                  </div>
                  <div className="col-4">
                    <input
                      type="file"
                      value={diploma}
                      className="form-control-file"
                      id="diploma"
                      onChange={(e) => setDiploma(e.target.value)}
                    />
                  </div>
                </div>
                <div className="form-group mt-2 row">
                  <div className="col-4">
                    {" "}
                    <label>İngilizce Yeterlilik : </label>
                  </div>
                  <div className="col-4">
                    <input
                      type="file"
                      value={ingilizce}
                      className="form-control-file"
                      id="ingilizce"
                      onChange={(e) => setIngilizce(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="row mt-3 mb-4">
                <div className="col-md-6 text-end">
                  <button type="submit" className="btn btn-primary">
                    Başvur
                  </button>
                </div>
                <div className="col-md-6">
                  <button type="reset" className="btn btn-primary">
                    Sıfırla
                  </button>
                </div>
              </div>
            </form>
            {error && <p style={{ color: "red" }}> {error} </p>}
            {success && (
              <p style={{ color: "green" }} className="mb-4">
                {" "}
                {success}{" "}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
