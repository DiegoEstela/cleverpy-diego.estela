import styled from "styled-components";
import * as vars from "../../../app/global/colors";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

export const TitleH1 = styled.h1`
  color: ${vars.Withe};
  text-align: center;
`;

export const CardContainer = styled.div`
  margin-left: 5vw;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
  @media only screen and (max-width: 700px) {
    display: flex;
    flex-direction: column;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 10px;
  width: 100%;
  height: 20vh;
  color: ${vars.Withe};
  background: rgba(0, 0, 0, 0.4);
  text-align: center;
`;

export const TitleSpan = styled.span`
  color: ${vars.Primary};
  margin-right: 16px;
`;

export const TitleNoLogin = styled.h1`
  display: flex;
  width: 100%;
  text-align: center;
  color: ${vars.Text};
  font-size: 2rem;
`;

export const Card = styled.div`
  margin-top: 6vh;
  position: relative;
  height: 32vh;
  width: 16vw;
  @media only screen and (max-width: 700px) {
    width: 70vw;
    margin-left: 6vh;
  }
  :hover {
    cursor: pointer;
    .front {
      transform: perspective(600px) rotateY(180deg);
    }
    .back {
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
    position: flex;
    justify-content: center;
    text-align: center;
    h1 {
    }
    .number {
      display: flex;
      border-radius: 100%;
      height: 30%;
      margin: 10% 30% 10% 30%;
      background-color: ${vars.Primary};
      align-items: center;
      align-content: center;
      text-align: center;
      span {
        width: 100%;
        font-size: 3rem;
        font-weight: bolder;
        color: ${vars.Pink};
      }
    }
  }
  .back {
    transform: perspective(600px) rotateY(180deg);
    background-color: ${vars.Pink};
    color: ${vars.Withe};
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: ${vars.Shadow};

    h1 {
      font-size: 1em;
      width: 100%;
      height: 50px;
      color: ${vars.Withe};
      background: rgba(0, 0, 0, 0.4);
      text-align: center;
    }
  }
  .LinkBotton {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    height: 40px;
    text-decoration: none;
  }
  .boxIcon {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    height: 20%;
    border-top: solid 1px ${vars.Withe};

    .icon {
      font-size: 32px;
      :hover {
        color: ${vars.Primary};
        transition: 0.5s;
      }
    }
  }
`;
