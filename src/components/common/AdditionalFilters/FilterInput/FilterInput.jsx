import React from 'react';
import s from './FilterInput.module.scss'

const FilterInput = ({ option, onChange }) => {
    return (
        <label className={s.filterLabel}>
            {option}:
            <input
                className={s.filterInput}
                placeholder='.....' type="text"
                name={option}
                onChange={onChange}
            />
        </label>
    );
};

export default FilterInput;
