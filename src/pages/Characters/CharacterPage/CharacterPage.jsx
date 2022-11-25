import React, {useCallback, useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {clearLoading, setLoading} from "../../../store/slices/loadingSlice";
import Loader from "../../../components/common/Loader/Loader";
import s from './CharacterPage.module.scss'
import Arrow from "../../../components/common/Arrow/Arrow";

const CharacterPage = () => {
    const {id} = useParams()
    const [character, setCharacter] = useState({})
    const characters = useSelector(state => state.characters.data)
    const loading = useSelector(state => state.loading)
    const dispatch = useDispatch()

    const fetchCharacter = useCallback(async () => {
        dispatch(setLoading())
        return fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then(character => character.json())
    }, [id, dispatch])

    useEffect(() => {
        if (!characters.length) {
            fetchCharacter()
                .then(character => setCharacter(character))
                .then(() => setTimeout(() => {
                    dispatch(clearLoading())
                }, 1000))
        } else {
            setCharacter(characters.find(el => el.id === +id))
        }
    }, [fetchCharacter, characters, dispatch, id])

    return (
        <div className='container my-20 mx-auto'>
            {loading && <Loader />}

            <div className='rounded-xl max-w-[900px] bg-white mx-auto p-10 shadow-custom min-h-[450px]'>
                <div className='rounded-md w-1/3 float-left mr-5'>
                    <img className='rounded-md w-full' src={character.image} alt="Character"/>
                    <Link to='/characters'>
                        <div className={s.backLink}>
                            <Arrow size={'25'} />
                            <span>Back</span>
                        </div>
                    </Link>
                </div>
                <div className={s.info}>
                    <p>Name:</p>
                    <p>{character.name}</p>
                    <p>Gender:</p>
                    <p>{character.gender}</p>
                    <p>Species:</p>
                    <p>{character.species}</p>
                    <p>Status:</p>
                    <p>{character.status}</p>
                    {character.type && <p>Type:</p>}
                    {character.type && <p>{character.type}</p>}
                    <p>Origin:</p>
                    <p>{character.origin?.name}</p>
                    <p>Location:</p>
                    <p>{character.location?.name}</p>
                </div>
            </div>
        </div>
    );
};

export default CharacterPage;
