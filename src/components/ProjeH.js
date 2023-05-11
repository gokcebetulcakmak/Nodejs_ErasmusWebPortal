import React from "react";
import basvuru from "../img/basvuru.jpg";
import travel2 from "../img/travel2.jpg";
import { Link } from "react-router-dom";

export default function ProjeH() {
  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <div
            id="myCarousel"
            className="carousel slide mt-3"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#myCarousel"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#myCarousel"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={travel2}
                  width="100%"
                  height="100%"
                  aria-hidden="true"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                />

                <div className="container">
                  <div className="carousel-caption text-start text-dark">
                    <h4 className=" ">
                      Keşfet, 
                      Öğren, <br />
                      Dünya Senin Olsun <br />
                      <b> Erasmus ile!</b>
                    </h4>
                    <h4>Son Başvuru: 02.05.2023</h4>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src={basvuru}
                  width="100%"
                  height="100%"
                  aria-hidden="true"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                />

                <div className="container">
                  <div className="carousel-caption text-dark text-end">
                    <h4>Başvuru için Tıklayın</h4>
                    <Link to={"/portal/BasvuruFormu"}>
                      <button className="btn btn-sm btn-primary">
                        Hemen Başvur!
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
