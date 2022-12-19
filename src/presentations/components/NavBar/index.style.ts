import styled from "styled-components";
import * as vars from "../../../app/global/colors";

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 10vh;
  font-size: 16px;
  background-color: ${vars.Primary};
  border-bottom: 1px solid ${vars.Withe};
`;

export const NavUl = styled.ul`
  width: 70vw;
  display: flex;
  flex-direction: row;
  list-style: none;
`;

export const NavLi = styled.li`
  font-size: 16px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 700px) {
    display: none;
  }

  .links {
    font-size: 1.2rem;
    color: ${vars.Withe};
    text-transform: none;
    text-decoration: none;
    :hover {
      border-top: 1px solid ${vars.Pink};
      color: ${vars.Pink};
    }
  }
`;

export const NavLiLogin = styled.li`
  font-size: 16px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .links {
    font-size: 1.2rem;
    color: ${vars.Withe};
    text-transform: none;
    text-decoration: none;
    :hover {
      border-top: 1px solid ${vars.Pink};
      color: ${vars.Pink};
    }
  }
`;

export const Li = styled.ul`
  font-size: 16px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: none;
  @media only screen and (max-width: 700px) {
    display: none;
  }
  .links {
    font-size: 1.2rem;
    color: ${vars.Withe};
    text-transform: none;
    text-decoration: none;
  }
`;

export const ImgBox = styled.ul`
  width: 20%;
  height: 100%;
  display: flex;
`;
