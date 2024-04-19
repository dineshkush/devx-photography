import React from "react";
import AboutImg from "../../images/pre-wedding-shoot.jpg";

const About = () => {
  const handleNavLinkClick = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section id="about" className="about_sec text-white">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="heading_content text-center text-white">
                <h3 className="site_heading">About Me</h3>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-7">
              <p className="content_larger">
                Hello! I'm Jonathan Davis, a fashion, people &amp; portrait
                photographer. I am very passionate about photography and it
                becomes quite obvious in the way I create portraits.
              </p>
              <p>
                Nullam id dolor id nibh ultricies vehicula ut id elit. Vivamus
                sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
                eget lacinia odio sem nec elit. Cum sociis natoque penatibus et
                magnis dis parturient montes. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Donec id elit non mi porta gravida
                at eget metus. Donec id elit non mi porta gravida at eget.
              </p>
            </div>
            <div className="col-md-5">
              <img src={AboutImg} alt="About Me" className="img-fluid" />
            </div>
          </div>

          <div className="row more_about">
            <div className="col-md-4">
              <h4 className="h4_heading">What is my process?</h4>
              <p>
                Duis mollis, est non commodo luctus, nisi porttitor ligula, eget
                lacinia odio sem nec elit. Aenean eu leo quam. Pellentesque
                ornare sem.
              </p>
              <ol className="number_list">
                <li>Vivamus sagittis lacus vel augue laoreet.</li>
                <li>Cras mattis consectetur purus sit amet.</li>
                <li>Vestibulum id ligula porta felis euismod.</li>
                <li>Nulla vitae elit libero, a pharetra augue.</li>
              </ol>
            </div>
            <div className="col-md-4">
              <h4 className="h4_heading">Why Choose me?</h4>
              <p>
                Vestibulum id ligula porta felis euismod semper. Cras mattis
                consectetur purus sit amet fermentum. Donec ullamcorper nulla
                non metus.
              </p>
              <ul class="unordered-list list-default">
                <li>Donec ullamcorper nulla non metus auctor.</li>
                <li>Cras justo odio, dapibus ac facilisis.</li>
                <li>Praesent commodo cursus magna.</li>
                <li>Curabitur blandit tempus porttitor.</li>
              </ul>
            </div>
            <div className="col-md-4">
              <h4 className="h4_heading">My Skills</h4>
              <ul className="progress-list">
                <li>
                  <p>Photoshop</p>
                  <div
                    className="progressbar line border default"
                    data-value="90"
                  >
                    <svg
                      viewBox="0 0 100 3"
                      preserveAspectRatio="none"
                      style={{ display: "block", width: "100%" }}
                    >
                      <path
                        d="M 0,1.5 L 100,1.5"
                        stroke="#eee"
                        stroke-width="3"
                        fill-opacity="0"
                      ></path>
                      <path
                        d="M 0,1.5 L 100,1.5"
                        stroke="#555"
                        stroke-width="3"
                        fill-opacity="0"
                        style={{
                          strokeDasharray: "100, 100",
                          strokeDashoffset: "10",
                        }}
                      ></path>
                    </svg>
                    <div
                      className="progressbar-text"
                      style={{
                        color: "inherit",
                        position: "absolute",
                        right: "0px",
                        top: "-30px",
                        padding: "0px",
                        margin: "0px",
                      }}
                    >
                      90 %
                    </div>
                  </div>
                </li>
                <li>
                  <p>Final Cut</p>
                  <div
                    className="progressbar line border default"
                    data-value="80"
                  >
                    <svg
                      viewBox="0 0 100 3"
                      preserveAspectRatio="none"
                      style={{ display: "block", width: "100%" }}
                    >
                      <path
                        d="M 0,1.5 L 100,1.5"
                        stroke="#eee"
                        stroke-width="3"
                        fill-opacity="0"
                      ></path>
                      <path
                        d="M 0,1.5 L 100,1.5"
                        stroke="#555"
                        stroke-width="3"
                        fill-opacity="0"
                        style={{
                          strokeDasharray: "100, 100",
                          strokeDashoffset: "20",
                        }}
                      ></path>
                    </svg>
                    <div
                      className="progressbar-text"
                      style={{
                        color: "inherit",
                        position: "absolute",
                        right: "0px",
                        top: "-30px",
                        padding: "0px",
                        margin: "0px",
                      }}
                    >
                      80 %
                    </div>
                  </div>
                </li>
                <li>
                  <p>Studio Photography</p>
                  <div
                    className="progressbar line border default"
                    data-value="85"
                  >
                    <svg
                      viewBox="0 0 100 3"
                      preserveAspectRatio="none"
                      style={{ display: "block", width: "100%" }}
                    >
                      <path
                        d="M 0,1.5 L 100,1.5"
                        stroke="#eee"
                        stroke-width="3"
                        fill-opacity="0"
                      ></path>
                      <path
                        d="M 0,1.5 L 100,1.5"
                        stroke="#555"
                        stroke-width="3"
                        fill-opacity="0"
                        style={{
                          strokeDasharray: "100, 100",
                          strokeDashoffset: "15",
                        }}
                      ></path>
                    </svg>
                    <div
                      className="progressbar-text"
                      style={{
                        color: "inherit",
                        position: "absolute",
                        right: "0px",
                        top: "-30px",
                        padding: "0px",
                        margin: "0px",
                      }}
                    >
                      85 %
                    </div>
                  </div>
                </li>
                <li>
                  <p>Motion Video</p>
                  <div
                    className="progressbar line border default"
                    data-value="65"
                  >
                    <svg
                      viewBox="0 0 100 3"
                      preserveAspectRatio="none"
                      style={{ display: "block", width: "100%" }}
                    >
                      <path
                        d="M 0,1.5 L 100,1.5"
                        stroke="#eee"
                        stroke-width="3"
                        fill-opacity="0"
                      ></path>
                      <path
                        d="M 0,1.5 L 100,1.5"
                        stroke="#555"
                        stroke-width="3"
                        fill-opacity="0"
                        style={{
                          strokeDasharray: "100, 100",
                          strokeDashoffset: "35",
                        }}
                      ></path>
                    </svg>
                    <div
                      className="progressbar-text"
                      style={{
                        color: "inherit",
                        position: "absolute",
                        right: "0px",
                        top: "-30px",
                        padding: "0px",
                        margin: "0px",
                      }}
                    >
                      65 %
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div class="text-center">
                <button
                  onClick={handleNavLinkClick}
                  class="btn btn-full-rounded scroll site_btn"
                >
                  Get in Touch
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
