import React, {useEffect, useState} from 'react';
import Loader from "../../components/common/Loader/Loader";
import {useDispatch, useSelector} from "react-redux";
import {addToWatchItem} from "../../store/slices/watchListSlice";
import {loadWatchList} from "../../store/thunks/watchListThunk";
import ToWatchItem from "./ToWatchItem/ToWatchItem";
import s from './WatchList.module.scss'

const WatchList = () => {
    const [title, setTitle] = useState('')
    const loading = useSelector(state => state.loading)
    const watchList = useSelector(state => state.watchList)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadWatchList())
    }, [dispatch])

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(addToWatchItem(title))
        setTitle('')
    }

    return (
        <div className={s.watchListContainer}>
            {loading && <Loader />}
            <h2 className={s.watchListHeader}>My watch list</h2>
            <form className={s.watchListForm} onSubmit={handleSubmit}>
                <input className={s.watchListFormInput} placeholder='I`d like to watch...' type="text" value={title} onChange={event => setTitle(event.target.value)} />
                <button className={s.watchListFormButton}>Add to watch</button>
            </form>
            {!watchList.length && !loading && <p className=''>Add what you want to watch</p>}

            {!!watchList.length && !loading && (
                <ul className={s.watchList}>
                    {watchList.map(item => <ToWatchItem key={item.id} item={item} />)}
                </ul>
            )}
        </div>
    );
};

export default WatchList;
