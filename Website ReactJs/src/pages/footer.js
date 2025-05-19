import React from "react";
class Footer extends React.Component {
  render() {
    return (
      <div>
        <footer className="ftco-footer ftco-bg-dark ftco-section">
          <div className="container">
            <div className="row mb-5">
              <div className="col-md">
                <div className="ftco-footer-widget mb-6">
                  <h2 className="ftco-heading-2">Mosaic</h2>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                  <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-3">
                    <li className="ftco-animate">
                      <a href="https://www.facebook.com/AnthemInfotech">
                        <span className="icon-facebook"></span>
                      </a>
                    </li>

                    <li className="ftco-animate">
                      <a href="https://twitter.com/antheminfotech">
                        <span className="icon-twitter"></span>
                      </a>
                    </li>
                    <li className="ftco-animate">
                      <a href="https://www.linkedin.com/company/anthem-infotech-pvt-ltd-">
                        <span className="icon-linkedin"></span>
                      </a>
                    </li>
                    <li className="ftco-animate">
                      <a href="https://wa.me/919815340123/?text=Hi Anthem Team.">
                        <span className="icon-whatsapp"></span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-md-6">
                <div className="ftco-footer-widget mb-12">
                  <h2 className="ftco-heading-2">Location</h2>
                  <p>
                    Explore our interactive map to discover our locations or
                    find directions.
                  </p>
                  <div
                    className="map-container"
                    style={{
                      boxShadow:
                        "0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
                    }}
                  >
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3432.836930283328!2d76.82170797431439!3d30.63855299018039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390feb34165bc719%3A0xeef887919eec714c!2sAnthem%20Infotech%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1714733108107!5m2!1sen!2sin"
                      width="400"
                      height="300"
                      style={{ border: "0" }}
                      allowfullscreen=""
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 text-center">
                <p>
                  Copyright &copy;
                  <script>document.write(new Date().getFullYear());</script> All
                  rights reserved | This website is made with{" "}
                  <i className="icon-heart" aria-hidden="true"></i> by{" "}
                  <a href="http://new.antheminfotech.com/" target="_blank">
                    Anthem Infotech
                  </a>
                </p>
              </div>
            </div>
          </div>
        </footer>

        {/* <div id="ftco-loader" class="show fullscreen">
          <svg class="circular" width="48px" height="48px">
            <circle
              class="path-bg"
              cx="24"
              cy="24"
              r="22"
              fill="none"
              stroke-width="4"
              stroke="#eeeeee"
            />
            <circle
              class="path"
              cx="24"
              cy="24"
              r="22"
              fill="none"
              stroke-width="4"
              stroke-miterlimit="10"
              stroke="#F96D00"
            />
          </svg>
        </div> */}
      </div>
    );
  }
}
export default Footer;
