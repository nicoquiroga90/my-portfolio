import { Link } from "react-router-dom";
import "../styles/SideBar.css";
import NameIcon from "./nameicon";

const NavBar = ({ theme }) => {
  return (
    <div className="sidebar">
      <NameIcon />
      <ul>
        <li>
          <Link
            to="/about"
            className={`sidebar-link ${theme === "dark" ? "dark-theme" : ""}`}
          >
            About →
          </Link>
        </li>
        <li>
          <a
            href="https://github.com/nicoquiroga90"
            className={`sidebar-link ${theme === "dark" ? "dark-theme" : ""}`}
          >
            Git →
          </a>
        </li>
        <li>
          <Link
            to="/contact"
            className={`sidebar-link ${theme === "dark" ? "dark-theme" : ""}`}
          >
            Contact →
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
