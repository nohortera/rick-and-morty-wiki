import {createAsyncThunk} from "@reduxjs/toolkit";
import {clearLoading, setLoading} from "../slices/loadingSlice";
import {clearError, setError} from "../slices/errorSlice";
import {fetchAllEpisodes} from "../../services/episodesService";
import {setEpisodesCurrentPage} from "../slices/episodesSlice";


export const loadEpisodes = createAsyncThunk(
    'episodes/fetchAll',
    async (page = 1, thunkAPI) => {
        thunkAPI.dispatch(setLoading())
        const state = thunkAPI.getState()
        try {
            const response = await fetchAllEpisodes(page, state.episodes.filters)
            if (response.error) throw new Error(response.error)
            thunkAPI.dispatch(setEpisodesCurrentPage(page))
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
