import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h1 className="logo-text">Wild Code School</h1>
          <p>
            Ce portfolio a été réalisé dans le cadre d'un checkpoint a la Wild
            Code School pour mettre en pratique mes compétences sur le back et
            le front en React et Node.
          </p>
          <div className="Contact">
            <span>
              <i className="phone"></i>Tél: 06.82.43.19.35
            </span>
            <br />
            <span>
              <i className="email"></i> Email: dav.moneta@orange.fr
            </span>
            <br />
            <span>
              <i className="linkeldin"></i> linkedin:
              www.linkedin.com/in/david-moneta
            </span>
            <br />
            <span>
              <i className="github"></i> Github: Davidoumone
            </span>
            <br />
          </div>
        </div>
        <div className="footer-section remerciements">
            <h1>Remerciements</h1>
            <p>Je remercie mon formatateur, mon campus-manager pour tout ce qui m'ont apporté au niveau du développement web mais aussi au niveau du développement de soi.</p>
        </div>
        <div className="footer-bottom">Portfolio by MONETA David</div>
      </div>
    </div>
  );
};

export default Footer;
