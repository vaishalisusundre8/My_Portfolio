import React from "react";

function About() {
  return (
    <section
      className="text-light py-5"
      style={{
        minHeight: "100vh",
        background: "radial-gradient(circle at top, #0f172a 0%, #020617 65%)",
      }}
    >
      <div className="container container-lg px-3 px-md-4">

        {/* Heading */}
        <h2 className="text-center fw-bold display-4 mb-3">
          About <span className="text-info">Me</span>
        </h2>

        <p className="text-center text-secondary fs-5 mb-5 mx-auto col-lg-8">
          Computer Science Engineering student passionate about building
          meaningful digital experiences, solving real-world problems, and
          continuously growing as a developer.
        </p>

      
        <div className="row g-4 mb-5">

          
          <div className="col-12 col-md-6">
            <div className="p-4 rounded-4 h-100 border border-light border-opacity-25">
              <h4 className="text-center fw-bold fs-3 mb-4">Frontend</h4>
              <div className="d-flex flex-wrap justify-content-center gap-2">
                {["HTML", "CSS", "JavaScript", "React JS", "Next JS", "Tailwind CSS", "Bootstrap"].map(skill => (
                  <span key={skill} className="badge rounded-pill px-3 py-2 fs-6 bg-dark border border-light border-opacity-25">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

         
          <div className="col-12 col-md-6">
            <div className="p-4 rounded-4 h-100 border border-light border-opacity-25">
              <h4 className="text-center fw-bold fs-3 mb-4">Backend</h4>
              <div className="d-flex flex-wrap justify-content-center gap-2">
                {["Node JS", "Express JS", "REST APIs", "MySQL", "PostgreSQL", "MongoDB"].map(skill => (
                  <span key={skill} className="badge rounded-pill px-3 py-2 fs-6 bg-dark border border-light border-opacity-25">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

        
          <div className="col-12 col-md-6">
            <div className="p-4 rounded-4 h-100 border border-light border-opacity-25">
              <h4 className="text-center fw-bold fs-3 mb-4">Languages</h4>
              <div className="d-flex flex-wrap justify-content-center gap-2">
                {["C", "Java", "Python", "JavaScript", "SQL"].map(lang => (
                  <span key={lang} className="badge rounded-pill px-3 py-2 fs-6 bg-dark border border-light border-opacity-25">
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>

         
          <div className="col-12 col-md-6">
            <div className="p-4 rounded-4 h-100 border border-light border-opacity-25">
              <h4 className="text-center fw-bold fs-3 mb-4">Tools</h4>
              <div className="d-flex flex-wrap justify-content-center gap-2">
                {["Git", "GitHub", "VS Code", "Postman", "MongoDB Compass", "Vercel"].map(tool => (
                  <span key={tool} className="badge rounded-pill px-3 py-2 fs-6 bg-dark border border-light border-opacity-25">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

       
        <div className="mt-5">
          <h3 className="text-center fw-bold display-6 mb-5">
            My <span className="text-info">Journey</span>
          </h3>

          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8">

              {[
                { year: "2022–2026", text: "Started Computer Science Engineering and learned various technical skills." },
                { year: "2021–2022", text: "Completed Higher Secondary Education with First Class Distinction (84.50%)." },
                { year: "2019–2020", text: "Completed Secondary School Education with First Class Distinction (93.40%)." },
              ].map((item, index) => (
                <div key={index} className="row g-3 align-items-start mb-4">
                  <div className="col-12 col-sm-3 text-info fw-bold fs-5 text-sm-end text-center">
                    {item.year}
                  </div>
                  <div className="col-12 col-sm-9">
                    <div className="p-3 rounded-3 border border-light border-opacity-25 bg-dark">
                      {item.text}
                    </div>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;
