import expect from 'expect';
import aircraftsReducer from './aircraftsReducer';
import * as actions from '../actions/wishlist_compareAction.js';

describe('aircraft Reducer', () => {
    it('Should update compare value', () => {
        const initialState = [
            {aircraftID: '0', compare: false},
            {aircraftID: '1', compare: false},
            {aircraftID: '2', compare: false},
        ];

        const action = actions.updateCompare(initialState[2]);

        const newState = aircraftsReducer(initialState, action);
        expect(newState.length).toEqual(3);
        expect(newState[0].compare).toEqual(false);
        expect(newState[1].compare).toEqual(false);
        expect(newState[2].compare).toEqual(false);
    });
    it('should update wishlist value', () => {
        const initialState2 = [
            {aircraftID: '0', wishlist: false},
            {aircraftID: '1', wishlist: false},
            {aircraftID: '2', wishlist: false},
        ];

        const action2 = actions.updateWishlist(initialState2[2]);

        const newState2 = aircraftsReducer(initialState2, action2);
        expect(newState2.length).toEqual(3);
        expect(newState2[0].wishlist).toEqual(false);
        expect(newState2[1].wishlist).toEqual(false);
        expect(newState2[2].wishlist).toEqual(false);
    });
});
