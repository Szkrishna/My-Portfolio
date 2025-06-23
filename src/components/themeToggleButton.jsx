import { useTheme } from "../common/ThemeContext";
import { useEffect, useState } from "react";

const ThemeToggleButton = ({ inline = false }) => {
  const { theme, toggleTheme } = useTheme();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const baseStyles = {
    padding: isMobile ? "4px 6px" : "8px 12px",
    fontSize: isMobile ? "14px" : "18px",
    background: theme === "light" ? "#808080" : "#fff",
    color: theme === "light" ? "#fff" : "#808080",
    border: "none",
    borderRadius: "12px",
    cursor: "pointer",
    transition: "0.3s",
  };

  // Inline mode or mobile
  if (inline || isMobile) {
    return (
      <button onClick={toggleTheme} style={baseStyles}>
        {theme === "light" ? "🌙" : "☀️"}
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      style={{
        ...baseStyles,
        position: "fixed",
        right: "20px",
        bottom: "40px",
        zIndex: 1000,
      }}
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
};

export default ThemeToggleButton;