import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <footer
      className="text-light pt-5 pb-3 mt-5"
      style={{
        background: "linear-gradient(135deg, #020617, #0f172a)",
        borderTop: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      <div className="container">

        {/* TOP SECTION */}
        <div className="row align-items-start mb-4">

          {/* LEFT: TITLE */}
          <div className="col-md-6 mb-4 mb-md-0">
            <h3 className="fw-bold display-6 mb-2">Contact</h3>
            <p className="text-secondary fs-5 mb-0">
              Feel free to reach out!
            </p>
          </div>

          {/* RIGHT: CONTACT INFO */}
          <div className="col-md-6 d-flex justify-content-md-end">
            <ul className="list-unstyled fs-5 mb-0">

              <li className="mb-2 d-flex align-items-center">
                <FaEnvelope className="me-2 text-info" />
                <a
                  href="mailto:vaishalisusundre2297@gmail.com"
                  className="text-light text-decoration-none"
                >
                  vaishalisusundre2297@gmail.com
                </a>
              </li>

              <li className="mb-2 d-flex align-items-center">
                <FaPhoneAlt className="me-2 text-info" />
                <a
                  href="tel:+918698282297"
                  className="text-light text-decoration-none"
                >
                  +91 8698282297
                </a>
              </li>

              <li className="mb-2 d-flex align-items-center">
                <FaLinkedin className="me-2 text-info" />
                <a
                  href="https://www.linkedin.com/in/vaishali-susundre-098054260"
                  target="_blank"
                  rel="noreferrer"
                  className="text-light text-decoration-none"
                >
                  linkedin.com/in/vaishali-susundre-098054260
                </a>
              </li>

              <li className="d-flex align-items-center">
                <FaGithub className="me-2 text-info" />
                <a
                  href="https://github.com/vaishalisusundre8"
                  target="_blank"
                  rel="noreferrer"
                  className="text-light text-decoration-none"
                >
                  github.com/vaishalisusundre8
                </a>
              </li>

            </ul>
          </div>
        </div>

        <hr className="border-secondary opacity-25" />

        {/* BOTTOM SECTION */}
        <div className="text-center mt-3">
          <p className="mb-0 text-secondary">
            Made By <span className="text-info">Vaishali Susundre</span>.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
