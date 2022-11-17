import React, {useCallback, useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import s from './SearchBar.module.scss'

const SearchBar = ({setFilters, clearFilters, loadItems}) => {
    const [name, setName] = useState('')
    const dispatch = useDispatch()

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(setFilters({name}))
        dispatch(loadItems())
    }

    const clearFiltersCallback = useCallback(() => {
        dispatch(clearFilters())
    }, [dispatch, clearFilters])

    useEffect(() => {
        return clearFiltersCallback()
    }, [clearFiltersCallback])

    return (
        <form onSubmit={handleSubmit} className={s.searchBarForm}>
            <input
                className={s.searchBarFormInput}
                type="text"
                placeholder='Enter the name...'
                onChange={e => setName(e.target.value)}
            />
            <button className={s.searchBarFormButton}>
                Search
            </button>
        </form>
    );
};

export default SearchBar;
