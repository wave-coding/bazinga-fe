const initialState = {}
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
        default:
            throw new Error('Dispatch Type is Wrong!')
    }
}






export { initialState, reducer }