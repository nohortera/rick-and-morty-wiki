import {createAsyncThunk} from "@reduxjs/toolkit";
import {clearLoading, setLoading} from "../slices/loadingSlice";
import {getFromStorage} from "../../services/watchListService";
import {setWatchList} from "../slices/watchListSlice";

export const loadWatchList = createAsyncThunk(
    'watchList/getAll',
    (_, thunkAPI) => {
        thunkAPI.dispatch(setLoading())
        const result = getFromStorage()
        thunkAPI.dispatch(setWatchList(result))
        setTimeout(() => {
            thunkAPI.dispatch(clearLoading())
        }, 1000)
    }
)


