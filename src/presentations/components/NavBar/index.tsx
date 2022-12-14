import { Nav, NavUl, NavLi } from "./index.style";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavUl>
          <NavLi>
            <NavLink to="/category/unoVeinte" className="links">
              1-20
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
          <NavLi>
            <NavLink to="/category/cuerdas" className="links">
              61-80
            </NavLink>
          </NavLi>
          <NavLi>
            <NavLink to="/category/percusion" className="links">
              81-100
            </NavLink>
          </NavLi>
        </NavUl>
      </Nav>
    </>
  );
};

export default Navbar;
