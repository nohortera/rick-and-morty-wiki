import React from 'react';
import {Link} from "react-router-dom";
import s from './Header.module.scss'
import img from '../../../assets/logo.png'

const Header = () => {

    return (
        <div className={s.headerWrapper}>
            <div className={s.headerWrapperContainer}>
                <div>
                    <img
                        className={s.headerImage}
                        src={img}
                        alt="logo"
                    />
                </div>
                <nav className={s.headerNavbar}>
                    <Link to='/characters'>Characters</Link>
                    <Link to='/episodes'>Episodes</Link>
                    <Link to='/locations'>Locations</Link>
                    <Link to='/watchlist'>My watch list</Link>
                </nav>
            </div>
        </div>
    );
};

export default Header;
