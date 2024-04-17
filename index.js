const fs = require('fs');

function bubbleSort(arr) {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
    return arr;
}

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = current;
    }
    return arr;
}

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
    return arr;
}

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const pivot = arr[0];
    const left = [];
    const right = [];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}

function readAndSort(filename, sortFunction, sortFunctionName) {
    fs.readFile(filename, 'utf8', (err, data) => {
        if (err) {
            console.error('Erreur de lecture du fichier:', err.message);
            return;
        }
        const arr = data.split(' ').map(Number).filter(n => !isNaN(n));
        if (arr.length === 0) {
            console.error('Erreur : Aucun nombre trouvé dans le fichier');
            return;
        }
        const sortedArr = sortFunction(arr);
        console.log(`${sortFunctionName}: ${sortedArr.length} comparaisons -`, sortedArr);
    });
}

const filename = process.argv[2];
if (!filename) {
    console.error('Error: No filename provided');
    process.exit(1);
}


readAndSort(filename, bubbleSort, 'Tri à bulles');
readAndSort(filename, insertionSort, 'Tri par insertion');
readAndSort(filename, selectionSort, 'Tri par sélection');
readAndSort(filename, quickSort, 'Tri rapide');