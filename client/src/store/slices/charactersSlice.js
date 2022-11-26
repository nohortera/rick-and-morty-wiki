import {createSlice} from "@reduxjs/toolkit";
import {loadCharacters} from "../thunks/charactersThunk";

const initialState = {
    data: [],
    currentPage: 1,
    totalCount: 1,
    filters: {
        species: '',
        status: '',
        gender: '',
    }
}

export const charactersSlice = createSlice({
    name: 'characters',
    initialState,
    reducers: {
        setCharactersCurrentPage: (state, action) => {
            state.currentPage = action.payload
        },
        setCharactersFilters: (state, action) => {
            for (let key in action.payload) {
                state.filters[key] = action.payload[key]
            }
        },
        clearCharactersFilters: (state) => {
            for (let key in state.filters) {
                state.filters[key] = ''
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loadCharacters.fulfilled, (state, {payload}) => {
            state.data = payload.results
            state.totalCount = payload.info.pages
        })
    }
})

export const {setCharactersCurrentPage, setCharactersFilters, clearCharactersFilters} = charactersSlice.actions
export default charactersSlice.reducer
