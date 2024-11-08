import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCustomer } from "../redux/customerSlice";

const AddCustomer = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.customers);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
  });

  const handelChanges = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const clearFormData = (e) => {
    e.preventDefault();
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      address: "",
    });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    dispatch(addCustomer(formData));
    clearFormData(e);
  };

  return (
    <div className="border-2 rounded-lg w-fit h-fit p-10 shadow-sm">
      <h1 className="font-semibold text-lg pb-5">Add New Customer</h1>

      <form onSubmit={handelSubmit}>
        <div className="flex gap-10">
          <div className="flex flex-col pb-5">
            <label htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              type="text"
              onChange={(e) => handelChanges(e)}
              value={formData.firstName}
              className="border-2 p-1"
            />
          </div>

          <div className="flex flex-col pb-5">
            <label htmlFor="lastName">Last Name</label>
            <input
              id="lastName"
              type="text"
              onChange={handelChanges}
              value={formData.lastName}
              className="border-2 p-1"
            />
          </div>
        </div>

        <div className="flex flex-col pb-5">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            onChange={handelChanges}
            value={formData.email}
            className="border-2 p-1"
          />
        </div>

        <div className="flex flex-col pb-5">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            id="phoneNumber"
            type="number"
            onChange={handelChanges}
            value={formData.phoneNumber}
            className="border-2 p-1"
          />
        </div>

        <div className="flex flex-col pb-5">
          <label htmlFor="address">Address</label>
          <input
            id="address"
            type="text"
            onChange={handelChanges}
            value={formData.address}
            className="border-2 p-1"
          />
        </div>

        <div className="flex justify-between pt-5">
          <button
            onClick={clearFormData}
            type="button"
            className="border-2 rounded-md px-7 py-1 font-semibold text-gray-500 border-gray-500 bg-gray-100"
          >
            Clear
          </button>
          <button className="border-2 rounded-md px-7 py-1 font-semibold text-green-600 border-green-600 bg-green-100">
            {loading.addCustomer ? "Adding..." : "Add"}
          </button>
        </div>

        {error.addCustomer && <p className="text-sm text-red-700 pt-5">Submission failed.</p>}
      </form>
    </div>
  );
};

export default AddCustomer;
