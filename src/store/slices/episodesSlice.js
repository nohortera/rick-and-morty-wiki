import {createSlice} from "@reduxjs/toolkit";
import {loadEpisodes} from "../thunks/episodesThunk";

const initialState = {
    data: [],
    currentPage: 1,
    totalCount: 1,
    filters: {
        name: ''
    }
}

export const episodesSlice = createSlice({
    name: 'episodes',
    initialState,
    reducers: {
        setEpisodesCurrentPage: (state, action) => {
            state.currentPage = action.payload
        },
        setEpisodesFilters: (state, action) => {
            for (let key in action.payload) {
                state.filters[key] = action.payload[key]
            }
        },
        clearEpisodesFilters: (state) => {
            state.filters.name = ''
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loadEpisodes.fulfilled, (state, {payload}) => {
            state.data = payload.results
            state.totalCount = payload.info.pages
        })
    }
})

export const {setEpisodesCurrentPage, setEpisodesFilters, clearEpisodesFilters} = episodesSlice.actions
export default episodesSlice.reducer
