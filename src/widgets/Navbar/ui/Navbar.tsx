import React, {useCallback, useState} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import * as cls from './Navbar.module.scss'
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {useTranslation} from "react-i18next";
import {LoginModal} from "features/AuthByUsername";

interface NavbarProps{
    className?:string
}

export const Navbar = ({className}:NavbarProps) => {
    const {t} = useTranslation();
    const[isAuthModal, setIsAuthModal] = useState(false);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    },[]);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    },[]);


    return (
        <div className={classNames(cls.Navbar,{}, [className])}>
            <Button theme={ButtonTheme.CLEAR_INVERTED}
                    onClick={onShowModal}
                    className={cls.links}
            >
                {t('Войти')}
            </Button>

            <LoginModal
                isOpen={isAuthModal}
                onClose={onCloseModal}
            />
        </div>
    ); 
};


