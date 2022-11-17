import {createAsyncThunk} from "@reduxjs/toolkit";
import {clearLoading, setLoading} from "../slices/loadingSlice";
import {clearError, setError} from "../slices/errorSlice";
import {fetchAllLocations} from "../../services/locationsService";
import {setLocationsCurrentPage} from "../slices/locationsSlice";


export const loadLocations = createAsyncThunk(
    'locations/fetchAll',
    async (page = 1, thunkAPI) => {
        thunkAPI.dispatch(setLoading())
        const state = thunkAPI.getState()
        try {
            const response = await fetchAllLocations(page, state.locations.filters)
            if (response.error) throw new Error(response.error)
            thunkAPI.dispatch(setLocationsCurrentPage(page))
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
