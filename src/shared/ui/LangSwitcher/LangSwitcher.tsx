import {classNames} from "shared/lib/classNames/classNames";
import * as cls from './LangSwitcher.module.scss'
import {useTranslation} from "react-i18next";
import React from "react";
import {Button, ButtonTheme} from "shared/ui/Button/Button";

interface LangSwitcherProps{
    className?:string,
    short?:boolean
}

export const LangSwitcher = ({className,short}:LangSwitcherProps) => {
    const {t, i18n}=useTranslation();

    const changeLanguage=()=>{
        i18n.changeLanguage(i18n.language==='ru'?'en':'ru');
    }

    return (
            <Button className={classNames(cls.LangSwitcher, {}, [className])}
                theme={ButtonTheme.CLEAR}
                onClick={changeLanguage}>
                {t(short?'Короткий язык':'Язык')}
            </Button>
    );
};
