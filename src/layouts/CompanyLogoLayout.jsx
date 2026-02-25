import amazon from "../assets/home/company/amazon.png";
import dribbble from "../assets/home/company/dribbble.png";
import hubspot from "../assets/home/company/hubspot.png";
import notion from "../assets/home/company/notion.png";
import netflix from "../assets/home/company/netflix.png";
import zoom from "../assets/home/company/zoom.png";

// list logo
const companies = [
  { src: amazon, alt: "Amazon" },
  { src: dribbble, alt: "Dribbble" },
  { src: hubspot, alt: "HubSpot" },
  { src: notion, alt: "Notion" },
  { src: netflix, alt: "Netflix" },
  { src: zoom, alt: "Zoom" },
];

//CSS nya
const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "20px",
    padding: "40px 60px",
    borderRadius: "14px",
    marginTop: "40px",
  },
  logoImg: {
    height: "40px",
    objectFit: "contain",
    filter: "grayscale(100%) opacity(0.6)",
    transition: "filter 0.3s ease, transform 0.3s ease",
    cursor: "pointer",
  },
};

function CompanyLogoLayout() {
  return (
    <div style={styles.container}>
      {/* Looping logo */}
      {companies.map((company, index) => (
        <img
          key={index}
          src={company.src}
          alt={company.alt}
          style={styles.logoImg}
          onMouseEnter={(e) => {
            e.currentTarget.style.filter = "grayscale(0%) opacity(1)";
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.filter = "grayscale(100%) opacity(0.6)";
            e.currentTarget.style.transform = "scale(1)";
          }}
        />
      ))}
    </div>
  );
}

export default CompanyLogoLayout;