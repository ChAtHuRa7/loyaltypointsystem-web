import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createCustomer } from "../apis/CustomerApi";

export const addCustomer = createAsyncThunk('customers/add', async (customer) => {
    console.log(customer);
    return await createCustomer(customer);
})


const customerSlice = createSlice({
    name:"customers",
    initialState: {
        customers: [],
        loading: {
          fetchUCustomer: false,
          addCustomer: false,
          addPoints: false,
          redeemPoints: false,
        },
        error: {
          fetchUCustomer: null,
          addCustomer: null,
          addPoints: null,
          redeemPoints: null,
        },
      },
      reducers: {},
      extraReducers: (builder) => {

        // add customers
        builder
        .addCase(addCustomer.pending, (state) => {
            state.loading.addCustomer = true;
            state.error.addCustomer = null;
        })
        .addCase(addCustomer.fulfilled, (state, action) => {
            state.loading.addCustomer = false;
            state.error.addCustomer = null;
            state.customers.push(action.payload);
        })
        .addCase(addCustomer.rejected, (state, action) => {
            state.loading.addCustomer = false;
            state.error.addCustomer = action.error;
        })
      
    }
});


export default customerSlice.reducer;