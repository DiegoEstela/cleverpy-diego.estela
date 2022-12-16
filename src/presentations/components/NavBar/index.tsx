import { Nav, NavUl, NavLi, ImgBox } from "./index.style";
import { NavLink } from "react-router-dom";

const Navbar = (): JSX.Element => {
  return (
    <>
      <Nav>
        <ImgBox> 
        <img src="/cleverpyLogo.png" alt="" />
        </ImgBox>
        <NavUl>
          <NavLi>
            <NavLink to="/category/unoyveinte" className="links">
              01-20
            </NavLink>
          </NavLi>
          <NavLi>
            <NavLink to="/category/bajos" className="links">
              21-40
            </NavLink>
          </NavLi>
          <NavLi>
            <NavLink to="/category/baterias" className="links">
              41-60
            </NavLink>
          </NavLi>
        </NavUl>
      </Nav>
    </>
  );
};

export default Navbar;
