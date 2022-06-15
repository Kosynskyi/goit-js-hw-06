const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsListEl = document.querySelector("#ingredients");

console.log(ingredientsListEl);

const addIngredientEl = ingredients.map((elem) => {
  const itemEl = document.createElement("li");
  console.log(itemEl);
  itemEl.textContent = elem;
  return itemEl;
});

ingredientsListEl.append(...addIngredientEl);
console.log(addIngredientEl);
