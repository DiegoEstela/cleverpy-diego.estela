import styled from "styled-components";
import * as vars from "../../../app/global/colors";

export const Container = styled.div`
  display: flex;
  justify-content: center;

`

export const DivPost = styled.div`

  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-between; 
  margin-top: 10vh;
  padding: 5vh 0;
  width: 50vw;
  height: 60vh;
  box-shadow: ${vars.Shadow};
  border-radius: 16px;
  background-color: ${vars.Pink};
`


export const Title = styled.h1`
    font-size: 2rem;
    text-align: center;
    color: ${vars.Withe};
`
export const Paragraph = styled.p`
    padding: 0 2%;
    font-size: 1.5rem;
    text-align: justify;
    color: ${vars.Withe}
`
