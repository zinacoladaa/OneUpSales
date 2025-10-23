import React, { useState } from 'react';
import { calculateCommission } from "../utils/CommissionBand";

const CommissionWidget: React.FC = () => {
  const [revenue, setRevenue] = useState<number>(0);
const { totalCommission, breakdown } = calculateCommission(revenue);

  return (
    <div className="p-4 bg-white rounded-xl">
      <h2 className="text-xl font-semibold ">Commission Calculator</h2>
      <label>Revenue</label>
      <input
        type="number"
        value={revenue}
        onChange={(e) => setRevenue(Number(e.target.value))}
        className="border px-2 py-1 w-full mt-1"
        placeholder='Enter Total Revenue'
      />

        <p className="text-lg font-semibold mb-2">
        Total Commission: £{totalCommission.toLocaleString()}
      </p>
    </div>

  


    
  );
};

export default CommissionWidget;
