import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomerCard from "./CustomerCard";
import { fetchCustomers } from "../redux/customerSlice";

const Customers = () => {
  const { customers, loading, error } = useSelector((state) => state.customers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCustomers());
  }, []);

  return (
    <div className="w-1/2">
      <p className="text-gray-700 font-semibold text-lg mb-5">
        Loyalty Points Dashboard
      </p>
      <div className="h-5/6">
        <div className="no-scrollbar h-full w-full overflow-auto scroll-smooth">
          {customers.map((customer) => {
            return <CustomerCard key={customer.id} props={customer} />;
          })}
          {!loading.fetchCustomers &&
            error.fetchCustomers == null &&
            customers.length === 0 && (
              <div className="w-full h-full flex items-center justify-center">
                <p className="text-gray-400 font-semibold">
                  Customers Not found.
                </p>
              </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default Customers;
