  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  const createBtn = document.querySelector("#controls button[data-create]");
  const destroyBtn = document.querySelector("#controls button[data-destroy]");
  let amountInput = document.querySelector('#controls input[type="number"]');
  const divEl = document.querySelector("#boxes");

  function createBoxes(amount) {
    amount = amountInput.value;
    const boxesArr = [];
    for (let i = 0; i < amount; i += 1){
      const boxEl = document.createElement("div");
      boxEl.style.width = 30 + i * 10 + "px";
      boxEl.style.height = 30 + i * 10 + "px";
      boxEl.style.backgroundColor = getRandomHexColor();
      boxesArr.push(boxEl); 
    }
    divEl.append(...boxesArr);
  }
  const destroyBoxes = (event) => (divEl.innerHTML = "");
  createBtn.addEventListener("click", createBoxes);
  destroyBtn.addEventListener("click", destroyBoxes);
