import React from 'react';
import Card from "../../../components/common/Card/Card";
import Arrow from "../../../components/common/Arrow/Arrow";
import s from '../../../styles/layouts/card.module.scss'

const EpisodeCard = ({episode}) => {
    return (
        <Card name={episode.name}>
            <div className={s.contentWrapper}>
                <p className={s.itemType}>{episode.episode}</p>
                <div className={s.infoWrapper}>
                    <div className={s.infoKeys}>
                        <p>Release date:</p>
                    </div>
                    <div>
                        <p>{episode.air_date}</p>
                    </div>
                </div>
                <button className={s.itemLink}>
                    <span>Details</span>
                    <Arrow />
                </button>
            </div>
        </Card>
    );
};

export default EpisodeCard;
