export const calcMonth = (datePackage: string) => {
  const currentMonth = new Date().getMonth();
  const monthPackage = new Date(datePackage).getMonth();
  return currentMonth - monthPackage;
};
