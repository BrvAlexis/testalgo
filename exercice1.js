//Avec une liste de nombres entiers relatifs et un nombre k, crée une méthode retournant un booléen 
//qui affiche si deux nombres de cette liste ont k comme résultat de leur somme.
//Par exemple, si je te donne la liste [10, 15, 3, 7] et k = 17, la fonction devra sortir 
//true car 10 + 7 = 17. Si je te donne la liste [1, 8, 10, 21] et k = 19, 
//la fonction devra sortir false car il n'y a pas deux nombres ayant 19 comme résultat de leur addition.


function hasPairWithSum(arr, k) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === k) {
                return true;
            }
        }
    }
    return false;
}

// Exemples d'utilisation :
console.log(hasPairWithSum([10, 15, 3, 7], 17)); // true
console.log(hasPairWithSum([1, 8, 10, 21], 19)); // false
