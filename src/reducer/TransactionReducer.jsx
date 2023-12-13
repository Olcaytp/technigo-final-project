import { createSlice } from "@reduxjs/toolkit";
import { transactionList } from "../Data";


const transactionSlice = createSlice({
    name: "transactions",
    initialState: transactionList,
    reducers: {
        addTransaction: (state, action)=>{
            const lastId = state.length > 0 ? state[state.length - 1].id : 0;
      const newId = lastId + 1;

      const { name, type, category, amount, date } = action.payload;
      state.push({ id: newId, name, type, category, amount, date });
        },
        updateTransaction: (state, action) => {
            const { id, name, type, category, amount, date } = action.payload;
            return state.map(transaction => (transaction.id === id ? { ...transaction, name, type, category, amount, date } : transaction));
          },
          
        deleteTransaction: (state, action)=>{
            const {id} = action.payload;
            const uu = state.find(transaction => transaction.id ==id)
            if(uu){
                return state.filter(f=> f.id !== id)
            }
           
        },
    }
})
export const {addTransaction, updateTransaction, deleteTransaction} = transactionSlice.actions
export default transactionSlice.reducer
