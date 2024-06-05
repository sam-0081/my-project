import {classNames} from "shared/lib/classNames/classNames";
import * as cls from './LoginForm.module.scss'
import {useTranslation} from "react-i18next";
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {Input} from "shared/ui/input/Input";
import {useSelector} from "react-redux";
import {memo, useCallback} from "react";
import {loginActions} from "../../model/slice/loginSlice";
import {getLoginState} from "../../model/selectors/getLoginState/getLoginState";
import {loginByUsername} from "../../model/services/loginByUsername";
import {useAppDispatch} from "app/providers/StoreProvider/config/store";
import {Text, TextTheme} from "shared/ui/Text/Text";

interface LoginFormProps {
    className?: string
}


export const LoginForm = memo(({className}: LoginFormProps) => {
    const {t} = useTranslation();
    // const dispatch = useDispatch();
    const dispatch = useAppDispatch();
    const {username, password, error, isLoading} = useSelector(getLoginState);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value))
    }, [dispatch])

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value))
    }, [dispatch])

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, password, username]);


    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Text title={t('Форма авторизации')} />
            {error && <Text text={error} theme={TextTheme.ERROR} />}
            <Input
                autoFocus
                type={"text"}
                className={cls.input}
                placeholder={t('Введите username')}
                onChange={onChangeUsername}
                value={username}
            />
            <Input
                type={"text"}
                className={cls.input}
                placeholder={t('Введите username')}
                onChange={onChangePassword}
                value={password}
            />
            <Button
                theme={ButtonTheme.OUTLINE}
                className={cls.loginBtn}
                disabled={isLoading}
                onClick={onLoginClick}
            >
                {t('Войти')}
            </Button>
        </div>
    );
});

