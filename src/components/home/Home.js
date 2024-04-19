import React from "react";
import "./Home.scss";
import Services from "./Services";
import About from "./About";
import Contact from "./Contact";
// import Portfolio from "./Portfolio";

const Home = () => {
  const servicesItem = [
    "Events & Weddings Shooting",
    "Products Shooting",
    "Pre Wedding Shoot",
  ];

  return (
    <>
      <section id="home" className="banner_sec">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="banner_content">
                <h6>Production House</h6>
                <h1>
                  Capture Your <span>Perfect Moments.</span>
                </h1>
                <hr />
                <ul className="service_list">
                  {servicesItem.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <button className="site_btn">Get a Quote</button>
              </div>
            </div>
            <div className="col-md-6"></div>
          </div>
        </div>
      </section>

      <Services />

      {/* <Portfolio /> */}

      <About />

      <Contact />
    </>
  );
};

export default Home;
