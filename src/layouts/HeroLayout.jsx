import { useState } from "react";
import gambarHero from "../assets/home/hero.png";

function HeroLayout() {
  const [hoverButton, setHoverButton] = useState(false);

  const styles = {
    container: {
      display: "flex", //row
      alignItems: "center",
      justifyContent: "space-between",
      padding: "60px 60px",
      backgroundColor: "#ffffff",
    },
    leftContent: {
      flex: "1 1 0",
      maxWidth: "480px",
    },
    heading: {
      fontFamily: "'Poppins', sans-serif",
      fontSize: "56px",
      fontWeight: "700",
      lineHeight: "1.1",
      color: "#191a23",
      margin: "0 0 24px 0",
    },
    paragraph: {
      fontFamily: "'Poppins', sans-serif",
      fontSize: "16px",
      lineHeight: "1.6",
      color: "#191a23",
      margin: "0 0 36px 0",
      maxWidth: "360px",
    },
    button: {
      fontFamily: "'Poppins', sans-serif",
      backgroundColor: hoverButton ? "#333" : "#191a23",
      color: "#ffffff",
      border: "none",
      borderRadius: "14px",
      padding: "20px 35px",
      fontSize: "16px",
      fontWeight: "500",
      cursor: "pointer",
    },
    rightContent: {
      flex: "1 1 0",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
    },
    imageHero: {
      width: "100%",
      maxWidth: "520px",
    },
  };

  return (
    <div style={styles.container}>
      {/* Left Content */}
      <div style={styles.leftContent}>
        <h1 style={styles.heading}>
          Navigating the digital landscape for success
        </h1>
        <p style={styles.paragraph}>
          Our digital marketing agency helps businesses grow and succeed online
          through a range of services including SEO, PPC, social media
          marketing, and content creation.
        </p>
        <button
          style={styles.button}
          onMouseEnter={() => setHoverButton(true)}
          onMouseLeave={() => setHoverButton(false)}
        >
          Book a consultation
        </button>
      </div>

      {/* Right Image */}
      <div style={styles.rightContent}>
        <img src={gambarHero} alt="hero" style={styles.imageHero} />
      </div>
    </div>
  );
}

export default HeroLayout;