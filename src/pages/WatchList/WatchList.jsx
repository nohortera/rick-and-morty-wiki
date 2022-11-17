import React, {useEffect, useState} from 'react';
import Loader from "../../components/common/Loader/Loader";
import {useDispatch, useSelector} from "react-redux";
import {addToWatchItem} from "../../store/slices/watchListSlice";
import {loadWatchList} from "../../store/thunks/watchListThunk";
import ToWatchItem from "./ToWatchItem/ToWatchItem";

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
        <div className='container mx-auto mt-20 flex flex-col items-center'>
            {loading && <Loader />}
            <h2 className='text-4xl font-semibold text-center my-5'>My watch list</h2>
            <form className='space-x-5 flex items-center my-10 ml-5' onSubmit={handleSubmit}>
                <input className='w-[400px] h-[50px] box-border border rounded-md p-[10px] text-lg
                border-blue-600 focus:border-blue-600 shadow-custom placeholder:text-gray-300 placeholder:font-mono' placeholder='I`d like to watch...' type="text" value={title} onChange={event => setTitle(event.target.value)} />
                <button className='px-5 h-[50px] text-white bg-blue-600 hover:shadow-md hover:shadow-blue-400
                duration-300 rounded-md'>Add to watch</button>
            </form>
            {!watchList.length && <p className='text-gray-300 text-4xl mt-20 text-center'>Add what you want to watch</p>}

            {!!watchList.length && (
                <div className='rounded-xl shadow-custom w-full border bg-white w-3/5 mb-10'>
                    <ul className='py-5 px-10'>
                        {watchList.map(item => <ToWatchItem key={item.id} item={item} />)}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default WatchList;
