const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
function findLongestWord(list) {
 let longestWord = "";
 for (const item of list) {
    if (item.length > longestWord.length) {
        longestWord = item;
    }
 }
 console.log("La palabara más larga es: " + longestWord);
}
findLongestWord(avengers);

