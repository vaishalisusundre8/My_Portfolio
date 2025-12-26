import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <section
      className="d-flex align-items-center text-light py-5"
      style={{
        minHeight: "100vh",
        background: "radial-gradient(circle at top, #0f172a 0%, #020617 65%)",
      }}
    >
      <div className="container container-lg px-3 px-md-4">
        <div className="row justify-content-center align-items-center gy-5">

        
          <div className="col-12 col-md-5 col-lg-4">
            <div className="p-4 p-md-5 rounded-4 border border-light border-opacity-25 bg-dark bg-opacity-10 text-center text-md-start">
              <h3 className="fw-bold mb-4">Get In Touch</h3>

              {[
                { icon: "envelope-fill", title: "Email", value: "vaishalisusundre2297@gmail.com" },
                { icon: "telephone-fill", title: "Phone", value: "+91 8698282297" },
                { icon: "geo-alt-fill", title: "Location", value: "Chh. Sambhajinagar, Maharashtra" },
              ].map((item, index) => (
                <div key={index} className="d-flex flex-column flex-sm-row gap-3 mb-4 align-items-center align-items-sm-start">
                  <i className={`bi bi-${item.icon} fs-4 text-info`}></i>
                  <div>
                    <div className="fw-semibold text-info">{item.title}</div>
                    <div className="fs-6 text-secondary">{item.value}</div>
                  </div>
                </div>
              ))}

              <h6 className="fw-bold mt-4 mb-3 fs-5">Follow Me</h6>
              <div className="d-flex justify-content-center justify-content-md-start gap-4 fs-4">
                <a href="https://github.com/vaishalisusundre8" className="text-info" target="_blank" rel="noreferrer">
                  <i className="bi bi-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/vaishali-susundre-098054260" className="text-info" target="_blank" rel="noreferrer">
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
          </div>

          
          <div className="col-12 col-md-6 col-lg-5">
          <form
            onSubmit={handleSubmit}
            className="p-4 p-md-5 rounded-4 border border-light border-opacity-25 bg-dark bg-opacity-10"
          >
            <h3 className="fw-bold text-center mb-4">Connect With Me</h3>

            <div className="form-floating mb-3">
              <input
                type="email"
                name="email"
                className="form-control bg-dark text-light border-secondary"
                id="floatingEmail"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <label htmlFor="floatingEmail" className="text-secondary">Your Email</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="text"
                name="name"
                className="form-control bg-dark text-light border-secondary"
                id="floatingName"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <label htmlFor="floatingName" className="text-secondary">Your Name</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="text"
                name="subject"
                className="form-control bg-dark text-light border-secondary"
                id="floatingSubject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
              <label htmlFor="floatingSubject" className="text-secondary">Subject</label>
            </div>

            <div className="form-floating mb-4">
              <textarea
                name="message"
                className="form-control bg-dark text-light border-secondary"
                placeholder="Message"
                id="floatingMessage"
                style={{ height: "120px" }}
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <label htmlFor="floatingMessage" className="text-secondary">Message</label>
            </div>

            <button
              type="submit"
              className="btn w-100 fw-semibold py-3 fs-5 rounded-3 text-white"
              style={{ background: "linear-gradient(90deg, #a855f7, #ec4899)" }}
            >
              Send Message
            </button>

            {success && (
              <div className="alert alert-success mt-4 text-center">
                Message sent successfully!
              </div>
            )}
          </form>
        </div>


        </div>
      </div>
    </section>
  );
}

export default Contact;
