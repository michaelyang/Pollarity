import { AsyncStorage } from 'react-native';

import * as t from './actionTypes';

let initialState = { isLoggedIn: false, user: null };

const authReducer = (state = initialState, action) => {
    let newstate;
    switch (action.type) {
        case t.LOGGED_IN:
            const user = action.data;

            // Save token and data to Asyncstorage
            AsyncStorage.multiSet([
                ['user', JSON.stringify(user)]
            ]);

            newstate = Object.assign({}, state, { isLoggedIn: true, user: user });

            return newstate;

        case t.LOGGED_OUT:
            let keys = ['user'];
            AsyncStorage.multiRemove(keys);

            newstate = Object.assign({}, state, {isLoggedIn: false, user: null });

            return newstate;

        default:
            return state;
    }
};

export default authReducer;
