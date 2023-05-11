import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import background from "../img/background1.jpg";
import axios from "axios";

export default function Kayit() {
  const [email, setEmail] = useState("");
  const [sifre1, setSifre] = useState("");
  const [sifreTekrar, setSifreTekrar] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (sifre1 !== sifreTekrar) {
      setError("Şifreler Eşleşmiyor");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3001/kayit", {
        email,
        sifre1,
      });
      if (response.status === 200) {
        setSuccess("Kayit Başarili");
        setEmail("");
        setSifre("");
        setSifreTekrar("");
        setError();
        navigate("/");
      } else {
        setError("Kayit oluşturulurken bir hata oluştu.");
      }
    } catch (err) {
      setError("Veritabanına bağlanırken bir hata oluştu ");
    }
  };
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        height: "100vh",
        opacity: "0.9",
        backgroundSize: "cover",
      }}
    >
      <div className="form-box mb-3 mt-3">
        <div className="form-value">
          <form onSubmit={handleSubmit}>
            <h2>Hesap Oluşturun</h2>
            <div className="inputbox">
              <ion-icon name="lock-closed-outline"></ion-icon>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label>Email</label>
            </div>
            <div className="inputbox">
              <ion-icon name="lock-closed-outline"></ion-icon>
              <input
                type="password"
                id="sifre"
                value={sifre1}
                onChange={(e) => setSifre(e.target.value)}
                minLength="6"
                required
              />
              <label>Şifrenizi giriniz :</label>
            </div>
            <div className="inputbox">
              <ion-icon name="lock-closed-outline"></ion-icon>
              <input
                type="password"
                id="reSifre"
                value={sifreTekrar}
                onChange={(e) => setSifreTekrar(e.target.value)}
                minLength="6"
                required
              />
              <label>Şifrenizi tekrar giriniz :</label>
            </div>
            <button className="btn2" type="submit">
              Kayıt Ol
            </button>
          </form>
          {error && <p style={{ color: "red" }}> {error} </p>}
          {success && <p style={{ color: "green" }}> {success} </p>}
          <p className="text-white px-4 mt-2">
            Hesabınız var mı?{" "}
            <Link to="/" className="px-2 text-white mt-2">
              Giriş Yap
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
