function reverseCaractere(caractere) {

    var sortiCaractere = "";

    for (var i = caractere.length - 1; i >= 0; i--) {

        sortiCaractere += caractere[i];

    }
    
    return sortiCaractere;
}
console.log(reverseCaractere('alors'));