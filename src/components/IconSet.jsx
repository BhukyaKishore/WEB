import React from "react";
import PropTypes from "prop-types";
import {
  FaWhatsapp,
  FaInstagram,
  FaPhoneAlt,
  FaMailBulk,
} from "react-icons/fa";

export default function IconSet(props) {
  return (
    <>
      <div className="text-center px-3 py-3"> 
        <a href={props.whatsapp} target="_blank" rel="noreferrer">
          <FaWhatsapp className="px-2 icons" />
        </a>
        <a href={props.phone} target="_blank" rel="noreferrer">
          <FaPhoneAlt className="px-2 icons" />
        </a>
        <a href={props.mail} target="_blank" rel="noreferrer">
          <FaMailBulk className="px-2 icons" />
        </a>
        <a href={props.insta}  target="_blank" rel="noreferrer">
          <FaInstagram className="px-2 icons" />
        </a>
      </div>
    </>
  );
}
IconSet.prototype = {
  whatsapp: PropTypes.string.isRequired,
  call: PropTypes.string.isRequired,
  insta: PropTypes.string.isRequired,
  mail: PropTypes.string.isRequired,
};
IconSet.defaultProps = {
  whatsapp: "https://wa.me/917032607238",
  phone: "tel:+917032607238",
  mail: "mailto:bhukyakishore3921@gmail.com",
  insta: "https://www.instagram.com/___.k.i.s.h.o.r.e.___/",
};
