import styled from "styled-components";
import * as vars from "../../../app/global/colors";



export const ButtonAni = styled.a`
    position: relative;
    display: inline-block;
    padding: 8px 16px;
    color: ${vars.Withe};
    letter-spacing: 2px;
    font-size: 1rem;
    overflow: hidden;
    transition: 0.2s;
    background-color: ${vars.Pink};
    :hover{
        background-color: ${vars.Primary};
        box-shadow: 0 0 10px ${vars.Primary}, 
        0 0 20px ${vars.Primary}, 0 0 60px ${vars.Primary};
        transition-delay: 1s;
        .span1{
            left: 100%;
            transition: 1s;
        }
        .span2{
            top: 100%;
            transition: 1s;
            transition-delay: 0.25s;
        }
        .span3{
            right: 100%;
            transition: 1s;
            transition-delay: 0.5s;
        }
        .span4{
            bottom: 100%;
            transition: 1s;
            transition-delay: 0.75s;
        }
    }
    span{
        position: absolute;
        display: block;
    }
    .span1{
        top: 0;
        left: -100%;
        width: 100%;
        height: 2px;
        background: linear-gradient(90deg, transparent, blue);
    }
    .span2{
        top: -100%;
        right: 0;
        width: 2px;
        height: 100%;
        background: linear-gradient(180deg, transparent, blue);
    }
    .span3{
        bottom: 0;
        right: -100%;
        width: 100%;
        height: 2px;
        background: linear-gradient(270deg, transparent, blue);
    }
    .span4{
        bottom: -100%;
        left: 0;
        width: 2px;
        height: 100%;
        background: linear-gradient(270deg, transparent, blue);
    }
`;
