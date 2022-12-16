import { Nav, NavUl, NavLi, ImgBox } from "./index.style";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { IallPost } from '../../../app/global/interfaces'
import { RootState } from "../../../store/index"

const Navbar = (): JSX.Element => {
  const {list : Allposts} : {list : IallPost[]} = useSelector((state: RootState) => state.postsSlice)
 

  return (
    <>
      <Nav>
        <ImgBox> 
        <img src="/cleverpyLogo.png" alt="" />
        </ImgBox>
        <NavUl>
          <NavLi onClick={()=> window.location.reload()}>
          <NavLink  to="/" className="links">
              RESET POST 
            </NavLink>
          </NavLi>
          <NavLi>
            <NavLink to="/category/bajos" className="links">
              LOOGIN
            </NavLink>
          </NavLi>
          <NavLi>
          <div className="links">
              AMOUNT OF POST:  {Allposts.length}
            </div>
          </NavLi>
        </NavUl>
      </Nav>
    </>
  );
};

export default Navbar;
