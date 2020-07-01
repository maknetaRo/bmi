import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer-para">
        Created with &hearts; by{" "}
        <a className="author" href="https://twitter.com/makneta">
          Magdalena Rosłaniec
        </a>
      </p>
      <p className="footer-para">&copy; {new Date().getFullYear()}</p>
    </footer>
  );
}

export default Footer;
