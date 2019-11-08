let game = () => {
    const WORD = ['B', 'O', 'N', 'J', 'O', 'U', 'R'];
    let guessWord = ['_', '_', '_', '_', '_', '_', '_'];
    let finish = [];
    let test;
    let count = 0;
    let guessLetter = () => {
        test = 0;
        let enterLetter = prompt('Entrez une lettre afin de deviner le mot.').toUpperCase();
        for(let i = 0; i <= finish.length; i++){
            if(finish[i] === enterLetter){
                alert('deja dit');
                guessLetter();
                count ++;
            }
        }
        for (let i = 0; i <= WORD.length; i++) {
            if(WORD[i] === enterLetter){
                    guessWord.splice(i, 1, enterLetter);
                    console.log(guessWord);
                    finish.splice(i, 0, enterLetter);
                    test = 1;
            }
        }
        if(test == 1){
            alert(`bonne réponse: ${guessWord} `);
            if(finish.length === WORD.length){
                alert(`gagné ${guessWord} en ${count} coups !`);
                game();
            }
        }
        else{
            alert(`raté : ${guessWord} `);
        }
        count ++;
        guessLetter();
    }
    guessLetter();
}
game();