import React from "react";
import "../styles/Footer.css";
import {
  FaRaspberryPi,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
export const Footer = () => {
  return (
    <div className="footer-container">
      <footer className="footer-distributed">
        <div className="footer-left">
          <h3>
            <FaRaspberryPi /> Blue<span>Berry</span>
          </h3>

          <p className="footer-links">
            <a href="/ ">Home</a> - <a href="/forum">Forum</a> -{" "}
            <a href="/about">About</a> - <a href="/cities">Places</a> -
            <a href="/contact">Rate Us</a>
          </p>

          <p className="footer-company-name">BlueBerry © 2024</p>

          <div className="footer-icons">
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaLinkedin />
            </a>
            <a href="#">
              <FaYoutube />
            </a>
          </div>
        </div>

        <div className="footer-right">
          <p>Contact Us</p>

          <form type="submit">
            <input type="text" name="email" placeholder="Email" />
            <textarea name="message" placeholder="Message"></textarea>
            <button>Send</button>
          </form>
        </div>
      </footer>
    </div>
  );
};
