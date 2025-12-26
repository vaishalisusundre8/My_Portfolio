import { NavLink } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { path: "/", label: "Home", end: true },
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <nav
        className="navbar navbar-dark px-3 px-lg-5 py-4 sticky-top border-bottom border-secondary border-opacity-25"
        style={{
          background: "radial-gradient(circle at top, #0f172a 0%, #020617 65%)",
        }}
      >
        <div className="container-fluid">

          {/* Brand */}
          <NavLink
            className="navbar-brand fw-bold text-info"
            style={{ fontSize: "1.9rem", letterSpacing: "0.5px" }}
            to="/"
          >
            My Portfolio
          </NavLink>

          {/* Desktop Menu */}
          <ul className="navbar-nav flex-row gap-5 d-none d-lg-flex ms-auto">
            {links.map(({ path, label, end }) => (
              <li className="nav-item" key={path}>
                <NavLink
                  to={path}
                  end={end}
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link text-info fw-semibold border-bottom border-info border-2"
                      : "nav-link text-secondary fw-medium"
                  }
                  style={{ fontSize: "1.15rem" }}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Mobile Hamburger */}
          <button
            className="navbar-toggler d-lg-none ms-auto"
            onClick={() => setOpen(true)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>

      {/* MOBILE OFFCANVAS */}
      <div
        className={`offcanvas offcanvas-end text-bg-dark d-lg-none ${
          open ? "show" : ""
        }`}
        tabIndex="-1"
        style={{ visibility: open ? "visible" : "hidden" }}
      >
        <div className="offcanvas-header border-bottom border-secondary">
          <h5
            className="offcanvas-title text-info fw-bold"
            style={{ fontSize: "1.5rem" }}
          >
            Menu
          </h5>
          <button
            className="btn-close btn-close-white"
            onClick={() => setOpen(false)}
          ></button>
        </div>

        <div className="offcanvas-body">
          <ul className="navbar-nav gap-4">
            {links.map(({ path, label, end }) => (
              <li className="nav-item" key={path}>
                <NavLink
                  to={path}
                  end={end}
                  className="nav-link fw-semibold"
                  style={{ fontSize: "1.25rem" }}
                  onClick={() => setOpen(false)}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>

    
      {open && <div className="offcanvas-backdrop fade show d-lg-none"></div>}
    </>
  );
}

export default Navbar;
