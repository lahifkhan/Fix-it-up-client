import React from "react";
import logoImg from "../assets/Region.png";
import { FaSquareFacebook, FaXTwitter } from "react-icons/fa6";
import { CiYoutube } from "react-icons/ci";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-horizontal footer-center bg-primary text-primary-content p-10">
        <aside>
          <img src={logoImg} alt="" />
          <h1 className="font-bold text-2xl">FixItUp</h1>
          <p className="font-bold">
            A community-driven platform to report, fix, and fund local issues
            together.
          </p>
          <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
        </aside>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a>
              <FaXTwitter size={24} />
            </a>
            <a>
              <CiYoutube size={24} />
            </a>
            <a>
              <FaSquareFacebook size={24} />
            </a>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
