import React, { useContext, useState } from 'react';
import { GlobalContext } from '../Context&Reducer/GlobalState';

const AddTransaction = () => {
    let [newDesc, setNewDesc] = useState("");
    let [newAmount, setNewAmount] = useState(0);

    let { AddTransaction } = useContext(GlobalContext);

    let addHandle = (event) => {
        event.preventDefault();
        AddTransaction({
            amount:parseInt(newAmount),
            description:newDesc,
        });
        setNewAmount(0);
        setNewDesc("");
    }

    return (
        <div>
            <h3>Add new transaction</h3>
                <form onSubmit = {addHandle} >
                    <div className="form-control">
                        <label htmlFor="text">Text</label>
                        <input type="text" placeholder="Add Description" value = {newDesc} onChange = {(e)=>setNewDesc(e.target.value)} />
                    </div>
            <div className="form-control">
                <label htmlFor="amount">Amount <br />(negative - expense, positive - income)</label>
                    <input type="number" placeholder="Add Amount" value = {newAmount} onChange = {(e)=>setNewAmount(e.target.value)} />
            </div>
                <button className="btn" onClick = {addHandle} >Add transaction</button>
                </form>
        </div>
    )
};

export default AddTransaction;