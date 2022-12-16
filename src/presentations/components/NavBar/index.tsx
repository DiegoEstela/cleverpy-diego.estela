import { useState } from "react";
import { Nav, NavUl, NavLi, ImgBox } from "./index.style";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { IallPost } from "../../../app/global/interfaces";
import { RootState } from "../../../store/index";
import { logout } from "../../../api/services/Auth";

const Navbar = (): JSX.Element => {
  const [userAuth, setUserAuth] = useState<boolean>(true)
  const { list: Allposts }: { list: IallPost[] } = useSelector(
    (state: RootState) => state.postsSlice
  );



  const HandleLogout =  ()  =>{
    logout()
    setUserAuth(false)
  }


  return (
    <>
      <Nav>
        <ImgBox>
          <img src="/cleverpyLogo.png" alt="" />
        </ImgBox>
        <NavUl>
          {userAuth ? 
          <NavLi onClick={() => window.location.reload()}>
          <NavLink to="/post" className="links">
            RESET POST
          </NavLink>
        </NavLi> : ""}
          
          <NavLi>
            {userAuth ? (
              <NavLink onClick={HandleLogout} to="/login" className="links">
                LOGOUT
              </NavLink>
            ) : (
              <NavLink  to="/login" className="links">
                LOGIN
              </NavLink>
            )}
          </NavLi>
          {userAuth ?
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
