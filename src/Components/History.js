import React, { useContext } from 'react';
import { GlobalContext } from '../Context&Reducer/GlobalState';

const History = () => {

    let {transaction, DeleteTransaction} = useContext(GlobalContext);

    return (
        <div>
            <h3>History</h3>
            <ul className="list">
                    {transaction.map((cValue, iVal)=>{
                        return <li key = {iVal} className={cValue.amount < 0 ? 'minus' : 'plus' }>{cValue.description} <span>${cValue.amount}</span><button onClick = {()=>DeleteTransaction(iVal)} className="delete-btn">x</button></li>
                    })}
            </ul>
        </div>
    )
};

export default History;