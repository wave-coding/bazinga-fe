const initialState = {}
const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'back_to_top':
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
            return { ...state };
        default:
            throw new Error('Dispatch Type is Wrong!')
    }
}






export { initialState, reducer }