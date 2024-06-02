import {classNames} from "shared/lib/classNames/classNames";
import * as cls from './Input.module.scss'
import {ChangeEvent, InputHTMLAttributes, memo, useEffect, useRef, useState} from "react";

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
    className?: string,
    value?: string,
    onChange?: (value: string) => void
    autoFocus?: boolean,
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        autoFocus,
        ...otherProps
    } = props;

    const ref =useRef<HTMLInputElement>();
    const [isFocus, setIsFocus] = useState(false);
    const [caretPosition, setCaretPosition] = useState(0);

    useEffect(() => {
        if (autoFocus) {
            setIsFocus(true);
            ref.current?.focus();
        }
    }, [autoFocus])

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
        setCaretPosition(e.target.value.length)
    }

    const onFocus = () => {
        setIsFocus(true);
    }

    const onBlur = () => {
        setIsFocus(false);
    }
    const onSelect = (e: any) => {
        setCaretPosition(e.target.selectionStart || 0)
    }

    return (
        <div className={classNames(cls.InputWrapper, {}, [className])}>
            {placeholder && (
                <div className={cls.placeholder}>
                    {`${placeholder}>`}
                </div>
            )}
            <div className={cls.caretWrapper}>
                <input
                    ref={ref}
                    type={type}
                    value={value}
                    onChange={onChangeHandler}
                    {...otherProps}
                    className={cls.input}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSelect={onSelect}
                    {...otherProps}
                />
                {isFocus && (
                    <span className={cls.caret}
                          style={{left: caretPosition + 'ch'}}
                    />
                )}
            </div>
        </div>
    );
});
