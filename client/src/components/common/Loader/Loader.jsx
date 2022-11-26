import React from 'react';
import s from './Loader.module.scss'
import img from '../../../assets/pickle-rick.png'

const Loader = () => {
    return (
        <div className={s.loaderWrapper}>
            <img
                className={s.loaderImage}
                src={img}
                alt="Loading..."
            />
        </div>
    );
};

export default Loader;
