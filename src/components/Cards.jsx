import React from "react";
import { printer_2, camara_2, editing_2, passport_2 } from "./Images";
import IconSet from "./IconSet";

export default function Cards() {
  return (
    <>
      <div className="row row-cols-1 row-cols-md-2 g-4 px-5 py-5 text-center">
        <div className="col  ">
          <div className="card border-primary border-3 round-4 boder-opacity-75 mysize">
            <img src={camara_2} className="card-img-top  " alt="..." />
            <div className="card-body ">
              <h4 className="card-title">Camera Rentals</h4>
              <p className="card-text " id="camara">
                <strong>Camera Rentals:</strong> Capture life's moments in
                stunning detail with our camera rental service. Whether you're
                an enthusiast, a hobbyist, or a professional photographer, our
                selection of cameras for rent ensures you have the perfect tool
                for any occasion.
              </p>
              <IconSet />
            </div>
          </div>
        </div>
        <div className="col  ">
          <div className="card border-primary border-3 round-4 boder-opacity-75 mysize">
            <img src={printer_2} className="card-img-top   " alt="..." />
            <div className="card-body">
              <h4 className="card-title">Printing Works</h4>
              <p className="card-text" id="printer">
                <strong>Printing Works:</strong> Need a reliable printing
                relatedwork ? Our printer service provides you with access to
                high-quality printers that cater to your specific requirements
                and provide you a greate Services.For
                <strong>Affordable Prices</strong>.
              </p>
              <IconSet />
            </div>
          </div>
        </div>
        <div className="col ">
          <div className="card border-primary border-3 round-4 boder-opacity-75 mysize">
            <img src={editing_2} className="card-img-top  " alt="..." />
            <div className="card-body">
              <h4 className="card-title">Professional Photo Editing</h4>
              <p className="card-text" id="editing">
                <strong>Professional Photo Editing:</strong> Transform your
                images into masterpieces with our professional photo editing
                service. Our experienced editors work closely with you to
                enhance your photos, ensuring they meet your creative vision and
                professional standards.
              </p>
              <IconSet />
            </div>
          </div>
        </div>
        <div className="col ">
          <div className="card border-primary border-3 round-4 boder-opacity-75 mysize">
            <img src={passport_2} className="card-img-top  " alt="..." />
            <div className="card-body">
              <h4 className="card-title">Premium Photocopies</h4>
              <p className="card-text" id="passport">
                <strong>Premium Photocopies:</strong> Need copies that stand
                out? Our premium photocopy service delivers exceptional quality
                and precision. From important documents to marketing materials,
                we're here to meet your copying needs with finesse.
              </p>
              <IconSet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
