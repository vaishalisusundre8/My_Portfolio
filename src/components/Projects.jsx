import React from "react";
import medicineImg from "../assets/medicine.png";
import plantImg from "../assets/plant.png";
import tourismImg from "../assets/tourism.png";

function Projects() {
  const projects = [
    {
      title: "Doctor AI",
      subtitle: "Medicine Recommendation System",
      description:
        "Web application that recommends medicines, precautions, workouts, and diets based on user symptoms using machine learning.",
      tech: ["Python", "Flask", "Machine Learning", "HTML", "CSS"],
      image: medicineImg,
    },
    {
      title: "Plant Disease Detection",
      subtitle: "Automated Disease Prediction",
      description:
        "Web application that predicts plant diseases using leaf images with machine learning-based image classification.",
      tech: ["Python", "Machine Learning", "Image Processing"],
      image: plantImg,
    },
    {
      title: "Tourism Web Application",
      subtitle: "Travel Planning Platform",
      description:
        "Web application to assist travelers in planning trips and discovering destinations using a database-driven approach.",
      tech: ["HTML", "CSS", "JavaScript", "MySQL"],
      image: tourismImg,
    },
  ];

  return (
    <section
      className="bg-dark text-light py-5"
      style={{
        background:
          "radial-gradient(circle at top, #0f172a 0%, #020617 65%)",
      }}
    >
      <div className="container">

        <h2 className="text-center fw-bold mb-3 display-4">
          Projects
        </h2>

        <p
          className="text-center text-secondary mb-5 mx-auto fs-5"
          style={{ maxWidth: "850px" }}
        >
          Real-World Projects Combining Web Development and Machine Learning
        </p>

       
        <div className="row g-4">
          {projects.map((project, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4">
              <div className="card bg-black border border-secondary border-opacity-25 rounded-4 h-100 shadow-sm">

              
                <img
                  src={project.image}
                  alt={project.title}
                  className="card-img-top rounded-top-4 img-fluid"
                  style={{ objectFit: "cover", height: "210px" }}
                />

               
                <div className="card-body p-4 d-flex flex-column">

                  <h4 className="fw-bold text-light mb-1">
                    {project.title}
                  </h4>

                  <p className="text-info fw-semibold mb-2 fs-6">
                    {project.subtitle}
                  </p>

                  <p className="text-secondary flex-grow-1 fs-6">
                    {project.description}
                  </p>

                 
                  <div className="d-flex flex-wrap gap-2 mb-3">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="badge rounded-pill bg-secondary bg-opacity-25 text-light fw-normal px-3 py-2"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

               
                  <a
                    href="https://github.com/vaishalisusundre8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-info text-decoration-none fw-semibold fs-6"
                  >
                    <i className="bi bi-github me-1"></i>
                    View Code
                  </a>

                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;
