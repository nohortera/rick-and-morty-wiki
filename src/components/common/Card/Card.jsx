import React from 'react';
import s from "./Card.module.scss"

const Card = ({name, image, children}) => {
    return (
        <div className={s.cardWrapper}>
            {image && <img className={s.cardImage} src={image} alt="avatar"/>}

            <div className={s.cardDescription}>
                <h3 className={s.cardDescriptionHeader}>{name}</h3>

                {children}

            </div>
        </div>
    );
};

export default Card;
