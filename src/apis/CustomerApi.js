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