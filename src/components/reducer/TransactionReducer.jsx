import { createSlice } from "@reduxjs/toolkit";
import { transactionList } from "../../Data";


const transactionSlice = createSlice({
    name: "transactions",
    initialState: transactionList,
    reducers: {
        addTransaction: (state, action)=>{
            console.log(action);
            state.push(action.payload)
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
