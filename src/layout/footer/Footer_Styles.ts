import {theme} from "../../styles/Theme";
import styled from "styled-components";
import {font} from "../../styles/Common";
import exp from "node:constants";

const Footer = styled.footer`
    position: relative;
    
    background-color: ${theme.colors.primaryBg};
    padding: 40px 0;`

const Name = styled.span`
    ${font({family: "'Josefin Sans', sans-serif", weight: 700, Fmax: 22, Fmin: 16})}
    letter-spacing: 3px;
`

const SocialList = styled.ul`
    margin: 30px 0;
    display: flex;
    gap: 20px;
`

const SocialItem = styled.li``

const SocialLink = styled.a`
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    width: 35px;
    height: 35px;
    color: ${theme.colors.accent};
    transition: ${theme.animations.transition};
    
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        color: ${theme.colors.primaryBg};
        transform: translateY(-4px);
    }
`

const Copyright = styled.small`
    font-weight: 400;
    font-size: 12px;
    opacity: 0.5;`

export const S={
    Footer,
    Name,
    SocialItem,
    SocialList,
    SocialLink,
    Copyright
}