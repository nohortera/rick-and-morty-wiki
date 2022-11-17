import React, {useEffect} from 'react';
import Loader from "../../components/common/Loader/Loader";
import SearchBar from "../../components/common/SearchBar/SearchBar";
import Pagination from "../../components/common/Pagination/Pagination";
import {useDispatch, useSelector} from "react-redux";
import {loadLocations} from "../../store/thunks/locationsThunk";
import LocationCard from "./LocationCard/LocationCard";
import {clearLocationsFilters, setLocationsFilters} from "../../store/slices/locationsSlice";
import {locationsSelector} from "../../store/selectors/locationsSelector";
import AdditionalFilters from "../../components/common/AdditionalFilters/AdditionalFilters";
import s from './Locations.module.scss'

const Locations = () => {
    const locations = useSelector(locationsSelector)
    const loading = useSelector(state => state.loading)
    const error = useSelector(state => state.error)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadLocations())
    }, [dispatch])

    return (
        <div className={s.locationsContainer}>
            {loading && <Loader />}

            <h2 className={s.locationsHeader}>Locations</h2>
            <div className={s.locationsFilters}>
                <AdditionalFilters
                    setFilters={setLocationsFilters}
                    clearFilters={clearLocationsFilters}
                    filters={Object.keys(locations.filters).filter(el => el !== 'name')}
                />
                <SearchBar
                    setFilters={setLocationsFilters}
                    clearFilters={clearLocationsFilters}
                    loadItems={loadLocations}
                />
            </div>

            {error.status && <p className={s.locationsError}>{error.message}</p>}

            {
                !error.status && (
                    <>
                        <ul className={s.locationsList}>
                            {locations.data.map(el => (
                                <li className={s.locationsListItem} key={el.id}>
                                    <LocationCard location={el}/>
                                </li>
                            ))}
                        </ul>
                        <Pagination onPageChange={loadLocations} selector={locationsSelector} />
                    </>
                )
            }
        </div>
    );
};

export default Locations;
