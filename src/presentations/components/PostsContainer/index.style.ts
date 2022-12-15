import styled from "styled-components";
import * as vars from "../../../app/global/colors";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
  margin-left: 5%;
`;

export const Card = styled.div`
  margin-top: 16px;
  position: relative;
  height: 300px;
  width: 300px;
  :hover{
      cursor: pointer;
      .front{
        transform: perspective(600px) rotateY(180deg);
      }
      .back{
        transform: perspective(600px) rotateY(360deg);  
      }
  }
  .face {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: ${vars.TextSecondary};
    backface-visibility: hidden;
    border-radius: 10px;
    overflow: hidden;
    transition: 1.5s;
  }
  .front {
    transform: perspective(600px) rotateY(0deg);
    box-shadow: ${vars.Shadow};
    h1 {
      position: absolute;
      bottom: 0;
      font-size: 16px;
      width: 100%;
      height: 60px;
      line-height: 60px;
      color: ${vars.Withe};
      background: rgba(0, 0, 0, 0.4);
      text-align: center;
    }
  }
  .back {
    transform: perspective(600px) rotateY(180deg);
    background-color: ${vars.Primary};
    color: ${vars.Withe};
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: ${vars.Shadow};
    h1 {
      font-size: 16px;
      width: 100%;
      height: 60px;
      line-height: 60px;
      color: ${vars.Withe};
      background: rgba(0, 0, 0, 0.4);
      text-align: center;
    }
  }

  .AbautLink {
    border-top: solid 1px ${vars.Withe};
    height: 50px;
    line-height: 50px;
    text-align: center;
    text-decoration: none;
  }
  span {
    color: ${vars.Withe};
    font-weight: bold;
  }
`;


