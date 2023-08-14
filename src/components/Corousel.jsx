import React from "react";
import { printer, camara, passport, editing } from "./Images";

export default function Corousel() {
  return (
    <>
      <div
        id="carouselExampleRide"
        className="carousel slide h-65"
        data-bs-ride="true"
      >
        <div className="carousel-inner  ">
          <div className="carousel-item active">
            <img src={camara} className="d-block w-100 size" alt="Imerage 1" />
          </div>
          <div className="carousel-item">
            <img src={printer} className="d-block w-100 size" alt="Imerage 1" />
          </div>
          <div className="carousel-item">
            <img
              src={editing}
              className="d-block w-100 size "
              alt="Imerage 1"
            />
          </div>
          <div className="carousel-item">
            <img
              src={passport}
              className="d-block w-100 size"
              alt="Imerage 1"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleRide"
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
          data-bs-target="#carouselExampleRide"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
