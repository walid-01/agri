import { Link } from "react-router-dom";
import "../Style/Footer.css";

const Footer = () => {
  return (
    <div id="footer">
      <div className="useful-links">
        <div className="links-grp">
          <h1 style={{ fontFamily: "var(--title-font-family)" }}>AGRI</h1>
          <p>Street Address</p>
          <p>Annaba, Annaba 23000</p>
          <p>Algeria</p>
          <br />
          <p>
            <b>Phone</b> 05 55 55 55 55
          </p>
          <p>
            <b>Email:</b> helpmeigra@gmail.com
          </p>
        </div>
        <div className="links-grp">
          <h3>Useful Links</h3>
          <a href="/#welcome">Home</a>
          <a href="/#about">About Us</a>
          <a href="/#services">Services</a>
          <a href="/#portfolio">Portfolio</a>
          <a href="/#team">Team</a>
          <a href="/#contact">Contact</a>
        </div>
        <div className="links-grp">
          <h3> Our Socials</h3>
          <Link
            to="https://www.facebook.com/profile.php?id=100094491979796"
            target="_blank"
          >
            Twitter
          </Link>
          <Link
            to="https://www.facebook.com/profile.php?id=100094491979796"
            target="_blank"
          >
            LinkedIn
          </Link>
          <Link
            to="https://www.linkedin.com/company/agri-igra-with-ai/"
            target="_blank"
          >
            Facebook
          </Link>
          <Link
            to="https://www.facebook.com/profile.php?id=100094491979796"
            target="_blank"
          >
            Instagram
          </Link>
        </div>
      </div>
      <div className="copyright-container">
        <p>
          © Copyright <b>AGRI</b> - All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
