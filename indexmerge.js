//  Le tri fusion est un algorithme de tri comparatif qui divise récursivement la liste en deux moitiés,
// trie chaque moitié et fusionne les deux moitiés triées.

const fs = require('fs');

let comparisons = 0;

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        comparisons++;
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex++]);
        } else {
            result.push(right[rightIndex++]);
        }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

const filename = process.argv[2];
fs.readFile(filename, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err.message);
        return;
    }
    const numbers = data.split(' ').map(Number).filter(n => !isNaN(n));
    if (numbers.length === 0) {
        console.error('Error: No numbers found in the file');
        return;
    }

    const sortedArray = mergeSort(numbers);
    console.log(`Tri fusion: ${comparisons} comparaisons -`, sortedArray);
});

