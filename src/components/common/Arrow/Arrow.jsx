import React from 'react';
import s from './Arrow.module.scss'

const Arrow = () => {
    return (
        <svg className={s.arrowSvg} width="14" height="14" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.5 9L8.5 1M8.5 1H0.5M8.5 1V9"/>
        </svg>
    );
};

export default Arrow;
