import React from "react";
import { FaInstagram, FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { MdOutlineEmojiEmotions } from "react-icons/md";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 mt-5 mb-3 md:flex-row md:justify-between px-4">
      <p>
        Designed & Developed by <br />{" "}
        <span className="">Levy Ngairangbam ✨🤗</span>
      </p>
      <div className="flex gap-3 ">
        <FaInstagram size={30} />
        <FaGithub size={30} />
        <FaLinkedin size={30} />
        <FaFacebook size={30} />
      </div>
    </div>
  );
};

export default Footer;
