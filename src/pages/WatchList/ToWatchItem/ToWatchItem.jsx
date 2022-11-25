import React from 'react';
import {removeToWatchItem, toggleToWatchItemStatus} from "../../../store/slices/watchListSlice";
import {useDispatch} from "react-redux";
import s from './ToWatchItem.module.scss'

const ToWatchItem = ({ item }) => {
    const dispatch = useDispatch()

    return (
        <li className={s.toWatchItem}>
            <input
                type="checkbox"
                checked={item.status}
                className={s.toWatchItemInput}
                onChange={() => dispatch(toggleToWatchItemStatus(item.id))}
            />
            <div className={s.toWatchItemFlex}>
                <p
                    className={s.toWatchItemDescription + ' ' + (item.status && s.toWatchItemDescriptionChecked)}
                >
                    {item.title}
                </p>
                <button
                    className={s.toWatchItemButton}
                    onClick={() => dispatch(removeToWatchItem(item.id))}
                >
                    Remove
                </button>
            </div>
        </li>
    );
};

export default ToWatchItem;
