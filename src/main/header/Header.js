import React, { useEffect, useState } from "react";
import "./Header.scss";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 70) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }

      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);

  const headerMenu = [
    {
      name: "Home",
      id: "home",
    },
    {
      name: "Services",
      id: "services",
    },
    {
      name: "Portfolio",
      id: "portfolio",
    },
    {
      name: "About",
      id: "about",
    },
    {
      name: "Contact",
      id: "contact",
    },
  ];

  const headerIcon = [
    { icon: <i className="fa-brands fa-instagram"></i>, url: "/" },
  ];

  const handleNavLinkClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <header className={`main_header ${isSticky ? "sticky-top" : ""}`}>
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <a className="navbar-brand" href="/">
              Dev<span>X</span> Photography
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse align-items-center"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto">
                {headerMenu.map((item, index) => (
                  <li
                    key={index}
                    className={`nav-item ${
                      activeSection === item.id ? "active" : ""
                    }`}
                  >
                    <a
                      className="nav-link"
                      aria-current="page"
                      href={item.url}
                      onClick={() => handleNavLinkClick(item.id)}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
              <hr />
              <div className="header_icon">
                <ul>
                  {headerIcon.map((item, index) => (
                    <li key={index}>
                      <a href={item.url}>{item.icon}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
