function chiffreDouble(tableau){
    let chiffreDupliquer = false;
    for(let i = 0; i < tableau.length; i++){
        for(let j = i+1; j < tableau.length; j++){
            if(tableau[i] === tableau[j]){
                chiffreDupliquer = true;
                i = tableau.length;
                j = tableau.length;
            }
        }
    }
    return chiffreDupliquer
}


let tableauChiffre = [1,2,2,3,4,5,6,7,8,9]
console.log(chiffreDouble(tableauChiffre));