import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {loadCharacters} from "../../../store/thunks/charactersThunk";
import Loader from "../../common/Loader/Loader";
import CharacterCard from "./CharacterCard/CharacterCard";
import Pagination from "../../common/Pagination/Pagination";
import {charactersSelector} from "../../../store/selectors/charactersSelector";

const Characters = () => {
    const characters = useSelector(state => state.characters.data)
    const loading = useSelector(state => state.loading)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadCharacters())
    }, [dispatch])

    return (
        <div className='container mx-auto mt-20'>
            {loading && <Loader />}
            <h2 className='text-4xl font-bold text-center my-5 mb-16'>Characters page</h2>
            <ul className='text-lg gap-5 my-5 flex flex-wrap items-center justify-center'>
                {characters.map(el => <li className='w-[48%]' key={el.id}><CharacterCard character={el}/></li>)}
            </ul>

            <Pagination onPageChange={loadCharacters} selector={charactersSelector} />
        </div>
    );
};

export default Characters;
