import styled from "styled-components";
import * as vars from "../../../app/global/colors";

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 8vh;
  font-size: 16px;
  background-color: ${vars.Primary};
`;

export const NavUl = styled.ul`
  width: 40%;
  display: flex;
  flex-direction: row;
  list-style: none;
`;

export const NavLi = styled.ul`
  margin-left: 20px;
  font-size: 20px;
  width: 100%;
  font-weight: bolder;
  display: flex;
  justify-content: center;
  align-items: center;
`;
