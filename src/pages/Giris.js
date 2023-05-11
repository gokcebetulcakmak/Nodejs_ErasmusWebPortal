import React, { useState } from "react";
import "./Giris.css";
import background from "../img/background1.jpg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Giris() {
  const [email, setEmail] = useState("");
  const [sifre1, setSifre] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/", {
        email,
        sifre1,
      });

      console.log(response);
      if (response.status === 200) {
        if (response.data.message === "1") {
          sessionStorage.setItem("id", response.data.id);
          sessionStorage.setItem("email", email);
          setIsLogin(true);
          sessionStorage.setItem("isLogin", true);
          setSuccess("Giris basarılı. Yönlendiriliyorsunuz...");
          setEmail("");
          setSifre("");
          setError();

          navigate("portal");
        } else {
          setError("Kullanici adi veya sifre hatali.");
        }
      }
    } catch (err) {
      setError("Kullanici adı ve sifre kontrolünde hata olustu.");
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
      <div className="form-box  mb-3 mt-3">
        <div className="form-value">
          <form onSubmit={handleSubmit}>
            <h2>Giriş</h2>
            <div className="inputbox">
              <ion-icon name="mail-outline"></ion-icon>
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
                required
              />
              <label>Şifre</label>
            </div>
            <button className="btn2" type="submit">
              {" "}
              Giriş Yap{" "}
            </button>
          </form>
          {error && <p style={{ color: "red" }}> {error} </p>}
          {success && <p style={{ color: "green" }}> {success} </p>}

          <p className="text-white px-4 mt-2">
            Hesabınız yok mu?{" "}
            <Link to="/kayit" className="px-2 text-white">
              {" "}
              Kayıt Ol
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
