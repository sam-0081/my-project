import {classNames} from "shared/lib/classNames/classNames";
import * as cls from './Counter.module.scss'
import {Button} from "shared/ui/Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {counterActions} from "entities/Counter/model/slice/counterSlice";
import {StateSchema} from "app/providers/StoreProvider/config/StateSchema";
import {getCounterValue} from "entities/Counter/model/selectors/getCounterValue/getCounterValue";

interface CounterProps{
    className?:string
}

export const Counter = ({className}:CounterProps) => {

    const dispatch = useDispatch()
    const counterValue = useSelector(getCounterValue)

    const increment = () => {
        dispatch(counterActions.increment())
    }
    const decrement = () => {
        dispatch(counterActions.decrement())
    }
    return (
        <div >
            <h1>value={counterValue}</h1>
            <Button onClick={increment}>
                increment
            </Button>
            <Button onClick={decrement}>
                decrement
            </Button>
        </div>
    );
};
