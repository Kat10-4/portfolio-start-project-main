import React, {useState} from 'react';
import {Menu} from "../menu/Menu";
import {S} from '../HeaderMenu_Styles'


export const MobileMenu: React.FC= () => {
    const [menuIsOpen, setmenuIsOpen] = useState(false)
    const onBurgerBtnClick = () => {
        setmenuIsOpen(!menuIsOpen)
    }

    return (
        <div>
            <S.MobileMenu>
                <S.BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
                    <span></span>
                </S.BurgerButton>
                <S.MobileMenuPopUp isOpen={menuIsOpen} onClick={()=>{setmenuIsOpen(false)}}>
                    <Menu/>
                </S.MobileMenuPopUp>
            </S.MobileMenu>
        </div>
    );
};







