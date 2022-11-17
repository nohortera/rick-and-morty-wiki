import React from 'react';
import Card from "../../../common/Card/Card";
import Arrow from "../../../common/Arrow/Arrow";

const CharacterCard = ({character}) => {
    return (
        <Card name={character.name} image={character.image}>
            <div className='flex flex-col justify-between h-full'>
                <p className='text-sm text-gray-300'>{character.species}</p>
                <div className='flex space-x-5'>
                    <div className='text-gray-300'>
                        <p>Gender:</p>
                        <p>Status:</p>
                    </div>
                    <div>
                        <p>{character.gender}</p>
                        <p>{character.status}</p>
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

export default CharacterCard;
