import {createSlice} from "@reduxjs/toolkit";
import {loadLocations} from "../thunks/locationsThunk";

const initialState = {
    data: [],
    currentPage: 1,
    totalCount: 1,
    filters: {
        name: '',
        type: '',
        dimension: ''
    }
}

export const locationsSlice = createSlice({
    name: 'locations',
    initialState,
    reducers: {
        setLocationsCurrentPage: (state, action) => {
            state.currentPage = action.payload
        },
        setLocationsFilters: (state, action) => {
            for (let key in action.payload) {
                state.filters[key] = action.payload[key]
            }
        },
        clearLocationsFilters: (state) => {
            state.filters.name = ''
            state.filters.type = ''
            state.filters.dimension = ''
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loadLocations.fulfilled, (state, {payload}) => {
            state.data = payload.results
            state.totalCount = payload.info.pages
        })
    }
})

export const {setLocationsCurrentPage, setLocationsFilters, clearLocationsFilters} = locationsSlice.actions
export default locationsSlice.reducer
