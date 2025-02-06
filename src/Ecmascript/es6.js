
import { searchById, addEntry, Tab } from "./fonction.js";

const findLongestWord = (words) => {
    const wordsWithLength = words.map(word => ({ mot: word, longueur: word.length }));
    return wordsWithLength.reduce((longest, current) => current.longueur > longest.longueur ? current : longest);
};

// Test
console.log(findLongestWord(["react", "javascript", "ecmascript"]));


const countOccurrences = (arr) => {
    return arr.flat().reduce((acc, val) => {
        acc[val] = (acc[val] || 0) + 1;
        return acc;
    }, {});
};

// Test
console.log(countOccurrences([["apple", "banana"], ["banana", "orange"], ["apple", "orange", "banana"]]));


const calculateTotal = (notes) => {
    return notes
        .map(note => note < 50 ? note + 15 : note)
        .filter(note => note > 50)
        .reduce((sum, note) => sum + note, 0);
};

// Test
console.log(calculateTotal([30, 40, 55, 70, 20, 90]));

addEntry("Charlie");
console.log(Tab);
console.log(searchById(2)); // Chercher un élément par ID
