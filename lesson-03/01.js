const colors = ["синий", "черный", "зеленый", "красный", "желтый", "зеленый"];

function createColorString(arr) {
  let newColor = arr
    .filter((el) => el === "черный" || el === "красный" || el === "желтый")
    .join("-");
  return newColor;
}

console.log(createColorString(colors));
