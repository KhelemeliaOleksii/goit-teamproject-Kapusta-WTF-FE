function getTableDate(string) {
  return string.split('-').reverse().join('.');
}

export default getTableDate;
