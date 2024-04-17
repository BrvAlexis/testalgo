function hasPairWithSum(arr, k) {
    const complements = new Set();
    for (const number of arr) {
        if (complements.has(number)) {
            return true;
        }
        complements.add(k - number);
    }
    return false;
}

// Exemples d'utilisation :
console.log(hasPairWithSum([10, 15, 3, 7], 17)); // true
console.log(hasPairWithSum([1, 8, 10, 21], 19)); // false

//Cette fonction parcourt la liste arr une seule fois. 
//Pour chaque élément, elle vérifie si le complément pour atteindre k est déjà dans l’ensemble complements. 
//Si c’est le cas, cela signifie qu’il existe une paire de nombres dans la liste dont la somme est égale à k, et la fonction retourne true. 
//Sinon, elle ajoute le complément nécessaire pour atteindre k à l’ensemble complements. Si la fonction termine le parcours sans trouver de paire correspondante, elle retourne false. 
//Cette méthode garantit que chaque élément n’est parcouru qu’une seule fois.