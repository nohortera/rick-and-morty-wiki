import React from 'react';
import Card from "../../../common/Card/Card";
import Arrow from "../../../common/Arrow/Arrow";

const EpisodeCard = ({episode}) => {
    return (
        <Card name={episode.name}>
            <div className='flex flex-col justify-between h-full'>
                <p className='text-sm text-gray-300'>{episode.episode}</p>
                <div className='flex space-x-5'>
                    <div className='text-gray-300'>
                        <p>Release date:</p>
                    </div>
                    <div>
                        <p>{episode.air_date}</p>
                    </div>
                </div>
                <button className='text-left inline-block flex items-center space-x-2 text-blue-600 group w-fit'>
                    <span>Details</span>
                    <Arrow />
                </button>
            </div>
        </Card>
    );
};

export default EpisodeCard;
