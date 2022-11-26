import React from 'react';
import Arrow from "../../../components/common/Arrow/Arrow";
import Card from "../../../components/common/Card/Card";
import s from '../../../styles/layouts/card.module.scss'

const LocationCard = ({ location }) => {
    return (
        <Card name={location.name}>
            <div className={s.contentWrapper}>
                <p className={s.itemType}>{location.type}</p>
                <div className={s.infoWrapper}>
                    <div className={s.infoKeys}>
                        <p>Dimension:</p>
                    </div>
                    <div>
                        <p>{location.dimension}</p>
                    </div>
                </div>
                <button className={s.itemLink} disabled title='Coming soon...'>
                    <span>Details</span>
                    <Arrow />
                </button>
            </div>
        </Card>
    );
};

export default LocationCard;
