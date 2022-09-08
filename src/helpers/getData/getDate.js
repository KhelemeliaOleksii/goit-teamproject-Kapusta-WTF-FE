function getDate(year, month, day) {
  let date = `${year}`;

  if ((Number(month) + 1).toString().length === 2) {
    date += `-${Number(month) + 1}`;
  } else {
    date += `-0${Number(month) + 1}`;
  }

  if (day === 2) {
    date += `-${day}`;
  } else {
    date += `-0${day}`;
  }

  return date;
}

export default getDate;
