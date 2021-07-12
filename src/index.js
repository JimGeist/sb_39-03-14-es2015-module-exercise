import fruits from "./foods";
import { choice, remove } from "./helpers";

// Randomly draw a fruit from the array
// Log the message “I’d like one RANDOMFRUIT, please.”
let fruit = choice(fruits);
console.log(`I'd like one ${fruit}, please`);

// Log the message “Here you go: RANDOMFRUIT”
console.log(`Here you go: ${fruit}`);

// Log the message “Delicious! May I have another?”
console.log(`Delicious! May I have another?`);

// Remove the fruit from the array of fruits
fruit = remove(fruits, fruit);

// Log the message “I’m sorry, we’re all out. We have FRUITSLEFT left.”
console.log(`I'm sorry, we're all out. We have ${fruits.length} left.`);

