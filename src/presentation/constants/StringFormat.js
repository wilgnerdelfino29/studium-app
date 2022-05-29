export function getRoundedStat(value) {
  if (typeof value !== 'number' || value < 0) return 0;
  if (value === 1000000) {
    return '1 milhão';
  }
  if (value > 1000000) {
    let roundedValue = value / 1000000;
    return getStatString(roundedValue, ' milhões');
  }
  if (value >= 1000) {
    let roundedValue = value / 1000;
    return getStatString(roundedValue, ' mil');
  }
  return value;
}

export function getStatString(value, text) {
  let numberParts = value.toString().split('.');
  if (numberParts.length === 1) return numberParts + text;
  if (numberParts[1].substring(0, 1) === '0') {
    return numberParts[0] + text;
  }
  let roundedValueString =
    numberParts[0] + ',' + numberParts[1].substring(0, 1);
  return roundedValueString + text;
}

export function toPostCreationDateFormat(date) {
  //From 2022-02-17T02:54:22.342453Z
  //To 17/02/2022
  const onlyDate = date.split('T')[0];
  return onlyDate.split('-').reverse().join('/');
}
