function countBuildingsWithSunsetView(heights) {
    let count = 0;
    for (let i = 0; i < heights.length; i++) {
        let hasView = true;
        for (let j = i + 1; j < heights.length; j++) {
            if (heights[i] <= heights[j]) {
                hasView = false;
                break;
            }
        }
        if (hasView) {
            count++;
        }
    }
    return count;
}

// Exemples d'utilisation :
console.log(countBuildingsWithSunsetView([3, 7, 8, 3, 6, 1])); // 3
console.log(countBuildingsWithSunsetView([1, 4, 5, 8])); // 1

//Dans ce code, la fonction countBuildingsWithSunsetView prend en entrée un tableau heights qui représente les hauteurs des bâtiments. Pour chaque bâtiment, nous vérifions s’il y a un bâtiment plus haut à l’ouest. 
//Si ce n’est pas le cas, cela signifie que le bâtiment actuel a une vue sur le coucher du soleil et nous augmentons le compteur count. À la fin, la fonction retourne le nombre total 
//de bâtiments ayant au moins un appartement avec une vue sur le soleil couchant.