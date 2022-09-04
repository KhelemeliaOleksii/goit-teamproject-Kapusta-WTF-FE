function getDate(year, month, day) {
  let date = `${year}`;
  if (month.length === 2) {
    date += `-${Number(month) + 1}`;
  }
  date += `-0${Number(month) + 1}`;
  if (day === 2) {
    date += `-${day}`;
  }
  date += `-0${day}`;
  return date;
}

export default getDate;
