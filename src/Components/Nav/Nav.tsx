import styles from "./Nav.module.css";
import Logo from "../../assets/logos/whitemode.svg";
import { useNavigate } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { useState } from "react";

const Nav = ({ currentPage = "home" }) => {
  const navigate = useNavigate();
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  return (
    <div className={`${styles.NavContainer} ${isSideBarOpen ? styles.sideBarOpen : ""} ${currentPage == "home" ? "" : styles.notHome}`}>
      <img src={Logo} alt="Amare's personal portfolio logo." className={styles.logo} onClick={() => navigate("/")} />
      <ul>
        <div className={styles.closeButton}>
          <HiX
            onClick={() => {
              setIsSideBarOpen(false);
            }}
          />
        </div>
        <li className={currentPage == "home" ? styles.currentPage : ""} onClick={() => navigate("/")}>
          Home
        </li>
        <li className={currentPage == "about" ? styles.currentPage : ""} onClick={() => navigate("/about")}>
          About
        </li>
        <li className={currentPage == "projects" ? styles.currentPage : ""} onClick={() => navigate("/projects")}>
          Projects
        </li>
        <li className={currentPage == "resume" ? styles.currentPage : ""} onClick={() => navigate("/resume")}>
          Resume
        </li>
      </ul>
      <div className={styles.menuButton}>
        <HiMenu
          onClick={() => {
            setIsSideBarOpen(true);
          }}
        />
      </div>
      <div
        className={styles.overlay}
        onClick={() => {
          setIsSideBarOpen(false);
        }}
      ></div>
    </div>
  );
};

export default Nav;
