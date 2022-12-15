import styled from "styled-components";
import * as vars from "../../../app/global/colors";

export const Container = styled.div`
  display: flex;
  justify-content: center;
`

export const DivPost = styled.div`
margin-top: 10vh;
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 50vw;
  height: 60vh;
  box-shadow: ${vars.Shadow};
  border-radius: 16px;
`


export const Title = styled.h1`
    font-size: 16px;
    text-align: center;
`

