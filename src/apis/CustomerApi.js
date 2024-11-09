import axios from "axios"

const BASE_URL = "http://localhost:8080/api/customers";

export const createCustomer = async (customer) => {
    const res = await axios.post(BASE_URL,customer)
    return res.data;
} 

export const getCustomers = async () => {
    const res = await axios.get(BASE_URL)
    return res.data;
} 

export const addPointsToCustomer = async ({customerId, points}) => {
    console.log(customerId, points)
    const res = await axios.post(`${BASE_URL}/${customerId}/points`, {customerId, points})
    return res.data;
} 