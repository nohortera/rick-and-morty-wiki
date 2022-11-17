import React from 'react';
import Card from "../../../components/common/Card/Card";
import Arrow from "../../../components/common/Arrow/Arrow";
import s from '../../../styles/layouts/card.module.scss'

const CharacterCard = ({character}) => {
    return (
        <Card name={character.name} image={character.image}>
            <div className={s.contentWrapper}>
                <p className={s.itemType}>{character.species}</p>
                <div className={s.infoWrapper}>
                    <div className={s.infoKeys}>
                        <p>Gender:</p>
                        <p>Status:</p>
                    </div>
                    <div>
                        <p>{character.gender}</p>
                        <p>{character.status}</p>
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

export default CharacterCard;
