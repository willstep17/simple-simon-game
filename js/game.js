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

        async function displaySequence(inputSequence) {
            for (let i = 0; i < inputSequence.length; i++) {
                switch (inputSequence[i]) {
                    case "green":
                        flashGreen();
                        await sleep(1500);
                        break;
                    case "red":
                        flashRed();
                        await sleep(1500);
                        break;
                    case "yellow":
                        flashYellow();
                        await sleep(1500);
                        break;
                    case "blue":
                        flashBlue();
                        await sleep(1500);
                        break;
                }
            }
        }

        function sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
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

        function flashGreen() {
            greenPad.addClass("flash-light-green");
            setTimeout(function(){
                greenPad.removeClass("flash-light-green");
            }, 1500);
        }

        function flashRed() {
            redPad.addClass("flash-light-red");
            setTimeout(function(){
                redPad.removeClass("flash-light-red");
            }, 1500);
        }

        function flashYellow() {
            yellowPad.addClass("flash-light-yellow");
            setTimeout(function(){
                yellowPad.removeClass("flash-light-yellow");
            }, 1500);
        }

        function flashBlue() {
            bluePad.addClass("flash-light-blue");
            setTimeout(function(){
                bluePad.removeClass("flash-light-blue");
            }, 1500);
        }

        displaySequence(["green", "blue", "red"]);

    });
})();







