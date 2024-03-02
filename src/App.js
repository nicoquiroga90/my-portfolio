import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import SideBar from "./components/navbar";
import ContactPage from "./pages/contact";
import AboutPage from "./pages/about";
import Bio from "./components/bio";
import ThemeSwitch from "./components/theme";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", newTheme);
    setTheme(newTheme);
  };

  return (
    <Router>
      <div className="App">
        <h1></h1>
        <Routes>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/" element={<Bio isHomePage />} />
        </Routes>
        <SideBar />
        <ThemeSwitch theme={theme} toggleTheme={toggleTheme} />
      </div>
    </Router>
  );
}

export default App;
