import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {theme} from "../../../styles/Theme";
import {Link} from "../../../components/Link";
import {Button} from "../../../components/Button";
import {motion} from "framer-motion";

const Works = styled.section`
    position: relative;
    
    ${FlexWrapper} {
        gap: 30px;
    }
`

const Work = styled(motion.div)`
    background-color: ${theme.colors.secondaryBg};
    min-width:330px;
    width: 100%;
    flex-grow: 1;

    ${Link} {
        padding: 10px 0;

        & + ${Link} {
            margin-left: 20px;
        }
    }
    
    @media ${theme.media.desktop} {
        max-width: 540px;
    }
`

const ImageWrapper=styled.div`
    position: relative;

    ${Button} {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -40%);
        opacity: 0;
        transition: ${theme.animations.transition};

        &::before {
            width: 100%;
            height: 100%;
        }
    }

    &::before {
        content: "";
        display: inline-block;
        backdrop-filter: blur(2px);
        background-color: rgba(0, 0, 0, 0.3);

        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;

        opacity: 0;
        transition: ${theme.animations.transition};
    }


    &:hover {
        &::before {
            opacity: 1;
        }

        ${Button} {
            opacity: 1;
            transform: translate(-50%, -50%);
        }
    }

    @media ${theme.media.tablet} {
        &::before {
            opacity: 1;
        }

        ${Button} {
            opacity: 1;
        }
    }
`

const Image = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;`

const Description=styled.div`
    padding: 25px 20px;
`

const Title = styled.h3``

const Text = styled.p`
    margin: 14px 0 10px;`

// Tab Menu

const TabMenu = styled.nav`
    ul {
        display: flex;
        justify-content: space-between;
        max-width: 352px;
        width: 100%;
        margin: 0 auto 40px;
    }
`

const ItemList=styled.li`
   
`

export const S={
    Work,
    Works,
    ImageWrapper,
    Image,
    Description,
    Text,
    Title,
    TabMenu,
    ItemList
}