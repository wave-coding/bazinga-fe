const initialState = {
    cart: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [],
    total_price: 0,
    user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : {},
    orders: localStorage.getItem('orders') ? JSON.parse(localStorage.getItem('orders')) : []
}
const reducer = (state, action) => {
    switch (action.type) {
        // ------------------------------------------ Basic Function ---------------------------------------------------------------------
        // back to top
        case 'back_to_top':
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
            return { ...state };
        // open nav
        case 'open_nav':
            document.getElementById("mySidenav").style.width = "300px";
            // document.body.style.opacity = "0.9";
            return { ...state }
        // close nav
        case 'close_nav':
            document.getElementById("mySidenav").style.width = "0";
            // document.body.style.opacity = "1";
            return { ...state }

        // ------------------------------------------ Cart ---------------------------------------------------------------------
        // add to cart
        case 'add_to_cart':
            const product_quantity = state.cart.find(product => product.id === action.data.id)
            if (product_quantity) {
                product_quantity.quantity++
            } else {
                state.cart.push(action.data)
            }
            localStorage.setItem('cart', JSON.stringify(state.cart))
            return { ...state }
        // get total items
        case 'get_total':
            let total_prices = 0
            state.cart.forEach(product => {
                total_prices += product.price * product.quantity
            })
            return { ...state, total_price: total_prices.toFixed(2) }
        // delete items from cart
        case 'delete_item':
            const shop_cart = state.cart.filter(product => product.id !== action.data)
            localStorage.setItem('cart', JSON.stringify([...shop_cart]))
            return { ...state, cart: [...shop_cart] }
        // increase product in cart
        case 'increase':
            const item = state.cart.find(item => item.id === action.data)
            item.quantity++
            localStorage.setItem('cart', JSON.stringify(state.cart))
            return { ...state }
        // decrease product in cart
        case 'decrease':
            const product_item = state.cart.find(item => item.id === action.data)
            const delete_item = state.cart.filter(product => product.id !== action.data)
            if (product_item.quantity >= 1) {
                product_item.quantity--
            }
            if (product_item.quantity <= 0) {
                localStorage.setItem('cart', JSON.stringify([...delete_item]))
                return {
                    ...state,
                    cart: [...delete_item]
                }
            }
            localStorage.setItem('cart', JSON.stringify(state.cart))
            return { ...state }
        // ------------------------------------------ Auth ---------------------------------------------------------------------
        // create account
        case 'create_account':
            localStorage.setItem('user', JSON.stringify(action.data))
            return { ...state, user: action.data }
        // login user
        case 'login_user':
            if (state.user.name === action.data.name) {
                localStorage.setItem('user', JSON.stringify({ ...state.user, auth: true }))
                return { ...state, user: { ...state.user, auth: true } }
            } else {
                return { ...state }
            }
        // add orders
        case 'add_orders':
            state.orders.push(action.data)
            localStorage.setItem('cart', JSON.stringify([]))
            localStorage.setItem('orders', JSON.stringify(state.orders))
            return { ...state, cart: [] }
        // signout user
        case 'sign_out_user':
            localStorage.removeItem('user')
            localStorage.setItem('orders', JSON.stringify([]))
            window.location.reload()
            return { ...state, user: {}, orders: [] }
        default:
            throw new Error('Dispatch Type is Wrong!')
    }
}






export { initialState, reducer }