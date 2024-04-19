import React from "react";
import Location from "../../images/map-icon.svg";
import Phone from "../../images/phone-icon.svg";
import Mail from "../../images/mail-icon.svg";

const Contact = () => {
  const phoneNumber = +`9999467119`;

  //   const contactDetails = [
  //     {
  //       icon: Location,
  //       details: "Moon Street Light Avenue 14/05 Jupiter, JP 80630",
  //     },
  //     {
  //       icon: Phone,
  //       details: +"919999467119",
  //     },
  //     {
  //       icon: Mail,
  //       details: "info@dexphotography.com",
  //     },
  //   ];

  const handleWhatsAppClick = () => {
    // Use `encodeURIComponent` to encode the phone number to ensure it's properly formatted in the link
    // const encodedPhoneNumber = encodeURIComponent(phoneNumber);
    // Construct the WhatsApp link with the encoded phone number
    const whatsappLink = `https://wa.me/${phoneNumber}`;
    // Open the WhatsApp link in a new tab/window
    window.open(whatsappLink, "_blank");
  };

  return (
    <>
      <section id="contact" className="contact_sec text-white">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="heading_content text-center text-white">
                <h3 className="site_heading">Get in Touch</h3>
                <p>
                  Nullam quis risus eget urna mollis ornare vel eu leo. Fusce
                  dapibus, tellus ac cursus commodo, tortor mauris condimentum
                  nibh, ut fermentum massa justo sit amet risus. Integer posuere
                  erat.
                </p>
              </div>
            </div>
          </div>

          <div className="row text-center">
            <div className="col-md-4">
              <div className="contact_item">
                <img src={Location} alt="Location" className="img-fluid" />
                <p>
                  Moon Street Light Avenue
                  <br />
                  14/05 Jupiter, JP 80630
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="contact_item">
                <img src={Phone} alt="Location" className="img-fluid" />
                <p onClick={handleWhatsAppClick} style={{ cursor: "pointer" }}>
                  +91 {phoneNumber}
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="contact_item">
                <img src={Mail} alt="Location" className="img-fluid" />
                <p>
                  <a href="mailto:info@dexphotography.com">
                    info@dexphotography.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="form-container">
                <form action="" method="post">
                  <div className="row text-center">
                    <div className="col-md-6 pr-10">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          placeholder="Your name"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6 pl-10">
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          placeholder="Your e-mail"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6 pr-10">
                      <div className="form-group">
                        <input
                          type="tel"
                          className="form-control"
                          name="tel"
                          placeholder="Phone"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 pl-10">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="subject"
                          placeholder="Subject"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <textarea
                        name="message"
                        className="form-control"
                        rows="3"
                        placeholder="Type your message here..."
                        required=""
                      ></textarea>
                    </div>
                    <div className="col-12">
                      <button type="submit" className="site_btn">
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
