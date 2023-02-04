function chiffreDouble(tableau) {
    let enleverDupliquer = [];
    for (let i = 0; i < tableau.length; i++) {
        let chiffreDupliquer = false;
        for (let j = 0; j < enleverDupliquer.length; j++) {
            if (tableau[i] === enleverDupliquer[j]) {
                chiffreDupliquer = true;
            }
        }
        if (chiffreDupliquer === false) {
           enleverDupliquer.push(tableau[i]);
        }
    }
    return enleverDupliquer;
}

let tableauChiffre = [1,2,2,3,4,5,6,7,8,9]
console.log(chiffreDouble(tableauChiffre));
