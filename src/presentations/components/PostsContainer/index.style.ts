import styled from "styled-components";
import * as vars from "../../../app/global/colors";

export const Container = styled.div`
  width: 90%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
`;

export const TitleBox = styled.h1`
  width: 80%;
  display: grid;
  justify-content: start;
  padding-left: 8%;
  color: ${vars.Primary};
`;

export const Card = styled.div`
  margin-top: 6vh;
  position: relative;
  height: 32vh;
  width: 16vw;
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
    position: flex;
    justify-content: center;
    text-align: center;
    h1 {
      font-size: 1rem;
      height: 30%;
      line-height: 60px;
      color: ${vars.Withe};
      background: rgba(0, 0, 0, 0.4);

    }
    .number{
      display: flex;
      border-radius: 100%;
      height: 30%;
      margin: 10% 30% 10% 30%;
      background-color: ${vars.Primary};
      align-items: center;
      align-content: center;
      text-align: center;
      span{
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
      font-size: 16px;
      width: 100%;
      height: 60px;
      line-height: 60px;
      color: ${vars.Withe};
      background: rgba(0, 0, 0, 0.4);
      text-align: center;
    }
  }
  .LinkBotton{
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    height: 40px;
    text-decoration: none;

  }
  .boxIcon{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    height: 20%;
    border-top: solid 1px ${vars.Withe};
  
    .icon{
      font-size: 32px;
      :hover{
        color: ${vars.Primary};
        transition: 0.5s;
      }
    }
  }
`;




