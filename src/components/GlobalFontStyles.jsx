import { useEffect } from "react";

function GlobalFontStyles() {
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @font-face {
        font-family: "Poppins";
        src: url("/src/assets/font/Poppins-Regular.ttf") format("truetype");
        font-weight: normal;
        font-style: normal;
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return null;
}

export default GlobalFontStyles;