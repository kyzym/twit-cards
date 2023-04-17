export const formatNumber = (num) => {
  const cleanedNumber = parseInt(num, 10);

  return cleanedNumber.toLocaleString("en-US");
};
