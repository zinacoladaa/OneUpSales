import React, { useState } from "react";
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
      />

      <p className="text-lg font-semibold mb-2">
        Total Commission: £{totalCommission.toLocaleString()}
      </p>

      <h3 className="font-medium mb-1">Commission Band Breakdown</h3>
      <ul className="space-y-1">
        {breakdown.map((b, i) => (
          <li key={i} className="flex justify-between">
            <span>{b.band}</span>
            <span>£{b.commission.toLocaleString()}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommissionWidget;
