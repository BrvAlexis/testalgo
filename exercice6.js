function countBuildingsWithSunsetView(heights) {
    let count = 0;
    let maxHeight = 0;
    for (let i = heights.length - 1; i >= 0; i--) {
        if (heights[i] > maxHeight) {
            maxHeight = heights[i];
            count++;
        }
    }
    return count;
}

// Exemples d'utilisation :
console.log(countBuildingsWithSunsetView([3, 7, 8, 3, 6, 1])); // 3
console.log(countBuildingsWithSunsetView([1, 4, 5, 8])); // 1
