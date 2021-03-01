export const filterNumbers = (array, largerThan) => {
  let checkNumber = arrayItem => arrayItem < largerThan;
  return array.prototype.filter(checkNumber);
}
