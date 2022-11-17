import {createSlice} from "@reduxjs/toolkit";
import {updateStorage} from "../../services/watchListService";

const initialState = []

export const watchListSlice = createSlice({
    name: 'watchList',
    initialState,
    reducers: {
        setWatchList: (state, action) => {
            return action.payload
        },
        addToWatchItem: (state, action) => {
            state.push({
                id: Date.now(),
                title: action.payload,
                status: false
            })
            updateStorage(state)
        },
        removeToWatchItem: (state, action) => {
            state.splice(state.findIndex(item => item.id === action.payload), 1)
            updateStorage(state)
        },
        toggleToWatchItemStatus: (state, action) => {
            const index = state.findIndex(item => item.id === action.payload)
            state[index].status = !state[index].status
            updateStorage(state)
        }
    }
})

export const {setWatchList, addToWatchItem, removeToWatchItem, toggleToWatchItemStatus} = watchListSlice.actions
export default watchListSlice.reducer
