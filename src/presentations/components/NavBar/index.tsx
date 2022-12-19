import { useContext } from "react";
import  firebase  from "@firebase/auth-types";
import { Nav, NavUl, NavLi,Li, ImgBox } from "./index.style";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { AuthContext } from '../../../app/global/authContext/AuthContext'
import { IallPost } from "../../../app/global/interfaces";
import { RootState } from "../../../store/index";
import { logout } from "../../../api/services/Auth";

const Navbar = (): JSX.Element => {
  const currentUser : firebase.User | null = useContext(AuthContext);
  const { list: Allposts }: { list: IallPost[] } = useSelector(
    (state: RootState) => state.postsSlice
  );



  const HandleLogout =  ()  =>{
    logout()
  }


  return (
    <>
      <Nav>
        <ImgBox>
          <img src="/cleverpyLogo.png" alt="" />
        </ImgBox>
        <NavUl>
          {currentUser ? 
          <NavLi onClick={() => window.location.reload()}>
          <NavLink to="/post" className="links">
            RESET POST
          </NavLink>
        </NavLi> : ""}
          
          <NavLi>
            {currentUser ? (
              <NavLink onClick={HandleLogout} to="/login" className="links">
                LOGOUT
              </NavLink>
            ) : (
              <NavLink  to="/login" className="links">
                LOGIN
              </NavLink>
            )}
          </NavLi>
          {currentUser ?
          <Li>
          <div className="links">AMOUNT OF POST: {Allposts.length}</div>
        </Li> :
        ""
        }
          
        </NavUl>
      </Nav>
    </>
  );
};

export default Navbar;
