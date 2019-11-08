let reset = () => {
    // mot à trouver
    const WORD = ['B', 'O', 'N', 'J', 'O', 'U', 'R'];
    // tableau d'affichage
    let guessWord = ['_', '_', '_', '_', '_', '_', '_'];
    // tableau de validation
    let finish = [];
    // variable de validation
    let test;
    // guessLetter
    // compteur
    let count = 0;
    let guessLetter = () => {
        // remise de test à 0
        test = 0;
        // 1 => récupérer lettre
        let enterLetter = prompt('Entrez une lettre afin de deviner le mot.').toUpperCase();
        // 4 => on parcourt le tableau final
        for(let i = 0; i <= finish.length; i++){
            // vérification lettres déja enregistrées
            if(finish[i] === enterLetter){
                alert('deja dit');
                // on relance la fonction
                guessLetter();
                count ++;
            }
        }
        // 2 => parcourir tableau WORD
        for (let i = 0; i <= WORD.length; i++) {
            // 3 => comparer lettre
            if(WORD[i] === enterLetter){
                    // push dans guessWord
                    guessWord.splice(i, 1, enterLetter);
                    console.log(guessWord);
                    // push dans finish
                    finish.splice(i, 0, enterLetter);
                    // on enclenche une variable de vérification pour traiter l'alerte dans une autre condition
                    test = 1;
            }
        }
        if(test == 1){
            alert(`bonne réponse: ${guessWord} `);
            // 5 => comparaison avec mot final
            if(finish.length === WORD.length){
                // c'est gagné
                alert(`gagné ${guessWord} en ${count} coups !`);
                // on relance la fonction reset(); et on recommence le jeu
                reset();
            }
        }
        else{
            alert(`raté : ${guessWord} `);
        }
        // compteur
        count ++;
        // on relance la fonction
        guessLetter();
    }
    // initialisation fonction guessLetter();
    guessLetter();
}
// initialisation fonction reset();
reset();