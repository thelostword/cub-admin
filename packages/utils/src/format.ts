export const formatUnitValue = (value1: string | number, value2?: string | number) => {
  const value = value1 || value2 || 0;
  if (typeof value === 'number' && value !== 0) return `${value}px`;
  return value;
};
