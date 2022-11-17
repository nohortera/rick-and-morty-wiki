import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {loadCharacters} from "../../store/thunks/charactersThunk";
import Loader from "../../components/common/Loader/Loader";
import CharacterCard from "./CharacterCard/CharacterCard";
import Pagination from "../../components/common/Pagination/Pagination";
import {charactersSelector} from "../../store/selectors/charactersSelector";
import AdditionalFilters from "../../components/common/AdditionalFilters/AdditionalFilters";
import SearchBar from "../../components/common/SearchBar/SearchBar";
import {clearCharactersFilters, setCharactersFilters} from "../../store/slices/charactersSlice";
import s from './Characters.module.scss'

const Characters = () => {
    const characters = useSelector(state => state.characters)
    const error = useSelector(state => state.error.status)
    const loading = useSelector(state => state.loading)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadCharacters())
    }, [dispatch])

    return (
        <div className={s.charactersContainer}>
            {loading && <Loader />}
            <div>
                <h2 className={s.charactersHeader}>Characters</h2>
                <div className={s.charactersFilters}>
                    <AdditionalFilters
                        setFilters={setCharactersFilters}
                        clearFilters={clearCharactersFilters}
                        filters={Object.keys(characters.filters).filter(el => el !== 'name')}
                    />
                    <SearchBar
                        setFilters={setCharactersFilters}
                        clearFilters={clearCharactersFilters}
                        loadItems={loadCharacters}
                    />
                </div>
            </div>
            {error.status && <p className={s.charactersError}>{error.message}</p>}
            {
                !error.status && (
                    <>
                        <ul className={s.charactersList}>
                            {characters.data.map(el => (
                                <li className={s.charactersListItem} key={el.id}>
                                    <CharacterCard character={el}/>
                                </li>
                            ))}
                        </ul>
                        <Pagination onPageChange={loadCharacters} selector={charactersSelector} />
                    </>
                )
            }
        </div>
    );
};

export default Characters;
