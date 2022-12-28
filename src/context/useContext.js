import { createContext, useContext, useReducer, useState } from 'react';

import { initialState, reducer } from '../reducer/useReducer';

import enLanguage from '../lang/en.json';

const AppContext = createContext();

const AppProvider = ({ children }) => {
    // eslint-disable-next-line
    const [state, dispatch] = useReducer(reducer, initialState);
    // eslint-disable-next-line
    const [lang, useLang] = useState(enLanguage);
    // back-to-top
    function back_to_top() {
        dispatch({ type: 'back_to_top' })
    }

    return (
        <AppContext.Provider value={{ lang, back_to_top }}>{children}</AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppProvider } 