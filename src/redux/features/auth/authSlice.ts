import { createSlice } from "@reduxjs/toolkit"

type TAuthState = {
    user : null | object ,
    token : null | string
}

const initialState : TAuthState = {
    user : null,
    token : null
}

const authSlice = createSlice({
    name : "auth",
    initialState,
    reducers : {
        setUser : (state, action) => {
      const {user, toke} = action.payload ;
      state.user = user;
      state.token = toke
        },
        Logout : (state) => {
            state.user =  null;
            state.token = null
        }
    }
})


export const {setUser, Logout} = authSlice.actions
export default authSlice.reducer