import {configureStore, ReducersMapObject, ThunkDispatch} from '@reduxjs/toolkit'
import {StateSchema} from "./StateSchema";
import {counterReducer} from "entities/Counter";
import {userReducer} from "entities/User";
import {loginReducer} from "features/AuthByUsername";
import {useDispatch} from "react-redux";
import {loginActions} from "features/AuthByUsername/model/slice/loginSlice";




export function createReduxStore(initialState?: StateSchema) {
    const rootReducer:ReducersMapObject<StateSchema> = {
        counter:counterReducer,
        user:userReducer,
        loginForm:loginReducer
    }

    return configureStore<StateSchema>({
        reducer: rootReducer,
        devTools:__IS_DEV__,
        preloadedState: initialState,
    })
}




export type AppDispatch = ThunkDispatch<StateSchema, any, any>
export const useAppDispatch = () => useDispatch<AppDispatch>()