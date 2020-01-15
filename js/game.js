(function(){
    "use strict";
    $(document).ready(function(){

        const gameStartButton = $("#start-game");

        gameStartButton.click(function(){
            playGame();
        });

        const greenPad = $("#green-pad");
        const redPad = $("#red-pad");
        const yellowPad = $("#yellow-pad");
        const bluePad = $("#blue-pad");



        function playGame() {
            let workingSequence = [];
            let playerSequence = [];

            buildSequence(workingSequence);
        }

        function displaySequence(inputSequence) {

        }


        function buildSequence(inputSequence) {
            let randomNumber = Math.floor((Math.random() * 4) + 1);
            console.log(randomNumber);
            switch (randomNumber) {
                case 1:
                    inputSequence.push("green");
                    break;
                case 2:
                    inputSequence.push("red");
                    break;
                case 3:
                    inputSequence.push("yellow");
                    break;
                case 4:
                    inputSequence.push("blue");
                    break;
            }
        }



    });
})();