import { useState } from "react";
import logo from "../assets/home/logo.png";

function NavbarLayout() {
  const [hoverButton, setHoverButton] = useState(false);

  const styles = {
    navbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "20px 60px",
      backgroundColor: "#ffffff",
    },
    logo: {
      height: "36px",
      objectFit: "contain",
    },
    containerMenuandButton: {
      display: "flex",
      alignItems: "center",
      gap: "40px",
    },
    menu: {
      display: "flex",
      gap: "40px",
      listStyle: "none",
      margin: 0,
      padding: 0,
    },
    menuLink: {
      textDecoration: "none",
      color: "#191a23",
      fontSize: "16px",
      fontWeight: "400",
    },
    button: {
      backgroundColor: hoverButton ? "#191a23" : "transparent",
      color: hoverButton ? "#ffffff" : "#191a23",
      border: "1px solid #191a23",
      borderRadius: "14px",
      padding: "14px 28px",
      fontSize: "16px",
      cursor: "pointer",
    },
  };

  return (
    <nav style={styles.navbar}>
      {/* Logo */}
      <div>
        <img src={logo} alt="logo" style={styles.logo} />
      </div>

      {/* Menu and Button */}
      <div style={styles.containerMenuandButton}>
        {/* Menu */}
        <ul style={styles.menu}>
          <li>
            <a href="#about" style={styles.menuLink}>
              About
            </a>
          </li>
          <li>
            <a href="#services" style={styles.menuLink}>
              Services
            </a>
          </li>
          <li>
            <a href="#use-cases" style={styles.menuLink}>
              Use Cases
            </a>
          </li>
          <li>
            <a href="#pricing" style={styles.menuLink}>
              Pricing
            </a>
          </li>
          <li>
            <a href="#blog" style={styles.menuLink}>
              Blog
            </a>
          </li>
        </ul>
        {/* Button */}
        <button
          style={styles.button}
          onMouseEnter={() => setHoverButton(true)}
          onMouseLeave={() => setHoverButton(false)}
        >
          Request a quote
        </button>
      </div>
    </nav>
  );
}

export default NavbarLayout;
