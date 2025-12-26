import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import profileImg from "../assets/VaishuPassPhoto.jpeg";
import resumePDF from "../assets/Vaishali_Resume.pdf";

const roles = [
  "Full Stack Web Developer",
  "Java Developer",
  "ML Enthusiast",
];

function Home() {
  const navigate = useNavigate();
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="text-light position-relative overflow-hidden d-flex align-items-center"
      style={{
        minHeight: "calc(100vh - 80px)", // fixes downward shift
        background:
          "radial-gradient(circle at top, #0f172a 0%, #020617 65%)",
      }}
    >
      {/* Glow Effects */}
      <div
        className="position-absolute rounded-circle"
        style={{
          width: "400px",
          height: "400px",
          background:
            "radial-gradient(circle, rgba(111,66,193,0.35), transparent 70%)",
          top: "-150px",
          left: "-150px",
          filter: "blur(80px)",
          zIndex: 0,
        }}
      />

      <div
        className="position-absolute rounded-circle"
        style={{
          width: "450px",
          height: "450px",
          background:
            "radial-gradient(circle, rgba(13,202,240,0.25), transparent 70%)",
          bottom: "-200px",
          right: "-200px",
          filter: "blur(100px)",
          zIndex: 0,
        }}
      />

      <div className="container position-relative z-1">
        <div className="row align-items-center gy-5">

        
          <div className="col-12 col-lg-6 text-center">
            <div
              className="mx-auto rounded-circle d-flex align-items-center justify-content-center"
              style={{
                width: "260px",
                height: "260px",
                background: "linear-gradient(135deg, #0dcaf0, #6f42c1)",
                boxShadow: "0 0 50px rgba(111,66,193,0.6)",
              }}
            >
              <img
                src={profileImg}
                alt="Vaishali Susundre"
                className="rounded-circle bg-light img-fluid"
                style={{
                  width: "95%",
                  height: "95%",
                  objectFit: "contain",
                }}
              />
            </div>
          </div>

          
          <div className="col-12 col-lg-6 text-center text-lg-start">

            <h4 className="fw-medium text-secondary mb-2 fs-1">
              Hi, I am
            </h4>

            <h1
              className="fw-bold mb-3"
              style={{
                fontSize: "clamp(2.2rem, 4vw, 3.8rem)",
                background: "linear-gradient(90deg, #0dcaf0, #6f42c1)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              VAISHALI SUSUNDRE
            </h1>

            <h3 className="mb-4 fw-semibold fs-4">
              I am a <span className="text-info">{roles[roleIndex]}</span>
            </h3>

            <p className="text-secondary fs-4 fs-lg-5" style={{ maxWidth: "520px" }}>
              Computer Science Engineering student with a strong passion for
              building impactful digital solutions. Focused on creating
              user-centric applications and solving real-world problems.
            </p>

            <div className="d-flex flex-wrap gap-3 mt-4 justify-content-center justify-content-lg-start">

              <button
                className="btn btn-lg px-4 rounded-pill fw-semibold text-dark"
                style={{
                  background: "linear-gradient(90deg, #0dcaf0, #6f42c1)",
                }}
                onClick={() => navigate("/projects")}
              >
                Explore My Work
              </button>

              <a
                href={resumePDF}
                download
                className="btn btn-lg px-4 rounded-pill fw-semibold btn-outline-info"
              >
                Download Resume
              </a>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Home;
