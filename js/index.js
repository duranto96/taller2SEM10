let text = document.getElementById("inputText");
const button = document.getElementById("buttonText");
let inputValue = "";

text.addEventListener("input", () => {
  inputValue = text.value;
});

button.addEventListener("click", () => {
  localStorage.setItem("inputValue", inputValue);
});
