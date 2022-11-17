import {combineReducers, configureStore} from "@reduxjs/toolkit";
import charactersReducer from './slices/charactersSlice'
import episodesReducer from './slices/episodesSlice'
import locationsReducer from './slices/locationsSlice'
import watchListReducer from './slices/watchListSlice'
import loadingReducer from './slices/loadingSlice'
import errorReducer from './slices/errorSlice'

const rootReducer = combineReducers({
    characters: charactersReducer,
    episodes: episodesReducer,
    locations: locationsReducer,
    watchList: watchListReducer,
    loading: loadingReducer,
    error: errorReducer
})

export const setupStore = (initialState) => {
    return configureStore({
        reducer: rootReducer,
        preloadedState: initialState
    })
}

export const store = setupStore()
