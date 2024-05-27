import {classNames} from "shared/lib/classNames/classNames";
import * as cls from './ThemeSwitcher.module.scss'
import React from "react";
import {Theme, useTheme} from "app/providers/themeProvider";
import LightIcon from 'shared/assets/icons/theme-light.svg'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import {Button, ButtonTheme} from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
    const {theme, toggleTheme} = useTheme();

    return (
        <Button theme={ButtonTheme.CLEAR} className={classNames(cls.ThemeSwitcher, {}, [])} onClick={toggleTheme}>
            {theme === Theme.DARK ? <DarkIcon/> : <LightIcon/>}
        </Button>

    );
};
