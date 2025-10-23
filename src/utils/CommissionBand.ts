export type CommissionBand = {
  min: number;
  max: number | null;
  rate: number;
};

export const commissionBands: CommissionBand[] = [
  { min: 0, max: 5000, rate: 0 },
  { min: 5000, max: 10000, rate: 0.1 },
  { min: 10000, max: 15000, rate: 0.15 },
  { min: 15000, max: 20000, rate: 0.2 },
  { min: 20000, max: null, rate: 0.25 },
];

export function calculateCommission(revenue: number) {
  let totalCommission = 0;
  const breakdown: { band: string; commission: number }[] = [];

  for (const band of commissionBands) {
    const bandMax = band.max ?? Infinity;
    const amountInBand = Math.min(
      Math.max(revenue - band.min, 0),
      bandMax - band.min
    );
    const commission = amountInBand * band.rate;

    breakdown.push({
      band: `£${band.min.toLocaleString()} → ${
        band.max ? `£${band.max.toLocaleString()}` : "+"
      }`,
      commission,
    });

    totalCommission += commission;
  }

  return { totalCommission, breakdown };
}
