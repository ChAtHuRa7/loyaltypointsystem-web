import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPoints } from "../redux/customerSlice";


function AddPoints({props}) {
  const [points, setPoints] = useState(0);
  const dispatch = useDispatch()

  const {loading, error} = useSelector((state) => state.customers)

  const handelSubmit = (customerId, points) => {
    if(parseInt(points) >= 0){
        dispatch(addPoints({customerId, points: parseInt(points)}))
        setPoints(0);
    }
  }

  return (
    <div>
      <p className="text-gray-700 font-semibold text-md mb-3">
        Add Loyalty Points
      </p>
      <div>
        <input onChange={(e) => setPoints(e.target.value)} value={points} id="points" type="number" className="border-2 p-1 w-28" />
        <button onClick={() => handelSubmit(props.id, points)}  disabled={points <= 0} className="border-2 rounded-md ml-2 w-24 py-1 font-semibold text-green-600 border-green-600 bg-green-100">
          {loading.addPoints ? "Adding..." : "Add"}
        </button>
      </div>
    </div>
  );
}

export default AddPoints;
