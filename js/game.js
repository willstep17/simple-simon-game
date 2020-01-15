(function(){
    "use strict";
    $(document).ready(function(){

        let workingSequence = [];
        let playerSequence = [];
        let correctAnswerCounter = 0;

        const gameStartButton = $("#start-game");
        gameStartButton.click(function(){
            startGame();
        });

        const greenPad = $("#green-pad");
        const redPad = $("#red-pad");
        const yellowPad = $("#yellow-pad");
        const bluePad = $("#blue-pad");
        greenPad.click(function(){
            playerSequence.push("green");
            compareSequences(workingSequence, playerSequence);
        });
        greenPad.attr("disabled", true);
        redPad.click(function(){
            playerSequence.push("red");
            compareSequences(workingSequence, playerSequence);
        });
        redPad.attr("disabled", true);
        yellowPad.click(function(){
            playerSequence.push("yellow");
            compareSequences(workingSequence, playerSequence);
        });
        yellowPad.attr("disabled", true);
        bluePad.click(function(){
            playerSequence.push("blue");
            compareSequences(workingSequence, playerSequence);
        });
        bluePad.attr("disabled", true);

        const statusArea = $("#status-area");

        function startGame() {
            statusArea.empty();
            gameStartButton.attr("disabled", true);
            workingSequence = [];
            playerSequence = [];
            buildSequence(workingSequence);
            displaySequence(workingSequence);
        }

        function endGame() {
            workingSequence = [];
            playerSequence = [];
            correctAnswerCounter = 0;
            statusArea.text("GAME OVER");
            gameStartButton.attr("disabled", false);
        }

        function buildSequence(inputSequence) {
            let randomNumber = Math.floor((Math.random() * 4) + 1);
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

        async function displaySequence(inputSequence) {
            greenPad.attr("disabled", true);
            redPad.attr("disabled", true);
            yellowPad.attr("disabled", true);
            bluePad.attr("disabled", true);
            await sleep(1000);
            for (let i = 0; i < inputSequence.length; i++) {
                switch (inputSequence[i]) {
                    case "green":
                        flashGreen();
                        await sleep(1600);
                        break;
                    case "red":
                        flashRed();
                        await sleep(1600);
                        break;
                    case "yellow":
                        flashYellow();
                        await sleep(1600);
                        break;
                    case "blue":
                        flashBlue();
                        await sleep(1600);
                        break;
                }
            }
            greenPad.attr("disabled", false);
            redPad.attr("disabled", false);
            yellowPad.attr("disabled", false);
            bluePad.attr("disabled", false);
        }

        function compareSequences(inputWorking, inputPlayer) {
            if(inputWorking.length === inputPlayer.length) {
                if (inputWorking.join("").match(inputPlayer.join(""))) {
                    correctAnswerCounter++;
                    statusArea.text("Correct Sequences: " + correctAnswerCounter);
                    playerSequence = [];
                    buildSequence(inputWorking);
                    displaySequence(inputWorking);
                } else {
                    endGame();
                }
            }
        }

        async function flashGreen() {
            greenPad.addClass("flash-light-green").removeClass;
            await sleep(1550);
            greenPad.removeClass("flash-light-green");
        }

        async function flashRed() {
            redPad.addClass("flash-light-red");
            await sleep(1550);
            redPad.removeClass("flash-light-red");
        }

        async function flashYellow() {
            yellowPad.addClass("flash-light-yellow");
            await sleep(1550);
            yellowPad.removeClass("flash-light-yellow");
        }

        async function flashBlue() {
            bluePad.addClass("flash-light-blue");
            await sleep(1550);
            bluePad.removeClass("flash-light-blue");
        }

        function sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }

    });
})();







