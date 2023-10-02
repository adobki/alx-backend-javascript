// Tests the code in the referenced script(s)

/* eslint-disable import/extensions */
import updateUniqueItems from '../10-update_uniq_items.js';
import groceriesList from '../9-groceries_list.js';

const map = groceriesList();
console.log(map);

updateUniqueItems();
console.log(map);
// updateUniqueItems([1,1,12]);
// console.log(updateUniqueItems({
//   Apples: 10,
//   Tomatoes: 10,
//   Pasta: 1,
//   Rice: 1,
//   Banana: 5,
// }));
