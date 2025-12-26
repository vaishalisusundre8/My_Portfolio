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
      className="text-light position-relative overflow-hidden"
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, #0f172a 0%, #020617 65%)",
      }}
    >
     
      <div
        className="position-absolute rounded-circle"
        style={{
          width: "500px",
          height: "500px",
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
          width: "600px",
          height: "600px",
          background:
            "radial-gradient(circle, rgba(13,202,240,0.25), transparent 70%)",
          bottom: "-200px",
          right: "-200px",
          filter: "blur(100px)",
          zIndex: 0,
        }}
      />

      
      <div className="container position-relative z-1">
        <div className="row align-items-center g-5 pt-5 mt-5">

         
          <div className="col-12 col-lg-6 text-center">
            <div
              className="mx-auto p-2 rounded-circle"
              style={{
                width: "380px",
                height: "380px",
                background: "linear-gradient(135deg, #0dcaf0, #6f42c1)",
                boxShadow: "0 0 60px rgba(111,66,193,0.6)",
              }}
            >
              <img
                src={profileImg}
                alt="Vaishali Susundre"
                className="rounded-circle bg-light"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            </div>
          </div>

          <div className="col-12 col-lg-6 text-center text-lg-start">

            <h4
              className="mb-3 fw-medium"
              style={{ fontSize: "3rem", color: "#cbd5f5" }}
            >
              Hi, I am
            </h4>

          
            <h1
              className="fw-bold mb-3"
              style={{
                fontSize: "3.8rem",
                background: "linear-gradient(90deg, #0dcaf0, #6f42c1)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "0 0 40px rgba(111,66,193,0.35)",
              }}
            >
              VAISHALI SUSUNDRE
            </h1>

            
            <h3 className="mb-4 fw-semibold fs-2">
              I am a <span className="text-info">{roles[roleIndex]}</span>
            </h3>

          
            <p className="text-secondary fs-5" style={{ maxWidth: "520px" }}>
              Computer Science Engineering student with a strong passion for building
              impactful digital solutions. Focused on creating user-centric applications,
              solving real-world problems, and continuously learning to grow as a
              full-stack professional.
            </p>

            <div className="d-flex flex-wrap gap-3 mt-4 justify-content-center justify-content-lg-start">

              <button
                className="btn btn-lg px-5 rounded-pill fw-semibold text-dark"
                style={{
                  background: "linear-gradient(90deg, #0dcaf0, #6f42c1)",
                  transition: "all 0.3s ease",
                  boxShadow: "0 0 30px rgba(13,202,240,0.4)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 40px rgba(13,202,240,0.7)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 0 30px rgba(13,202,240,0.4)";
                }}
                onClick={() => navigate("/projects")}
              >
                Explore My Work
              </button>

             
              <a
                href={resumePDF}
                download="Vaishali_Susundre_Resume"
                className="btn btn-lg px-5 rounded-pill fw-semibold btn-outline-info"
                style={{
                  transition: "all 0.3s ease",
                  boxShadow: "0 0 20px rgba(111,66,193,0.4)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#6f42c1";
                  e.currentTarget.style.color = "#000";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "";
                }}
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
