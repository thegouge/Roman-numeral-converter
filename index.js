// Instructions Go Here

export function convertToRoman(num) {
  const decimValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const romanValue = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I"
  ];

  const decim = num
    .toString()
    .split("")
    .map((digit, i, arr) => {
      let place = arr.length - 1 - i;
      let zeros = "";
      for (place; place > 0; place--) {
        zeros += "0";
      }
      return parseInt(digit + zeros);
    });

  let roman = decim.map((digit) => {
    if (digit <= 0) {
      return "";
    }
    let valueIndex = decimValue.indexOf(digit);
    if (valueIndex < 0) {
      if (digit / 8 === 1 || digit / 8 === 10 || digit / 8 === 100) {
        valueIndex = decimValue.indexOf(digit / 8);
        return (
          romanValue[valueIndex - 2] +
          romanValue[valueIndex] +
          romanValue[valueIndex] +
          romanValue[valueIndex]
        );
      }
      valueIndex = decimValue.indexOf(digit / 2);
      if (valueIndex < 0) {
        valueIndex = decimValue.indexOf(digit / 3);
        if (valueIndex < 0) {
          valueIndex = decimValue.indexOf(digit / 6);
          if (valueIndex < 0) {
            valueIndex = decimValue.indexOf(digit / 7);
            return (
              romanValue[valueIndex - 2] +
              romanValue[valueIndex] +
              romanValue[valueIndex]
            );
          }
          return romanValue[valueIndex - 2] + romanValue[valueIndex];
        }
        return (
          romanValue[valueIndex] +
          romanValue[valueIndex] +
          romanValue[valueIndex]
        );
      }
      return romanValue[valueIndex] + romanValue[valueIndex];
    } else {
      return romanValue[valueIndex];
    }
  });

  return roman.join("");
  return num;
}

const input = document.getElementById("input");
const output = document.getElementById("output");
const submit = document.getElementById("submit");

submit.addEventListener("click", () => {
  output.innerHTML = convertToRoman(input.value);
});
