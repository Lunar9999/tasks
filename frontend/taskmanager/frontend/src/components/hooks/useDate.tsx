export const useDate = (date?: string): string => {
  if (!date) return "N/A";

  try {
    const [y, m, d] = date.split("-").map(Number); // renamed to avoid conflict
    const fullDate = new Date(y, m - 1, d);

    if (isNaN(fullDate.getTime())) return "Invalid Date";

    const formattedYear = fullDate.getFullYear();
    const formattedMonth = (fullDate.getMonth() + 1).toString().padStart(2, '0');
    const formattedDay = fullDate.getDate().toString().padStart(2, '0');

    return `${formattedMonth}/${formattedDay}/${formattedYear}`;
  } catch (error) {
    console.error("Error formatting date:", error);
    return "Invalid Date";
  }
};

export default useDate;
