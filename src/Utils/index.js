export const numberWithCommas = x => {
  x = x.toString();
  var pattern = /(-?\d+)(\d{3})/;
  while (pattern.test(x)) x = x.replace(pattern, '$1.$2');
  return x;
};

export const colours = {
  primary: '#D81A3C',
  secondary: '#3A4144',
};
