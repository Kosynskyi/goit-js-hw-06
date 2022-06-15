// const totalCategoriesEl = document.querySelectorAll(".item");
// console.log(`Number of categories: ${totalCategoriesEl.length}`);

// // console.log(totalCategoriesEl);

// const totalCategoriesArrayEl = [...totalCategoriesEl]
//   .map(
//     (element) =>
//       `Category: ${element.children[0].textContent}
//       Elements: ${element.children[1].children.length}`
//   )
//   .join("\n");
// console.log(totalCategoriesArrayEl);

const categoriesEl = document.querySelectorAll(".item");

console.log(`Number of categories: ${categoriesEl.length}`);

const totalCategoriesArrayEl = categoriesEl.forEach((element) => {
  console.log("Category:", element.children[0].textContent);
  console.log("Elements:", element.children[1].children.length);
});
