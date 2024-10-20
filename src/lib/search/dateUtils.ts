export const getMinDate = (): string => {
  const today = new Date();
  return today.toISOString().split('T')[0];
};

export const validateUntilDate = (fromDate: string, untilDate: string): string => {
  if (untilDate && untilDate < fromDate) {
    return fromDate;
  }
  return untilDate;
};
