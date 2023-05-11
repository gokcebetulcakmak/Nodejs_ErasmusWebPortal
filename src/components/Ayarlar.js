import React, { useState,useEffect } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Ayarlar() {
  const navigate = useNavigate();
  useEffect(() => {
    var isLogin = sessionStorage.getItem("isLogin");
    if (isLogin !== "true") {
      navigate("/");
    }
  });

  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmNewPassword) {
      setError("Yeni şifreniz tekrarıyla eşleşmiyor.");
      return;
    }
    const id = sessionStorage.getItem("id");

    try {

      const response = await axios.post("http://localhost:3001/sifreDegistir", {
        id,
        password,
        newPassword
       
      });

      if (response.status === 200) {
        setSuccess("Şifreniz başarıyla değiştirildi.");
        setPassword("");
        setNewPassword("");
        setConfirmNewPassword("");
        setError("");
      } else {
        setError("Şifrenizi değiştirirken bir hata oluştu.");
      }
    } catch (error) {
      setError("Veritabanına bağlanırken bir hata oluştu.");
    }
  };
  return (
    <div className="row">
      <div className="col-md-2">
        <Sidebar />
      </div>
      <div className="col-md-10 mx-auto home mt-4 ">
        <div className="row">
          <div className="col-md-4 text-white">
            <h1>Şifre Değiştirme</h1>
            <form id="change-password-form" onSubmit={handlePasswordChange}>
              <div className="form-group mt-2">
                <label htmlFor="current-password">Mevcut Şifre:</label>
                <input
                  type="password"
                  className="form-control"
                  id="current-password"
                  name="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="form-group mt-2">
                <label htmlFor="new-password">Yeni Şifre:</label>
                <input
                  type="password"
                  className="form-control"
                  id="new-password"
                  name="new-password"
                  required
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </div>
              <div className="form-group mt-2">
                <label htmlFor="new-password-repeat">
                  Yeni Şifre (Tekrar):
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="new-password-repeat"
                  name="new-password-repeat"
                  required
                  value={confirmNewPassword}
                  onChange={(e) => setConfirmNewPassword(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-primary mt-3">
                Değiştir
              </button>
            </form>
            {error && <p style={{ color: "red" }}> {error} </p>}
            {success && <p style={{ color: "green" }}> {success} </p>}
          </div>
        </div>
      </div>
    </div>
  );
}
