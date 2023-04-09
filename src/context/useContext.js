import { createContext, useContext, useReducer, useState, useEffect } from 'react';

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
    // add to cart
    function add_to_cart(product) {
        dispatch({ type: 'add_to_cart', data: product })
        dispatch({ type: 'get_total' })
    }

    useEffect(() => {
        dispatch({ type: 'get_total' })
    }, [state.cart])

    return (
        <AppContext.Provider value={{ ...state, lang, back_to_top, open_nav, close_nav, add_to_cart }}>{children}</AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppProvider } 