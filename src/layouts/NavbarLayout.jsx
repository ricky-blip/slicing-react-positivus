import logo from "../assets/home/logo.png";

function NavbarLayout() {
  const styles = {
    navbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "20px 60px",
      backgroundColor: "#ffffff",
      borderBottom: "1px solid #e0e0e0",
    },
    logo: {
      height: "36px",
      objectFit: "contain",
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
    cta: {
      backgroundColor: "#191a23",
      color: "#ffffff",
      border: "none",
      borderRadius: "14px",
      padding: "14px 28px",
      fontSize: "16px",
      cursor: "pointer",
    },
  };

  return (
    <nav style={styles.navbar}>
      <div>
        <img src={logo} alt="logo" style={styles.logo} />
      </div>

      <ul style={styles.menu}>
        <li><a href="#about" style={styles.menuLink}>About</a></li>
        <li><a href="#services" style={styles.menuLink}>Services</a></li>
        <li><a href="#use-cases" style={styles.menuLink}>Use Cases</a></li>
        <li><a href="#pricing" style={styles.menuLink}>Pricing</a></li>
        <li><a href="#blog" style={styles.menuLink}>Blog</a></li>
      </ul>

      <button style={styles.cta}>Request a quote</button>
    </nav>
  );
}

export default NavbarLayout;