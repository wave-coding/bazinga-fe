import { createContext, useContext, useReducer, useState, useEffect } from 'react';

import { initialState, reducer } from '../reducer/useReducer';

import enLanguage from '../lang/en.json';

import { toast } from "react-toastify";

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
    // increase product
    function increase_product(id) {
        dispatch({ type: 'increase', data: id })
        dispatch({ type: 'get_total' })
    }
    // decrease product
    function decrease_product(id) {
        dispatch({ type: 'decrease', data: id })
        dispatch({ type: 'get_total' })
    }
    // create user
    function create_account(user) {
        dispatch({ type: "create_account", data: user })
    }
    //  login user
    function login_user(user) {
        dispatch({ type: "login_user", data: user })
    }
    // add orders
    function add_orders(product) {
        dispatch({ type: "add_orders", data: product })
    }
    // sign out user
    function sign_out_user() {
        dispatch({ type: "sign_out_user" })
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
        <AppContext.Provider value={{ ...state, lang, back_to_top, open_nav, close_nav, add_to_cart, delete_item, increase_product, decrease_product, create_account, login_user, add_orders, sign_out_user }}>{children}</AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppProvider } 