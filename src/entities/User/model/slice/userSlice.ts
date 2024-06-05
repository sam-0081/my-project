import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {User, UserSchema} from "entities/User";
import {USER_LOCAL_STORAGE_KEY} from "shared/const/localstorage";

const initialState:UserSchema = {

}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action:PayloadAction<User>) => {
            state.authData = action.payload
        },
        initAuthData: (state) => {
            const user = localStorage.getItem(USER_LOCAL_STORAGE_KEY)
            if (user) {
                state.authData = JSON.parse(user)
            }
        },
        logout: (state) => {
            state.authData = undefined
            localStorage.removeItem(USER_LOCAL_STORAGE_KEY)
        }
    }
})

export const {
    reducer: userReducer,
    actions: userActions
} = userSlice
