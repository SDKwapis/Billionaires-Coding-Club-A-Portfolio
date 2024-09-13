import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

export default function Contact() {
  // State to handle form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);

  // Handle form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission using EmailJS
  const handleSubmit = (event) => {
    event.preventDefault();

    emailjs
      .send(
        "service_i9hg6wf",
        "template_i7np458",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "oklUgDNwMzPigDiDc"
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setIsSubmitted(true); // Display success message
      })
      .catch((err) => {
        console.error("FAILED...", err);
        setError("There was an error sending your message. Please try again.");
      });

    // Reset the form
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div>
      <p className="big-bold-header">
        If you'd like to get in touch to talk about a collaboration or your
        favorite Dragon Ball Z arc, I'd love to hear from you!
      </p>

      {/* Show a success or error message after form submission */}
      {isSubmitted && (
        <p className="success-message">Your message was sent successfully!</p>
      )}
      {error && <p className="error-message">{error}</p>}

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            className="form-textarea"
          />
        </div>

        <button type="submit" className="submit-button">
          Send Message
        </button>
      </form>
    </div>
  );
}
