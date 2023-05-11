import React,{ useEffect }  from "react";
import "./Portal.css";
import Sidebar from "../components/Sidebar";
import Saat from "../components/Saat";
import HavaDurumu from "../components/HavaDurumu";
import ProjeH from "../components/ProjeH";
import Bilgi from "../components/Bilgi";
import {useNavigate } from 'react-router-dom';

export default function Portal() {
  const navigate = useNavigate();
  useEffect(()=>{

    var isLogin = sessionStorage.getItem("isLogin");
    if(isLogin !=="true"){
      navigate("/");
    }

  })
  return (
    <div className="row">
      <div className="col-md-2">
        <Sidebar />
      </div>
      <div className="col-md-10 mx-auto home ">
        <div className="row mt-4 ">
          <div className="col-md-11  mx-auto">
            <ProjeH />
            <div className="row">
              <div className="col-md-9">
                <Bilgi />
              </div>
              <div className="col-md-3 mt-4">
                <Saat />
                <HavaDurumu />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
