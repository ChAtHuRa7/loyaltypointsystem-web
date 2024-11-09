import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomerCard from "./CustomerCard";
import { fetchCustomers } from "../redux/customerSlice";

const Customers = () => {
  const { customers, loading, error } = useSelector((state) => state.customers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCustomers());
  },[])

  return (
    <div className="w-1/2">
      <p className="text-gray-700 font-semibold text-lg mb-5">Loyalty Points Dashboard</p>
      <div className="w-full">
        {customers.map((customer) => {
          return <CustomerCard key={customer.id} props={customer}/>;
        })}
      </div>
    </div>
  );
};

export default Customers;
