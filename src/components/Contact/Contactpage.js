import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaEnvelope, FaPhone, FaLinkedin, FaUser, FaMapMarkerAlt } from "react-icons/fa";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (!name || !email || !message) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    const mailtoLink = `mailto:namrathareddykareddy@gmail.com?subject=Message from Contact Form&body=Name: ${name}%0AEmail: ${email}%0A%0A${message}`;
    window.open(mailtoLink, "_blank");
  };

  return (
    <div className="contact-background">
      <Container>
        <div className="contact-header">
          <h2>Get in Touch</h2>
          <p>
            I'm always open to hearing about exciting new opportunities in the
            software engineering field. If you're interested in working with a
            driven and knowledgeable developer, don't hesitate to get in touch.
          </p>
        </div>
        <Row className="contact-body">
          {/* Contact Details */}
          <Col md={5} className="contact-details">
            <ul className="contact-list">
              <li>
                <FaUser /> <span>Namratha Reddy Kareddy</span>
              </li>
              <li>
                <FaEnvelope />{" "}
                <a href="mailto:namrathareddykareddy@gmail.com">
                  namrathareddykareddy@gmail.com
                </a>
              </li>
              <li>
                <FaPhone />{" "}
                <a href="tel:+19725651150">+1 972-565-1150</a>
              </li>
              <li>
                <FaLinkedin />{" "}
                <a
                  href="https://www.linkedin.com/in/namrathakareddy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn Profile
                </a>
              </li>
              <li>
                <FaMapMarkerAlt />{" "}
                <span>
                  Gainesville, Florida-32608
                </span>
              </li>
            </ul>
          </Col>

          {/* Contact Form */}
          <Col md={7} className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-control"
                  rows="3"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                ></textarea>
              </div>
              <button type="submit" className="btn contact-btn">
                Send Email
              </button>
            </form>
          </Col>
        </Row>
        <div className="contact-footer">
          <p>Thank you for visiting!</p>
        </div>
      </Container>
    </div>
  );
}

export default ContactPage;
