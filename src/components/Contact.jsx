import React from "react";
import IconSet from "./IconSet";

export default function Contact() {
  return (
    <>
      <h1 className="container text-center">Contact us</h1>
      <div className="border border-primary border-2 round-5 container h-50 w-75">
        <address className="text-center py-3">
          Thirumala Rao (CSE E-2)
          <br />
          Kishore (CSE E-2) <br />
          Gautam (ECE E-2)
          <br />
          Srinu (ME E-2)
          <br />
          I2,SF-80A,
          <br id="contactus" />
          Boys Hostel.
        </address>
        <IconSet whatsapp="https://wa.me/917032607238" />
      </div>
    </>
  );
}
