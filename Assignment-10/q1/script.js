const numberToGuess = Math.floor(Math.random() * 50) + 1;

        function checkGuess() {
            let guess;
            do {
                guess = document.getElementById('guess').value;
                if (guess == numberToGuess) {
                    document.getElementById('result').innerText = "Congratulations! You guessed the number!";
                    break;
                } else {
                    document.getElementById('result').innerText = "Wrong guess, try again!";
                }
            } while (true);
        }