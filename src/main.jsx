import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider, useTheme } from "./common/ThemeContext.jsx";

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      style={{
        position: "fixed",
        right: "20px",
        top: "665px",
        padding: "10px",
        background: theme === "light" ? "#808080" : "#fff",
        color: theme === "light" ? "#fff" : "#808080",
        border: "none",
        borderRadius: "12px",
        cursor: "pointer",
        zIndex: 1000,
        transition: "0.3s",
        ...(window.innerWidth <= 768 && { top: "40px", right: "20px" }),
      }}
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
};


const MainApp = () => (
  <ThemeProvider>
    <Router>
      <ThemeToggleButton />
      <App />
    </Router>
  </ThemeProvider>
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MainApp />
  </React.StrictMode>
);
