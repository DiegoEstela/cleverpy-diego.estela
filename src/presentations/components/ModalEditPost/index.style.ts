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
  height: 50vh;
  background: #fff;
  position: relative;
  border-radius: 5px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: ${(props: any) => (props.padding ? props.padding : "20px")};
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${vars.Primary};
  h3 {
    font-size: 1rem;
    color: ${vars.Pink};
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
	display: block;
	padding: 10px 30px;
	border-radius: 100px;
	color: #fff;
	border: none;
	background: #1766DC;
	cursor: pointer;
	font-family: 'Roboto', sans-serif;
	font-weight: 500;
	transition: .3s ease all;
	&:hover {
		background: #0066FF;
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
  .inputText{
    font-size: 1rem;
    height: 3vh;
    width: 80%;
  }
  label{
    margin:  1rem 0;
  }
  textarea{
    margin: 2%;
    padding: 2%;
    font-size: 1rem;
    height: 20vh;
    width: 80%;
    text-align: justify;
  }
`;