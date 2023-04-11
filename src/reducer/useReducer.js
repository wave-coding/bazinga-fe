const initialState = {
    cart: [],
    total_price: 0,
}
const reducer = (state, action) => {
    switch (action.type) {
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
        // add to cart
        case 'add_to_cart':
            const product_quantity = state.cart.find(product => product.id === action.data.id)
            if (product_quantity) {
                product_quantity.quantity++
            } else {
                state.cart.push(action.data)
            }
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
            return { ...state, cart: [...shop_cart] }
        // increase product in cart
        case 'increase':
            const item = state.cart.find(item => item.id === action.data)
            item.quantity++
            return { ...state }
        // decrease product in cart
        case 'decrease':
            const product_item = state.cart.find(item => item.id === action.data)
            const delete_item = state.cart.filter(product => product.id !== action.data)
            if (product_item.quantity >= 1) {
                product_item.quantity--
            }
            if (product_item.quantity <= 0) {
                return {
                    ...state,
                    cart: [...delete_item]
                }
            }
            return { ...state }
        default:
            throw new Error('Dispatch Type is Wrong!')
    }
}






export { initialState, reducer }