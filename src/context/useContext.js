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
    // open nav
    function open_nav() {
        dispatch({ type: 'open_nav' })
    }
    // close nav
    function close_nav() {
        dispatch({ type: 'close_nav' })
    }

    return (
        <AppContext.Provider value={{ lang, back_to_top, open_nav, close_nav }}>{children}</AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppProvider } 