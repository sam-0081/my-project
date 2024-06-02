import {classNames} from "shared/lib/classNames/classNames";
import * as cls from './LoginModal.module.scss'
import {useTranslation} from "react-i18next";
import {LoginForm} from "../LoginForm/LoginForm";
import {Modal} from "shared/ui/Modal/Modal";

interface LoginModalProps {
    className?: string,
    isOpen?: boolean,
    onClose?: () => void
}

export const LoginModal = ({className, isOpen, onClose}: LoginModalProps) => {
    const {t} = useTranslation();

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            lazy
        >
            <LoginForm/>

        </Modal>
    );
};
