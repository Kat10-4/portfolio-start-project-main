import styled from "styled-components";
import {theme} from "../styles/Theme";
import {font} from "../styles/Common";

export const SectionTitle = styled.h2`
    ${font ({family:"'Josefin Sans', sans-serif", weight:600,Fmax:36,Fmin:30})}
    
    text-align: center;
    letter-spacing: 0.14em;
    margin-bottom: 90px;

    position: relative;

    &::before {
        content: "";
        display: inline-block;
        background-color: ${theme.colors.accent};
        width: 55px;
        height: 1px;

        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: -30px;
        
        @media ${theme.media.mobile} {
            bottom: -24px;
        }
    }
    
`

