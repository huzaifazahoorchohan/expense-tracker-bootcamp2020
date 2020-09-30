import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
    transaction:[]
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {
    let [state, dispatch] = useReducer(AppReducer, initialState);

    function AddTransaction(transaction){
        dispatch(
            {
                type:'ADD',
                payload: transaction,
            }
        )
    };

    function DeleteTransaction(iVal){
        dispatch(
            {
                type:'DELETE',
                payload: iVal,
            }
        )
    }

    return(
        <GlobalContext.Provider value = {{
            transaction:state.transaction,
            AddTransaction,
            DeleteTransaction,
        }}>
            {children}
        </GlobalContext.Provider>
    )
};