import React, { createContext, useReducer } from "react";
import { ADD_INCOME, ADD_EXPENSE, DELETE_TRANSACTION } from "../ActionTypes";
import AppReducer from "./AppReducer";

const initialState = {
  incomeTransactions: [],
  expenseTransactions: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const deleteTransaction = (id) => {
    dispatch({
      type: DELETE_TRANSACTION,
      payload: id,
    });
  };

  const addIncome = (incomeTransaction) => {
    dispatch({
      type: ADD_INCOME,
      payload: incomeTransaction,
    });
  };

  const addExpense = (expenseTransaction) => {
    dispatch({
      type: ADD_EXPENSE,
      payload: expenseTransaction,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        incomeTransactions: state.incomeTransactions,
        expenseTransactions: state.expenseTransactions,
        deleteTransaction,
        addIncome,
        addExpense,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
