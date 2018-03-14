import initialState from './initialState';
import * as types from '../actions/actionTypes';

export default function aircraftsReducer(state = initialState.aircrafts, action){
    switch(action.type){
        case types.LOAD_AIRCRAFTS_SUCCESS:
            return action.aircrafts;

        case types.ADD_REMOVE_WISHLIST_COMPARE_SUCCESS:
          return action.aircraft;
        
        default:
            return state;
    }
}