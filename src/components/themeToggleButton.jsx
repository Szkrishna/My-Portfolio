import { useTheme } from "../common/ThemeContext";
import { useEffect, useState } from "react";

const ThemeToggleButton = ({ inline = false }) => {
  const { theme, toggleTheme } = useTheme();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 576);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 576);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const styles = {
    padding: "8px 12px",
    background: theme === "light" ? "#808080" : "#fff",
    color: theme === "light" ? "#fff" : "#808080",
    border: "none",
    borderRadius: "12px",
    cursor: "pointer",
    transition: "0.3s",
  };

  // Inline mode (used inside header for mobile)
  if (inline || isMobile) {
    return (
      <button onClick={toggleTheme} style={{ ...styles, padding: "4px 6px" }}>
        {theme === "light" ? "🌙" : "☀️"}
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      style={{
        ...styles,
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