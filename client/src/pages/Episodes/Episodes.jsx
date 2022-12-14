import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {loadEpisodes} from "../../store/thunks/episodesThunk";
import Loader from "../../components/common/Loader/Loader";
import EpisodeCard from "./EpisodeCard/EpisodeCard";
import Pagination from "../../components/common/Pagination/Pagination";
import {episodesSelector} from "../../store/selectors/episodesSelector";
import {clearEpisodesFilters, setEpisodesFilters} from "../../store/slices/episodesSlice";
import SearchBar from "../../components/common/SearchBar/SearchBar";
import s from '../../styles/layouts/page.module.scss'

const Episodes = () => {
    const episodes = useSelector(state => state.episodes.data)
    const loading = useSelector(state => state.loading)
    const error = useSelector(state => state.error)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadEpisodes())
    }, [dispatch])

    return (
        <div className={s.pageContainer}>
            {loading && <Loader />}
            <h2 className={s.pageHeader}>Episodes</h2>
            <SearchBar
                setFilters={setEpisodesFilters}
                clearFilters={clearEpisodesFilters}
                loadItems={loadEpisodes}
            />
            {error.status && <p className={s.pageError}>{error.message}</p>}
            {
                !error.status && !loading && (
                    <>
                        <ul className={s.pageList}>
                            {episodes.map(el => (
                                <li className={s.pageListItem} key={el.id}>
                                    <EpisodeCard episode={el}/>
                                </li>
                            ))}
                        </ul>
                        <Pagination onPageChange={loadEpisodes} selector={episodesSelector} />
                    </>
                )
            }
        </div>
    );
};

export default Episodes;
