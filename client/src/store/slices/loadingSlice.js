import {createSlice} from "@reduxjs/toolkit";

const initialState = false

export const loadingSlice = createSlice({
    name: 'loading',
    initialState,
    reducers: {
        setLoading: (state) => {
            return true
        },
        clearLoading: (state) => {
            return false
        }
    }
})

export const {setLoading, clearLoading} = loadingSlice.actions
export default loadingSlice.reducer
