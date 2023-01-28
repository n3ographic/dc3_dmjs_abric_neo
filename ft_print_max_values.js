function deuxGrandesValeurs(tableau){
let valeurUn = 0;
let valeurDeux = 0;

for(let i = 0;  i < tableau.length; i++){
    if(tableau[i] > valeurUn){
        valeurDeux = valeurUn;
        valeurUn = tableau[i];
    }
    else if (tableau[i] > valeurDeux && tableau[i] < valeurUn){
        valeurDeux = tableau[i]
    }
}

return[valeurUn, valeurDeux];
}

let number = [1,3,5,10,4,8,15];

console.log(deuxGrandesValeurs(number));