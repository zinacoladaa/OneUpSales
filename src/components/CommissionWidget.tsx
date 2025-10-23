import React, { useState } from "react";
import { calculateCommission } from "../utils/CommissionBand";

const CommissionWidget: React.FC = () => {
  const [revenueInput, setRevenueInput] = useState<string>("");

  const revenue = Number(revenueInput) || 0;
  const { totalCommission, breakdown } = calculateCommission(revenue);

  return (
    <div className="w-full max-w-md bg-white rounded-2xl shadow-md border border-gray-100 p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
        Commission Calculator
      </h2>

   
      <div className="mb-5">
        <label
          htmlFor="revenue"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Enter Revenue (£)
        </label>
        <input
          id="revenue"
          type="number"
          value={revenueInput}
          onChange={(e) => setRevenueInput(e.target.value)}
          placeholder="e.g. 10,000"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg 
                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                     transition-all duration-200"
        />
      </div>

      {/* Result Section */}
      {revenueInput && (
        <div className="space-y-4 animate-fadeIn">
          <div className="bg-blue-50 border border-blue-100 p-4 rounded-xl text-center">
            <p className="text-sm text-gray-700 font-medium">Total Commission</p>
            <p className="text-2xl font-bold text-blue-600">
              £{totalCommission.toLocaleString()}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Commission Band Breakdown
            </h3>
            <ul className="divide-y divide-gray-200">
              {breakdown.map((b, i) => (
                <li
                  key={i}
                  className="flex justify-between py-2 text-sm text-gray-700"
                >
                  <span className="font-medium">{b.band}</span>
                  <span className="font-semibold text-gray-900">
                    £{b.commission.toLocaleString()}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default CommissionWidget;
