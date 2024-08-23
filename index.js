let score = JSON.parse(localStorage.getItem('score'));

        if(score === null)
        {
            score={
                wins:0,
                losses:0,
                ties:0
            };
        }

        function playGame(playerMove)
        {
            const computerMove = pickComputerMove();

            let result =' ';

            if(playerMove === 'Rock')
            {
                if(computerMove=== 'Rock')
                {
                    result ='Tie';
                }
                else if(computerMove === 'Paper')
                {
                    result = 'You Lose';
                }
                else if(computerMove === 'Scissor')
                {
                    result = 'You Win!';
                }
            }

            if(playerMove === 'Paper')
            {
                if(computerMove === 'Rock')
                {
                    result = 'You Win!';
                }
                else if(computerMove === 'Paper')
                {
                    result ='Tie';
                }
                else if(computerMove === 'Scissor')
                {
                    result ='You Lose';
                }
            }

            if(playerMove === 'Scissor'){
                if(computerMove=== 'Rock')
                {
                    result ='You Lose';
                }
                else if(computerMove === 'Paper')
                {
                    result = 'You Win!';
                }
                else if(computerMove === 'Scissor')
                {
                    result = 'Tie';
                }
            }   

            if(result === 'You Win!')
            {
                score.wins +=1;
            }
            else if(result === 'You Lose')
            {
                score.losses+=1;
            }
            else if(result ==='Tie')
            {
                score.ties+=1;
            }

            localStorage.setItem('score',JSON.stringify(score));
            alert(`You Picked ${playerMove}.Computer Picked ${computerMove}. ${result}
Wins: ${score.wins} Losses:${score.losses} Tie:${score.ties}`);
        }
        function pickComputerMove()
        {
            let computerMove =' ';
            const randomMove = Math.random();

            if(randomMove >= 0 && randomMove < 1/3)
            {
                computerMove ='Rock';
            }
            else if(randomMove >=1/3 && randomMove < 2/3)
            {
                computerMove ='Paper';
            }
            else if(randomMove >=2/3 && randomMove < 1)
            {
                computerMove ='Scissor';
            }

            return computerMove;
        }