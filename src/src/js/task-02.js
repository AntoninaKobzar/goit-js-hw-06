const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
  
  const ulEl = document.querySelector("#ingredients");
  const listEl = ingredients.map(ingredient => {
    const itemEl = document.createElement("li");
    itemEl.textContent = ingredient;
    return itemEl;
  })
  console.log(listEl);
  ulEl.append(...listEl);



