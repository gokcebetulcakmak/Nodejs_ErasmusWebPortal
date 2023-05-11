import React, { useState, useEffect } from "react";
import { mezunTarih } from "./BasvuruFormu";
import Sidebar from "./Sidebar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function BasvuruGoruntule() {
  
  const navigate = useNavigate();
  useEffect(() => {
    var isLogin = sessionStorage.getItem("isLogin");
    if (isLogin !== "true") {
      navigate("/");
    }
  });

  const [bilgi, setBilgi] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const id = sessionStorage.getItem("id");
    const bilgiGetir = async () => {
      try {
        const response = await axios.post("http://localhost:3001/formGoster", {
          id,
        });
        if (response.status === 200) {
          setBilgi(response.data);
        }
      } catch (error) {
        setError("Kullanici bilgileri gosterilemedi.");
      }
    };
    bilgiGetir();
  }, []);

  return (
    <div className="row">
      <div className="col-md-3">
        <Sidebar />
      </div>
      <div className="home">
        <div className="row mt-3 mb-3">
          <div className="col-md-8 mx-auto">
            <form className="text-white" name="basvuruForm">
              <div>
                <h2>Başvuru Bilgileri</h2>
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
                      value={bilgi.isim}
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
                      value={bilgi.soyisim}
                    />
                  </div>
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-md-6 ">
                  <label>Cinsiyet:</label>
                  <div>
                    <input
                      className="form-control"
                      id="cinsiyet"
                      value={bilgi.cinsiyet}
                    ></input>
                  </div>
                </div>
                <div className="col-md-6 ">
                  <div className="form-group">
                    <label>Doğum Tarihi:</label>
                    <input
                      type="text"
                      id="dtarih"
                      value={bilgi.dtarih}
                      className="form-control"
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
                    value={bilgi.mail}
                  />
                </div>
                <div className="col-md-6 form-group ">
                  <label>Telefon Numarası :</label>
                  <input
                    type="text"
                    className="form-control"
                    id="telnum"
                    value={bilgi.telnum}
                  />
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-md-6">
                  <label>Milliyet : </label>
                  <input
                    className="form-control"
                    id="milliyet"
                    value={bilgi.milliyet}
                  ></input>
                </div>
                <div className="col-md-6">
                  <div id="tcKimlikNo" className="form-group">
                    <label htmlFor="tc">TC/Pasaport No:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="tc"
                      value={bilgi.tc || bilgi.pasaport}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="row mt-2">
                <div className="col-md-6 ">
                  <label htmlFor="engel">Engel Durumu : </label>
                  <div>
                    <input
                      className="form-control"
                      id="engeldurum"
                      value={bilgi.engeldurum}
                    ></input>
                  </div>
                </div>
                <div className="col-md-6 " id="aciklamaDiv">
                  <label htmlFor="aciklama">Açıklama</label>
                  <input
                    type="text"
                    className="form-control"
                    id="engelaciklama"
                    value={bilgi.engelaciklama}
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
                    value={bilgi.universite}
                  />
                </div>
                <div className="col-md-6">
                  <label>Fakülte : </label>
                  <input
                    type="text"
                    className="form-control"
                    id="fakulte"
                    value={bilgi.fakulte}
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
                    value={bilgi.bolum}
                  />
                </div>
                <div className="col-md-6">
                  <label>Ortalama : </label>
                  <input
                    type="number"
                    className="form-control"
                    id="ortalama"
                    value={bilgi.ortalama}
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
                      value={bilgi.mezundurum}
                      onChange={() => mezunTarih()}
                      required
                    >
                      <option>Seçiniz...</option>
                      <option value="evet">Mezun Oldu</option>
                      <option value="hayır">Devam Ediyor</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6 " id="mtarih">
                  <label htmlFor="mtarih">Mezuniyet Tarihi : </label>
                  <input
                    type="text"
                    id="mezuntarih"
                    value={bilgi.mezuntarih}
                    className="form-control"
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
                    value={bilgi.ulke}
                  />
                </div>
                <div className="col-md-6">
                  <label>Şehir : </label>
                  <input
                    name="il"
                    id="il"
                    className="form-control"
                    value={bilgi.il}
                  />
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-md-6">
                  <label>İlçe: </label>
                  <input
                    name="ilce"
                    id="ilce"
                    value={bilgi.ilce}
                    className="form-control"
                  />
                </div>
                <div className="col-md-6">
                  <label>Mahalle: </label>
                  <input
                    type="text"
                    id="mahalle"
                    value={bilgi.mahalle}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="row mt-2">
                <div>
                  <label>Açık Adres: </label>
                  <input
                    type="text"
                    id="acikadres"
                    value={bilgi.acikadres}
                    className="form-control"
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
                      type="text"
                      className="form-control-file "
                      id="ozgecmis"
                      value={bilgi.ozgecmis}
                    />
                  </div>
                </div>
                <div className="form-group mt-2 row">
                  <div className="col-4">
                    <label>Niyet Mektubu : </label>
                  </div>
                  <div className="col-4">
                    <input
                      type="text"
                      className="form-control-file"
                      id="niyetm"
                      value={bilgi.niyetm}
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
                      type="text"
                      className="form-control-file"
                      id="ikametgah"
                      value={bilgi.ikametgah}
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
                      type="text"
                      className="form-control-file"
                      id="pasaport"
                      value={bilgi.pasaportb}
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
                      type="text"
                      className="form-control-file"
                      id="diploma"
                      value={bilgi.diploma}
                    />
                  </div>
                </div>
                <div className="form-group mt-2 row">
                  <div className="col-4">
                    {" "}
                    <label>İngilizce Yeterlilik : </label>
                  </div>
                  <div className="col-4 mb-4">
                    <input
                      type="text"
                      className="form-control-file"
                      id="ingilizcey"
                      value={bilgi.ingilizce}
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
