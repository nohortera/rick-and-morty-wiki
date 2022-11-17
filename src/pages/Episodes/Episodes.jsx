import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {loadEpisodes} from "../../../store/thunks/episodesThunk";
import Loader from "../../common/Loader/Loader";
import EpisodeCard from "./EpisodeCard/EpisodeCard";

const Episodes = () => {
    const episodes = useSelector(state => state.episodes.data)
    const loading = useSelector(state => state.loading)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadEpisodes())
    }, [dispatch])

    if (loading) {
        return <Loader />
    }
    return (
        <div className='container mx-auto'>
            <h2>Episodes page</h2>
            <ul className='text-lg gap-5 my-5 flex flex-wrap items-center justify-center'>
                {episodes.map(el => <li className='w-[48%]' key={el.id}><EpisodeCard episode={el}/></li>)}
            </ul>
        </div>
    );
};

export default Episodes;
