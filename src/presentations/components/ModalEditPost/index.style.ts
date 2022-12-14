import styled from "styled-components";
import * as vars from "../../../app/global/colors";

export const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: "rgba(0,0,0,.5)";
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContainer = styled.div`
  width: 30vw;
  height: auto;
  background: #fff;
  position: relative;
  border-radius: 5px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: "20px";
  @media only screen and (max-width: 700px) {
    width: 90vw;
    height: 70vh;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${vars.Primary};
  h3 {
    width: 80%;
    font-size: 1.5rem;
    color: ${vars.Pink};
  }
  @media only screen and (max-width: 700px) {
    h3 {
      width: 70vw;
    }
  }
`;

export const CloseBoton = styled.div`
  position: absolute;
  top: 24px;
  right: 32px;
  border: none;
  border-radius: 5px;
  .icon {
    font-size: 2.5rem;
    color: ${vars.Pink};
    :hover {
      cursor: pointer;
      transition: 0.3s ease all;
      color: ${vars.Secondary};
    }
  }
`;

export const ButtonModal = styled.button`
  font-size: 1.5rem;
  display: block;
  margin: 24px 0;
  padding: 10px 30px;
  border-radius: 100px;
  color: ${vars.Text};
  border: none;
  background: ${vars.Pink};
  cursor: pointer;
  &:hover {
    background: ${vars.Primary};
  }
  @media only screen and (max-width: 700px) {
    padding: 10px 30px;
    font-size: 1.5rem;
    textarea {
      height: 30vh;
    }
  }
`;

export const Contain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-size: 24px;
    margin-bottom: 10px;
  }
  p {
    font-size: 18px;
    margin-bottom: 20px;
  }
  .inputText {
    font-size: 1rem;
    height: 3vh;
    width: 84%;
    border-radius: 5px;
  }
  label {
    margin: 1rem 0;
  }
  textarea {
    padding: 2%;
    font-size: 1rem;
    height: 24vh;
    width: 80%;
    border-radius: 5px;
    text-align: justify;
  }
`;
