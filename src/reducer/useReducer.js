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
        case 'get_total':
            let total_prices = 0
            state.cart.forEach(product => {
                total_prices += product.price * product.quantity
            })
            return { ...state, total_price: total_prices.toFixed(2) }
        default:
            throw new Error('Dispatch Type is Wrong!')
    }
}






export { initialState, reducer }