import {classNames} from "shared/lib/classNames/classNames";
import {ReactNode, MouseEvent, useState, useRef, useEffect, useCallback} from "react";
import {Portal} from "shared/ui/Portal/Portal";
import * as cls from './Modal.module.scss'
import {useTheme} from "app/providers/themeProvider";

const ANIMATION_DELAY = 300;

interface ModalProps{
    className?:string,
    children?:ReactNode,
    isOpen?:boolean,
    onClose?:()=>void
}

export const Modal = (props:ModalProps) => {
    const {
        className,
        children,
        isOpen,
        onClose
    } = props;

    const [isClosing, setIsClosing] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout>>();
    const {theme} = useTheme();

    const closeHandler =useCallback( () => {
        if(onClose) {
            setIsClosing(true)
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    },[onClose])

    const mods:Record<string,boolean> = {
        [cls.opened]: isOpen,
        [cls.closing]: isClosing,
        [cls[theme]]: true
    };

    const onContentClick = (e:MouseEvent) => {
        e.stopPropagation();
    }

    const onEscapeDown=useCallback((e:KeyboardEvent)=>{
        if(e.key === 'Escape'){
            closeHandler();
        }
    },[closeHandler])

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown',onEscapeDown);
        }
        return () => {
                clearTimeout(timerRef.current);
                window.removeEventListener('keydown',onEscapeDown);
        }
    },[isOpen,onEscapeDown])

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className])}>
                <div className={cls.overlay} onClick={closeHandler}>
                    <div className={cls.content} onClick={onContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
