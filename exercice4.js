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

//Dans ce code, la fonction countBuildingsWithSunsetView commence par initialiser un compteur count et une variable maxHeight pour garder une trace de l’immeuble le plus haut rencontré. 
//Ensuite, elle parcourt la liste heights de droite à gauche. 
//Si l’immeuble actuel est plus haut que maxHeight, cela signifie qu’il a une vue sur le coucher du soleil, donc nous augmentons count et mettons à jour maxHeight. 
//À la fin de la boucle, la fonction retourne le nombre total d’immeubles ayant une vue sur le coucher du soleil. Cette méthode garantit que chaque élément n’est parcouru qu’une seule fois, 
//ce qui donne une complexité temporelle de (O(n)).