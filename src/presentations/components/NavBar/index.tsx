import { Nav, NavUl, NavLi, ImgBox } from "./index.style";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { IallPost } from "../../../app/global/interfaces";
import { RootState } from "../../../store/index";
import { logout } from "../../../api/services/Auth";
import { getAuth } from "firebase/auth";

const Navbar = (): JSX.Element => {
  const { list: Allposts }: { list: IallPost[] } = useSelector(
    (state: RootState) => state.postsSlice
  );
  const auth = getAuth();
  const user = auth.currentUser;

  return (
    <>
      <Nav>
        <ImgBox>
          <img src="/cleverpyLogo.png" alt="" />
        </ImgBox>
        <NavUl>
          {user ? 
          <NavLi onClick={() => window.location.reload()}>
          <NavLink to="/post" className="links">
            RESET POST
          </NavLink>
        </NavLi> : ""}
          
          <NavLi>
            {user ? (
              <NavLink onClick={() => logout()} to="/login" className="links">
                LOGOUT
              </NavLink>
            ) : (
              <NavLink onClick={() => logout()} to="/login" className="links">
                LOGIN
              </NavLink>
            )}
          </NavLi>
          {user ?
          <NavLi>
          <div className="links">AMOUNT OF POST: {Allposts.length}</div>
        </NavLi> :
        ""
        }
          
        </NavUl>
      </Nav>
    </>
  );
};

export default Navbar;
