import {
  BoxLink,
  NavbarContainer,
  NavLink,
  HamburguerButton,
  Overlay,
} from "./Navbar.styled";
import { Link } from "react-router-dom";
import { BiMenuAltLeft } from "react-icons/bi";

const Navbar = ({ background, position }) => {
  const openMobileMenu = () => {
    const mobileMenu = document.querySelector(".menu");
    const overlay = document.querySelector(".overlay");

    if (mobileMenu.classList.contains("active")) {
      mobileMenu.classList.remove("active");
      overlay.classList.remove("active");
    } else {
      mobileMenu.classList.add("active");
      overlay.classList.add("active");
    }
  };
  return (
    <>
      <HamburguerButton onClick={openMobileMenu}>
        <BiMenuAltLeft />
      </HamburguerButton>
      <Overlay
        className="overlay"
      ></Overlay>
      <NavbarContainer position={position} className="menu">
        <BoxLink>
          <NavLink to="/" background={background}>
            Início
          </NavLink>
          <NavLink to="/dream-team" background={background}>
            Dream Team
          </NavLink>
        </BoxLink>
      </NavbarContainer>
    </>
  );
};

export default Navbar;
