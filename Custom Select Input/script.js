
const customSelect = document.querySelector(".custom-select");

customSelect.addEventListener("click", function () {
  this.parentElement.classList.toggle("show");
});

const customOption = document.querySelector(".custom-option");

listCountries.forEach((item) => {
  const li = document.createElement("li");
  const img = document.createElement("img");
  img.src = `https://www.countryflags.io/${item.code.toLowerCase()}/shiny/32.png`;
  const span = document.createElement("span");
  const textSpan = document.createTextNode(item.name);
  span.appendChild(textSpan);

  li.appendChild(img);
  li.appendChild(span);
  customOption.appendChild(li);
});

const liCountries = document.querySelectorAll(".custom-option li");
const value = customSelect.querySelector(".value");

liCountries.forEach((item) => {
  item.addEventListener("click", function () {
    const img = item.querySelector("img");
    const text = item.querySelector("span");
    value.innerHTML = `<img src="${img.src}"> ${text.textContent}`;
    customSelect.parentElement.classList.remove("show");
  });
});

window.addEventListener("click", function (e) {
  if (e.target !== customSelect && e.target !== customOption) {
    customSelect.parentElement.classList.remove("show");
  }
});
