let game = () => {
    const WORD = ["B","O","N","J","O","U","R"];
    let guessWord = ["_", "_", "_", "_", "_", "_", "_"];
    let fail = [];
    let finish = [];
    let test;
    let count = 0;
    let guessLetter = () => {
        test = 0;
        let enterLetter = prompt("Veuillez entrer une lettre pour commencer à jouer.").toUpperCase();
        for(let i = 0; i <= finish.length; i++){
            if(finish[i] === enterLetter){
                alert("Lettre déjà utilisée, veuillez entrer une autre lettre.");
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
            alert(`Trouvé ! : ${guessWord} `);
            if(finish.length === WORD.length){
                alert(`Vous avez trouvé ${guessWord} en ${count} coups !`);
                game();
            }
        }
        else{
            for(let j= 0; j <= fail.length; j++){
                if(fail[j] === enterLetter){
                alert("Lettre déjà utilisée, veuillez entrer une autre lettre.");
                guessLetter();
                count ++;
            }
        }
            alert(`raté : ${guessWord} `);
            fail.splice(1, 0, enterLetter);
            console.log("Lettres ratées: " +fail)
        }
        count ++;
        guessLetter();
    }
    guessLetter();
}
game();