import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createCustomer, getCustomers, addPointsToCustomer, redeemPointsFromCustomer } from "../apis/CustomerApi";

export const addCustomer = createAsyncThunk('customers/add', async (customer) => {
    return await createCustomer(customer);
})

export const fetchCustomers = createAsyncThunk('customers/fetch', async () => {
  return await getCustomers();
})

export const addPoints = createAsyncThunk("customers/addPoints", async ({customerId, points}) => {
    await addPointsToCustomer({customerId, points})
    return {customerId, points}
})

export const redeemPoints = createAsyncThunk("customers/redeem", async ({customerId, points}) => {
    await redeemPointsFromCustomer({customerId, points})
    return {customerId, points}
})


const customerSlice = createSlice({
    name:"customers",
    initialState: {
        customers: [],
        loading: {
          fetchUCustomer: true,
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


        //add points
        builder
        .addCase(addPoints.pending, (state) => {
            state.loading.addPoints = true;
            state.error.addPoints = null;
        })
        .addCase(addPoints.fulfilled, (state, action) => {
            const customer = state.customers.find((customer) => customer.id === action.payload.customerId)
            if(customer) customer.points += action.payload.points
            
            state.loading.addPoints = false;
            state.error.addPoints = null;
        })
        .addCase(addPoints.rejected, (state, payload) => {
            state.error.addPoints = payload.error
            state.loading.addPoints = false;
        })


        //redeem points
        builder
        .addCase(redeemPoints.pending, (state) => {
            state.loading.redeemPoints = true;
            state.error.redeemPoints = null;
        })
        .addCase(redeemPoints.fulfilled, (state, action) => {
            const customer = state.customers.find((customer) => customer.id === action.payload.customerId);
            if(customer) customer.points -= action.payload.points;

            state.loading.redeemPoints = false;
            state.error.redeemPoints = null;
        })
        .addCase(redeemPoints.rejected, (state, action) => {
            state.loading.redeemPoints = false;
            state.error.redeemPoints = action.error;
        })
      
    }
});


export default customerSlice.reducer;