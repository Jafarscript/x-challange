import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="text-cover">
          <div>
          <h2 className="footer-text">
            get<span className="colored">linked</span>
          </h2>
          <h3>
            Getlinked Tech Hackathon is a technology innovation program
            established by a group of organizations with the aim of showcasing
            young and talented individuals in the field of technology
          </h3>

          </div>
         
          <div className="usePolicy">
            <h4>Terms of Use</h4> <span className="colored">|</span>{" "}
            <h4>Privacy Policy</h4>
          </div>
        </div>

        <div className="flinks">
          <h2 className="useful colored">Useful Links</h2>
          <a href="#overview">Overview</a>
          <a href="#timeline">Timeline</a>
          <a href="#faq">FAQs</a>
          <a href="#register">Register</a>

          <div className="follow">     
          <span className="followText colored">Follow us</span>     
          <div className="social-icon">
            <a href="www.instagram.com">
              <img
                src={require("../asset/mdi_instagram.png")}
                alt="instagram icon"
              />
            </a>
            <a href="www.X.com">
              <img src={require("../asset/Vector (3).png")} alt="x icon" />
            </a>
            <a href="www.facebook.com">
              <img
                src={require("../asset/Vector (4).png")}
                alt="facebook icon"
              />
            </a>
            <a href="www.Linkedln.com">
              <img
                src={require("../asset/ri_linkedin-fill.png")}
                alt="linkedln icon"
              />
            </a>
          </div>
          </div>
        </div>

        <div className="footerContact">
          <h2 className="colored">Contact Us</h2>
          <span>
            <img src={require("../asset/Group.png")} alt="phone icon" /> +2346707653444
          </span>
          <address>
            <img src={require("../asset/Vector (5).png")} alt="location icon" />{" "}
            27, Alara Street Yaba 100012 Lagos State
          </address>
        </div>

      </div>
      <div className="copyright">
        <p>All rights reserved. &copy; getlinked Ltd. </p>
      </div>
    </footer>
  );
}

export default Footer;
