import React, { useState } from 'react';

const CommissionWidget: React.FC = () => {
  const [revenue, setRevenue] = useState<number>(0);

  return (
    <div className="p-4 bg-white rounded-xl">
      <h2 className="text-xl font-semibold ">Commission Calculator</h2>
      <label>Revenue</label>
      <input
        type="number"
        value={revenue}
        onChange={(e) => setRevenue(Number(e.target.value))}
        className="border px-2 py-1 w-full mt-1"
      />
    </div>
  );
};

export default CommissionWidget;
