import React, { useState } from 'react'

function RedeemPoints() {

    const [points, setPoints] = useState(0);

    return (
        <div>
          <p className="text-gray-700 font-semibold text-md mb-3">Add Loyalty Points</p>
          <div>
          <input
                id="points"
                type="number"
                value={points}
                className="border-2 p-1 w-28"
              />
            <button className="border-2 rounded-md ml-2 w-28 py-1 font-semibold text-red-600 border-red-600 bg-red-100">
                {true ? "Redeeming..." : "Redeem"}
              </button>
          </div>
        </div>
      );
}

export default RedeemPoints