import { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import React from "react";
import axios from "axios";
import { baseApiUrl } from "./baseApiUrl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faRoad } from "@fortawesome/free-solid-svg-icons";
import { Button } from "reactstrap";

const initialState = {
  name: "",
  email: "",
  message: "",
  contactNumber: "",
};

function Contact() {
  const [apiResponseMsg, setApiResponseMsg] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [contactError, setContactError] = useState("");
  const [msgError, setMsgError] = useState("");
  const indianPhoneNumberRegex = /^[6-9]\d{9}$/;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContact] = useState("");
  const [message, setMessage] = useState("");
  const [animated, setAnimated] = useState({});
  const [showLoader, setShowLoader] = useState(true);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".ftco-animate");
      elements.forEach((element) => {
        const bounding = element.getBoundingClientRect();
        if (
          bounding.top >= 0 &&
          bounding.bottom <=
            (window.innerHeight || document.documentElement.clientHeight)
        ) {
          if (!element.classList.contains("ftco-animated")) {
            element.classList.add("ftco-animated");
            element.classList.add("fadeIn");
          }
        }
      });
    };

    // Initial call to handle scroll in case elements are already in view
    handleScroll();

    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    const fetchToken = async () => {
      try {
        const response = await fetch(
          "http://anthemwebsiteapi.antheminfotech.com/api/Home/GetTokenForAllAPI?tokenn=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJOYW1lIjoiUmFtYW4gS3VtYXIiLCJuYmYiOjE3MTM0OT",
          {
            method: "POST",
          }
        );
        const data = await response.json();
        localStorage.setItem("Token", data.token);
        setToken(data.token); // Set token state
        setShowLoader(false);
      } catch (error) {
        console.error("Error fetching token:", error);
        setShowLoader(false);
      }
    };

    fetchToken();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const ids = ["contactpage", "contactpage1"]; // Array of IDs
      ids.forEach((id) => {
        const element = document.getElementById(id);
        if (element && !animated[id]) {
          const rect = element.getBoundingClientRect();
          if (rect.top < window.innerHeight && rect.bottom >= 0) {
            setAnimated((prevState) => ({
              ...prevState,
              [id]: true,
            }));
            element.classList.add("animate-heading");
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [animated]);

  const handleChange = (e) => {
    debugger;
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        setNameError("");
        break;
      case "email":
        setEmail(value);
        setEmailError("");
        break;
      case "contactNumber":
        setContact(value);
        setContactError("");
        break;
      case "message":
        setMessage(value);
        setMsgError("");
        break;
      default:
        break;
    }
  };

  const handleKeyPress = (e) => {
    const keyCode = e.keyCode || e.which;
    const keyValue = String.fromCharCode(keyCode);
    const regex = /^[0-9]*$/;
    if (!regex.test(keyValue)) {
      e.preventDefault();
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    debugger;
    console.log(name, email, message, contactNumber);
    // Validation
    let formIsValid = true;

    if (name === "") {
      setNameError("Please enter your name.");
      formIsValid = false;
    }

    if (email === "") {
      setEmailError("Please enter your email.");
      formIsValid = false;
    }
    if (message === "") {
      setMsgError("Please enter your message.");
      formIsValid = false;
    }

    if (contactNumber === "") {
      setContactError("Please enter your contact number.");
      formIsValid = false;
    }
    if (contactNumber.trim() != "") {
      if (!indianPhoneNumberRegex.test(contactNumber)) {
        setContactError("Please enter a valid contact number.");
        formIsValid = false;
      } else {
        setContactError("");
      }
    }
    if (!formIsValid) {
      return;
    }
    try {
      const response = await axios.post(
        `${baseApiUrl}api/ContactUs/ContactUs`,
        {
          Name: name,
          Email: email,
          Number: contactNumber,
          Message: message,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("Token")}`,
          },
        }
      );
      console.log("Response:", response.data);
      if (response.data.msg) {
        setApiResponseMsg(response.data.msg);

        // clearState();
        setName("");
        setContact("");
        setEmail("");
        setMessage("");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <section
        className="hero-wrap hero-wrap-2"
        style={{ backgroundImage: "url(images/bg_1.jpg)" }}
        data-stellar-background-ratio="0.5"
      >
        <div className="overlay"></div>
        <div className="container">
          <div className="row no-gutters slider-text align-items-center justify-content-center ftco-animate">
            <div className="col-md-9 text-center">
              <h1 className="mb-2 bread">Contact Us</h1>
              {/* <p className="breadcrumbs">
                <span className="mr-2">
                  <a href="/">
                    Home <i className="ion-ios-arrow-forward"></i>
                  </a>
                </span>
                <span>
                  Contact <i className="ion-ios-arrow-forward"></i>
                </span>
              </p> */}
            </div>
          </div>
        </div>
      </section>
      <section className="ftco-section ftco-no-pt ftco-no-pb contact-section">
        <div className="container-wrap">
          <div className="row d-flex align-items-stretch no-gutters">
            <div className="col-md-8 p-5 order-md-last">
              <div className="section-title">
                {!apiResponseMsg && (
                  <p>
                    Fill and submit below application form to apply and schedule
                    an interview with us.
                  </p>
                )}
                {apiResponseMsg && (
                  <div className="container">
                    <p style={{ color: "green" }}>{apiResponseMsg}</p>
                  </div>
                )}
              </div>
              <form name="sentMessage" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                        //required
                        //onChange={handleChange}
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger">{nameError}</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        //required
                        onChange={handleChange}
                      />
                      <p id="email-error" className="help-block text-danger">
                        {emailError}
                      </p>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="contactNumber"
                        name="contactNumber"
                        className="form-control"
                        placeholder="Contact Number"
                        //required
                        pattern="[0-9]*"
                        onChange={handleChange}
                        onKeyPress={handleKeyPress}
                      />
                      <p className="help-block text-danger">{contactError}</p>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <textarea
                        name="message"
                        id="message"
                        className="form-control"
                        rows="2"
                        placeholder="Message"
                        //required
                        onChange={handleChange}
                      ></textarea>
                      <p className="help-block text-danger">{msgError}</p>
                    </div>
                  </div>
                </div>
                <div className="col text-right">
                  <Button type="submit" className="btn btn-custom btn-lg">
                    Send Message
                  </Button>
                </div>
              </form>
            </div>
            <div className="col-md-4 p-5 order-md-last">
              <div className="contact-item">
                <h2 className="h4">Contact Information</h2>
              </div>
              <div className="w-100"></div>
              <div>
                <p>
                  <span>Address:</span> #11, Floor 11, Sushma Infinium,
                  Chandigarh - Ambala Highway, Near Best Price Zirakpur, Punjab
                  – 140603 India.
                </p>
              </div>
              <div>
                <p>
                  <span>Phone:</span>
                  <a href="tel://+91 9815340123"> +91 9815-34-0123</a>
                </p>
              </div>
              <div>
                <p>
                  <span>Email:</span>
                  <a href="mailto:info@yoursite.com">info@antheminfotech.com</a>
                </p>
              </div>
              <div>
                <p>
                  <span>Website:</span>
                  <a href="https://antheminfotech.com/#">Click Here</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
