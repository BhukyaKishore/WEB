import React from "react";
import Aleart from "./Aleart";

export default function Fotter() {
  const colectingData = () => {
    document.getElementById("exampleInputEmail1").innerText = "";
    document.getElementById("exampleInputPassword1").innerText = "";
    <Aleart/>
  };
  return (
    <>
      <div className="bg-dark text-light w-100 mt-4 py-5 text-center">
        <h4>Thank you ! Visit Again &#10084</h4>
        <h1>Give Us A Shot !</h1>
        <div>
          <form>
            <div className="mb-3 container">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address:
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3 container ">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Feedback:
              </label>
              <input
                type="text"
                className="form-control "
                id="exampleInputPassword1"
              />
            </div>
            <button
              type="submit"
              rows="8"
              className="btn btn-primary text-center "
              onClick={colectingData}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
