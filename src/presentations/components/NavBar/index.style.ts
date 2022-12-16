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

export const NavLi = styled.ul`
  font-size: 1em;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .links {
    font-size: 2rem;
    color: ${vars.Withe};
    text-transform: none;
    text-decoration: none;
    :hover {
      color: ${vars.Pink};
    }
  }
`;

export const ImgBox = styled.ul`
  width: 20%;
  height: 100%;
  display: flex;

`;
