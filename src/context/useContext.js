import { createContext, useContext, useReducer } from 'react';
import { initialState, reducer } from '../reducer/useReducer'

const AppContext = createContext();

const AppProvider = ({ children }) => {
    // eslint-disable-next-line
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <AppContext.Provider value={'nice'}>{children}</AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppProvider } 