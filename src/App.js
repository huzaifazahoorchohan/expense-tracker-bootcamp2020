import React from 'react';
import './App.css';

// App Components
import Header from './Components/Header';
import Balance from './Components/Balance';
import IncomeExpense from './Components/IncomeExpense';
import History from './Components/History';
import AddTransaction from './Components/AddTransaction';

// Context Provider
import { GlobalProvider } from './Context&Reducer/GlobalState';


const App = () => {
  return(
   <GlobalProvider> 
    <div>
      <Header />
      <div className = "container">
        <Balance />
        <IncomeExpense />
        <History />
        <AddTransaction />
      </div>
    </div>
   </GlobalProvider> 
  )
};

export default App;
