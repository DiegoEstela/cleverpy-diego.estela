import styled from "styled-components";
import * as vars from "../../../app/global/colors";

export const BodyLogin = styled.div`
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  background-color: ${vars.Text};
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  text-align: center;
`;

export const Logo = styled.img`
  width: 60%;
`;


export const CardLogin = styled.div`
  color: ${vars.Withe};
  margin-top: 5vh;
  background-color: ${vars.Primary};
  width: 30vw;
  height: 50vh;
  padding: 10px;
  text-align: center;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.507);
  border-radius: 10px;
 
  .error {
  padding: 10px;
  margin: 10px 0;
  background-color: ${vars.Pink};
  color: ${vars.Text};
  font-size: bolder;
  border-radius: 10px;
}
.logout-button {
  background-color: rgb(214, 213, 201);
  color: rgba(238, 43, 43, 0.685);
  border: none;
  padding: 15px 10px;
  margin: 20px;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
}

.logout-button:hover {
  background-color: rgba(128, 124, 124, 0.527);
}

.linkLogin {
  color: ${vars.Text};
  text-decoration: none;
  text-transform: none;
  span{
    color: ${vars.Pink}
  }
}
`
export const Input = styled.input`
  display: flex;
  width: 60%;
  height: 32px;
  margin: 2% 20%;
  border: none;
  padding: 10px;
  font-size: 20px;

`

export const WarningInput = styled.span`
  display: flex;
  justify-content: center;

`

export const ButtonModal = styled.button`
  width: 40%;
  margin: 2% 10%;
  text-align: center;
	padding: 10px 30px;
  font-size: 1.5rem;
	border-radius: 100px;
	color: #fff;
	border: none;
	background: ${vars.Pink};
	cursor: pointer;
	font-family: 'Roboto', sans-serif;
	transition: .3s ease all;
`;



export const CardHeadre = styled.body`
 margin: 10px 0;
`;








