// ============ TASK 1: Create Arrays ============
console.log("Task 1: Arrays Created ");

const drinks = ["Latte", "Tea", "Espresso"];
const pastry = ["Croissant", "Muffin", "Bagel"];

console.log("Drinks:", drinks);
console.log("Pastries:", pastry);


// ============ TASK 2: Count Items ============
console.log("Task 2: Count Items ");

console.log("Number of drinks:", drinks.length);
console.log("Number of pastries:", pastry.length);


// ============ TASK 3: Hardcoded Access ============
console.log("Task 3: Hardcoded Access ");

console.log("Order 1:", drinks[0], "and", pastry[0]);
console.log("Order 2:", drinks[1], "and", pastry[1]);
console.log("Order 3:", drinks[2], "and", pastry[2]);


// ============ TASK 4: Dynamic Access ============
console.log("Task 4: Dynamic Access ");

let drinkIndex = 0;
let pastryIndex = 2;

console.log("Selected Drink:", drinks[drinkIndex]);
console.log("Selected Pastry:", pastry[pastryIndex]);

drinkIndex = 2;
pastryIndex = 1;

console.log("New Drink:", drinks[drinkIndex]);
console.log("New Pastry:", pastry[pastryIndex]);


// ============ TASK 5: Loop Through Drinks ============
console.log("Task 5: Loop Through Drinks ");

for (let i = 0; i < drinks.length; i++) {
    console.log("Drink", i + 1 + ":", drinks[i]);
}


// ============ TASK 6: Add New Order ============
console.log("\n--- Task 6: Add New Order ---");

console.log("Drinks before:", drinks.length);

drinks.push("Flat White");

console.log("Drinks after:", drinks.length);
console.log("Updated drinks:", drinks);