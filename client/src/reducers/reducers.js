import { userActions, learningsActions } from './constantActionTypes';

export const userReducer = (user, action) => {
    switch (action.type) {
        case userActions.LOGOUT:
            localStorage.removeItem('authToken');
            return { userId: '', username: '', name: '' };
        case userActions.ADD_USER:
            return action.payload;
    }
}

export const learningsReducer = (learnings, action) => {
    switch (action.type) {
        case learningsActions.FETCH_ALL:
            return action.payload;
        case learningsActions.CREATE:
            return [...learnings, action.payload]
        case learningsActions.UPDATE:
        case learningsActions.DELETE:
    }
}