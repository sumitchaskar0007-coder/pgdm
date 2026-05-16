import React, { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import "./Contact.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you! We will contact you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const styles = {
    container: {
      minHeight: "100vh",
      backgroundColor: "#f8f9fa",
      fontFamily: "'Inter', sans-serif",
    },
    heroSection: {
      backgroundColor: "#1a1a2e",
      color: "white",
      padding: "60px 20px",
      textAlign: "center",
    },
    heroTitle: {
      fontSize: "48px",
      fontWeight: "700",
    },
    heroSubtitle: {
      fontSize: "18px",
      opacity: 0.9,
      maxWidth: "600px",
      margin: "10px auto",
    },
    contentWrapper: {
      maxWidth: "1200px",
      margin: "-40px auto 0",
      padding: "0 20px 60px",
    },
    mainGrid: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "40px",
      backgroundColor: "white",
      borderRadius: "20px",
      boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
    },
    contactInfo: {
      padding: "40px",
    },
    contactForm: {
      padding: "40px",
      backgroundColor: "#f8f9fa",
    },
    sectionTitle: {
      fontSize: "28px",
      fontWeight: "700",
      marginBottom: "24px",
      color: "#1a1a2e",
    },
    contactCard: {
      display: "flex",
      alignItems: "center",
      padding: "20px",
      marginBottom: "16px",
      backgroundColor: "#f8f9fa",
      borderRadius: "12px",
      textDecoration: "none",
      color: "black",
    },
    contactIcon: {
      width: "50px",
      height: "50px",
      backgroundColor: "#000", // black icon bg
      borderRadius: "12px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginRight: "20px",
      color: "white",
    },
    contactTitle: {
      fontSize: "18px",
      fontWeight: "600",
    },
    contactDescription: {
      fontSize: "14px",
      color: "#555",
    },
    input: {
      width: "100%",
      padding: "12px",
      borderRadius: "8px",
      border: "1px solid #ddd",
      marginBottom: "16px",
    },
    textarea: {
      width: "100%",
      padding: "12px",
      borderRadius: "8px",
      border: "1px solid #ddd",
      minHeight: "120px",
    },
    submitButton: {
      width: "100%",
      padding: "14px",
      backgroundColor: "#000",
      color: "white",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
    },
    mapSection: {
      marginTop: "60px",
      backgroundColor: "white",
      borderRadius: "20px",
      padding: "40px",
      boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
    },
  };

  return (
    <div style={styles.container}>
      {/* Hero */}
      <div style={styles.heroSection}>
        <h1 style={styles.heroTitle}>Let's Connect</h1>
        <p style={styles.heroSubtitle}>
          Get in touch with us for admissions or queries.
        </p>
      </div>

      <div style={styles.contentWrapper}>
        <div style={styles.mainGrid}>
          {/* Contact Info */}
          <div style={styles.contactInfo}>
            <h2 style={styles.sectionTitle}>Get in Touch</h2>

            {/* Call */}
            <a href="tel:+919356393629" style={styles.contactCard}>
              <div style={styles.contactIcon}>
                <Phone size={22} />
              </div>
              <div>
                <div style={styles.contactTitle}>Call Us</div>
                <div style={styles.contactDescription}>
                  +91 9356393629
                </div>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:adityainstitute.admission@gmail.com"

              style={styles.contactCard}
            >
              <div style={styles.contactIcon}>
                <Mail size={22} />
              </div>
              <div>
                <div style={styles.contactTitle}>Email Us</div>
                <div style={styles.contactDescription}>
                  adityainstitute.admission@gmail.com
                </div>
              </div>
            </a>

            {/* Address */}
            <div style={styles.contactCard}>
              <div style={styles.contactIcon}>
                <MapPin size={22} />
              </div>
              <div>
                <div style={styles.contactTitle}>Address</div>
                <div style={styles.contactDescription}>
                  Narhe, Pune – 411041
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div style={styles.contactForm}>
            <h2 style={styles.sectionTitle}>Send Message</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                style={styles.input}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                style={styles.input}
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                style={styles.textarea}
                required
              />
              <button type="submit" style={styles.submitButton}>
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Map */}
        <div style={styles.mapSection}>
          <h2 style={styles.sectionTitle}>Visit Us</h2>
          <div className="map-container">
            <iframe
              className="map-iframe"
              src="https://www.google.com/maps?q=Narhe,Pune&output=embed"
              title="map"
            ></iframe>
          </div>

          <div className="address-container">
            <div className="address-icon">
              <MapPin size={28} color="black" />
            </div>
            <div className="address-text">
              <strong>Our Address</strong>
              Narhe, Pune – 411041
              <br />
              Maharashtra, India
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;