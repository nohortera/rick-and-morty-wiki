import {createAsyncThunk} from "@reduxjs/toolkit";
import {clearLoading, setLoading} from "../slices/loadingSlice";
import {clearError, setError} from "../slices/errorSlice";
import {fetchAllCharacters} from "../../services/charactersService";
import {setCharactersCurrentPage} from "../slices/charactersSlice";


export const loadCharacters = createAsyncThunk(
    'characters/fetchAll',
    async (page = 1, thunkAPI) => {
        thunkAPI.dispatch(setLoading())
        const state = thunkAPI.getState()
        try {
            const response = await fetchAllCharacters(page, state.characters.filters)
            if (response.error) throw new Error(response.error)
            thunkAPI.dispatch(setCharactersCurrentPage(page))
            thunkAPI.dispatch(clearError())
            setTimeout(() => {
                thunkAPI.dispatch(clearLoading())
            }, 1000)
            return response
        } catch (e) {
            thunkAPI.dispatch(setError(e.message))
            setTimeout(() => {
                thunkAPI.dispatch(clearLoading())
            }, 1000)
        }
    }
)
