import * as types from './actionTypes';
import aircraftApi from '../api/mockAircraft';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadAircraftsSuccess(aircrafts) {
    return {type: types.LOAD_AIRCRAFTS_SUCCESS, aircrafts};
}

export function updateWishlistSuccess(aircraft) {
    return {type: types.ADD_REMOVE_WISHLIST_COMPARE_SUCCESS, aircraft};
}

export function updateCompareSuccess(aircraft) {
    return {type: types.ADD_REMOVE_WISHLIST_COMPARE_SUCCESS, aircraft};
}

export function loadAircrafts(){
    return function(dispatch){
        dispatch(beginAjaxCall());
        return aircraftApi.getAllAircrafts().then(aircrafts => {
            dispatch(loadAircraftsSuccess(aircrafts));
        }).catch(error => {
            throw(error);
        });
    };
}

export function updateWishlist(aircraft){
    return function(dispatch, getState){
        dispatch(beginAjaxCall());
        return aircraftApi.updateWishlist(aircraft).then(aircraft => {
            dispatch(updateWishlistSuccess(aircraft));
        }).catch(error => {
            dispatch(ajaxCallError(error));
            throw(error);
        });
    };
}

export function updateCompare(aircraft){
    return function(dispatch, getState){
        dispatch(beginAjaxCall());
        return aircraftApi.updateCompare(aircraft).then(aircraft => {
            dispatch(updateCompareSuccess(aircraft));
        }).catch(error => {
            dispatch(ajaxCallError(error));
            throw(error);
        });
    };
}