import styles from "./Nav.module.css";
import Logo from "../../assets/logos/whitemode.svg";
import { useNavigate } from "react-router-dom";

const Nav = ({ currentPage = "home" }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.NavContainer}>
      <img
        src={Logo}
        alt="Amare's personal portfolio logo."
        className={styles.logo}
        onClick={() => navigate("/")}
      />
      <ul>
        <li
          className={currentPage == "home" ? styles.currentPage : ""}
          onClick={() => navigate("/")}
        >
          Home
        </li>
        <li
          className={currentPage == "about" ? styles.currentPage : ""}
          onClick={() => navigate("/about")}
        >
          About
        </li>
        <li
          className={currentPage == "projects" ? styles.currentPage : ""}
          onClick={() => navigate("/projects")}
        >
          Projects
        </li>
        <li
          className={currentPage == "resume" ? styles.currentPage : ""}
          onClick={() => navigate("/resume")}
        >
          Resume
        </li>
      </ul>
    </div>
  );
};

export default Nav;
