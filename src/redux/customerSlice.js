import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createCustomer, getCustomers } from "../apis/CustomerApi";

export const addCustomer = createAsyncThunk('customers/add', async (customer) => {
    return await createCustomer(customer);
})

export const fetchCustomers = createAsyncThunk('customers/fetch', async () => {
  return await getCustomers();
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

        //fetch  customers
        builder
        .addCase(fetchCustomers.pending, (state) => {
            state.loading.fetchUCustomer = true;
            state.error.fetchUCustomer = null;
        })
        .addCase(fetchCustomers.fulfilled, (state, action) => {
            state.loading.fetchUCustomer = false;
            state.error.fetchUCustomer = null;
            state.customers = action.payload;
        })
        .addCase(fetchCustomers.rejected, (state, action) => {
            state.loading.fetchUCustomer = false;
            state.error.fetchUCustomer = action.error;
        })
      
    }
});


export default customerSlice.reducer;