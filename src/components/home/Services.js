import React from "react";
import ServiceImage from "../../images/pre-wedding-shoot.jpg";

const Services = () => {
  const servicesItems = [
    {
      image: ServiceImage,
      name: "Events & Weddings Shooting",
    },
    {
      image: ServiceImage,
      name: (
        <>
          Products <br />
          Shooting
        </>
      ),
    },
    {
      image: ServiceImage,
      name: (
        <>
          Pre Wedding <br />
          Shoot
        </>
      ),
    },
  ];

  return (
    <>
      <section id="services" className="services_sec">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="heading_content text-center text-white">
                <h3 className="site_heading">My Specialties</h3>
                <p>
                  I would like to give you a unique photography experience,
                  built to serve you best and
                  <br />
                  capture your special moments for you and your families
                  creatively and beautifully
                </p>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            {servicesItems.map((item, index) => (
              <div key={index} className="col-md-4">
                <figure className="figure service_item">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="figure-img img-fluid"
                  />
                  <figcaption className="figure-caption d-flex text-white">
                    <div className="align-self-center mx-auto">
                      <h4 className="mb-0 text-uppercase">{item.name}</h4>
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
