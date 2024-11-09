import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { redeemPoints } from "../redux/customerSlice";

function RedeemPoints({props}) {
  const [points, setPoints] = useState(0);
  const dispatch = useDispatch();

  const { loading, error } = useSelector((state) => state.customers);

  const handelSubmit = (customerId, points) => {
    if (parseInt(points) <= props.points ) {
      dispatch(redeemPoints({ customerId, points: parseInt(points) }));
      setPoints(0);
    }
  };

  return (
    <div>
      <p className="text-gray-700 font-semibold text-md mb-3">
        Redeem Loyalty Points
      </p>
      <div>
        <input
          onChange={(e) => setPoints(e.target.value)}
          id="points"
          type="number"
          value={points}
          className="border-2 p-1 w-28"
        />
        <button  onClick={() => handelSubmit(props.id, points)} disabled={points <= 0} className="border-2 rounded-md ml-2 w-28 py-1 font-semibold text-red-600 border-red-600 bg-red-100">
          {loading.RedeemPoints ? "Redeeming..." : "Redeem"}
        </button>
      </div>
    </div>
  );
}

export default RedeemPoints;
