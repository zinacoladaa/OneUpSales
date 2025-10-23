import React, { useState } from "react";
import { calculateCommission } from "../utils/CommissionBand";
import { PoundSterling, TrendingUp, PieChart } from "lucide-react";

const CommissionWidget: React.FC = () => {
  const [revenueInput, setRevenueInput] = useState<string>("");

  const revenue = Number(revenueInput) || 0;
  const { totalCommission, breakdown } = calculateCommission(revenue);

  return (
    <div className="w-full max-w-md bg-white rounded-2xl shadow-md border border-gray-100 p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center flex items-center justify-center gap-2">
        <TrendingUp className="w-6 h-6 text-blue-600" />
        Commission Calculator
      </h2>

      {/* Input Field */}
      <div className="mb-6">
        <label
          htmlFor="revenue"
          className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2"
        >
          <PoundSterling className="w-4 h-4 text-blue-500" />
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

      {/* Results */}
      {revenueInput && (
        <div className="space-y-5 animate-fadeIn">
          {/* Total Commission */}
          <div className="bg-blue-50 border border-blue-100 p-4 rounded-xl text-center shadow-sm">
            <div className="flex justify-center items-center gap-2 mb-1">
              <TrendingUp className="w-5 h-5 text-blue-600" />
              <p className="text-sm text-gray-700 font-medium">
                Total Commission
              </p>
            </div>
            <p className="text-3xl font-bold text-blue-700">
              £{totalCommission.toLocaleString()}
            </p>
          </div>

          {/* Breakdown */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <PieChart className="w-5 h-5 text-blue-500" />
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
