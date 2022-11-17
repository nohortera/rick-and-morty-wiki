import React from 'react';
import {useDispatch} from "react-redux";
import FilterInput from "./FilterInput/FilterInput";
import s from './AdditionalFilter.module.scss'

const AdditionalFilters = ({ setFilters, clearFilters, filters }) => {
    const dispatch = useDispatch()
    const handleChange = (event) => {
        dispatch(setFilters({[event.target.name]: event.target.value}))
    }

    return (
        <div className={s.filterWrapper}>
            <h4 className={s.filterHeader}>Additional params</h4>
            {filters.map((filter, i) => <FilterInput key={i} onChange={handleChange} option={filter} />)}
        </div>
    );
};

export default AdditionalFilters;
