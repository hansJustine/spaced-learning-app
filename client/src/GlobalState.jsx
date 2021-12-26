import React, { useContext, useReducer } from 'react';
import { userReducer, learningsReducer } from './reducers/reducers';

const StoreContext = React.createContext();
const DispatchContext = React.createContext();

export function useStoreContext() {
    return useContext(StoreContext);
}

export function useDispatchContext() {
    return useContext(DispatchContext);
}

function LearningProvider({ children }) {
    const [user, dispatchUser] = useReducer(userReducer, { id: '', email: '', name: '' });
    const [learnings, dispatchLearning] = useReducer(learningsReducer, []);

    return (
        <StoreContext.Provider value={{ user, learnings }}>
            <DispatchContext.Provider value={{ dispatchUser, dispatchLearning }}>
                {children}
            </DispatchContext.Provider>
        </StoreContext.Provider>
    )
}

export default LearningProvider;
