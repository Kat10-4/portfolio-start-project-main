import styled from "styled-components";
import {theme} from "../../styles/Theme";

const Slider = styled.div`
    max-width: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Slide = styled.div`
    text-align: center
`

const Text = styled.p``

const Name = styled.span`
    font-family: "Josefin Sans", sans-serif;
    font-weight: 600;
    font-size: 16px;
    text-transform: uppercase;
    margin: 22px 0 32px;
    display: inline-block;
`

const Pagination = styled.div`
    span {
        display: inline-block;
        border-radius: 20px;
        width: 7px;
        height: 7px;
        background: rgba(255, 255, 255, 0.5);
        
        &+span{
            margin-left: 5px;
        }
        
        &.active{
            background-color: ${theme.colors.accent};
            width: 20px;
        }
    }
`

export const S={
    Slider,
    Slide,
    Text,
    Name,
    Pagination
}