import { createContext, useContext, useReducer, useState, useEffect } from 'react';

import { initialState, reducer } from '../reducer/useReducer';

import { toast } from "react-toastify";

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
        add_toast_success()
    }
    // delete from cart
    function delete_item(id) {
        dispatch({ type: 'delete_item', data: id })
        cart_delete_toast()
    }
    // function toastify
    function add_toast_success() {
        toast.success('Add to Cart', {
            position: toast.POSITION.TOP_CENTER
        })
    }
    function cart_delete_toast() {
        toast.error('Delete Item', {
            position: toast.POSITION.TOP_CENTER
        })
    }

    useEffect(() => {
        dispatch({ type: 'get_total' })
    }, [state.cart])

    return (
        <AppContext.Provider value={{ ...state, lang, back_to_top, open_nav, close_nav, add_to_cart, delete_item }}>{children}</AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppProvider } 