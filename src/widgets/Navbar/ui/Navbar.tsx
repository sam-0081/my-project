import React, {useCallback, useState} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import * as cls from './Navbar.module.scss'
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {Modal} from "shared/ui/Modal/Modal";
import {useTranslation} from "react-i18next";

interface NavbarProps{
    className?:string
}

export const Navbar = ({className}:NavbarProps) => {
    const {t} = useTranslation();
    const[isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModal(prev => !prev);
    },[]);


    return (
        <div className={classNames(cls.Navbar,{}, [className])}>
            <Button theme={ButtonTheme.CLEAR_INVERTED}
                    onClick={onToggleModal}
                    className={cls.links}
            >
                {t('Войти')}
            </Button>

            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam asperiores beatae corporis, nobis perferendis qui quod repellat similique sit suscipit?
            </Modal>

        </div>
    ); 
};


