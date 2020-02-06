let player1_score = 0, player2_score = 0, dice = 0, current_player = 1
const winning_score = 50

function roll(){
    console.log('Player ' + current_player + 'is rolling the dice...')
    let dice = Math.ceil(Math.random() * 6)

    document.getElementById('dice-img').src = 'imgs/dice' + dice + '.png'
    document.getElementById('dice-img').alt = 'Dice landed on' + dice
    if(dice > 1) {
        if(current_player ===  1) {
            player1_score += dice
            document.getElementById('player1-score').innerHTML = 'Score: ' + player1_score
        }else {
            player2_score += dice
            document.getElementById('player2-score').innerHTML = 'Score: ' + player2_score
        }
        if(player1_score >= winning_score || player2_score >= winning_score)
            game_won()
    }else {
        lose_turn()
    }
        }
    function hold() {
        console.log('Player ' + current_player + ' just held')

        let current_player_background, current_player_text
        let other_player_background, other_player_text

        if (current_player === 1) {
            current_player_background = 'player2-background'
            current_player_text = 'player2-text'
            other_player_background = 'player1-background'
            other_player_text = 'player1-text'
            current_player = 2
        } else {
            current_player_background = 'player1-background'
            current_player_text = 'player1-text'
            other_player_background = 'player2-background'
            other_player_text = 'player2-text'
            current_player = 2
        }


        document.getElementById(current_player_background).style.background = '#90EE90';
        document.getElementById(current_player_background).style.color = '#000000';
        document.getElementById(current_player_text).innerHTML = 'It is your turn';

        document.getElementById(other_player_background).style.background = '#DCDCDC';
        document.getElementById(other_player_background).style.color = '#A9A9A9';
        document.getElementById(other_player_text).innerHTML = 'It is NOT your turn';
        }

        function lose_turn() {
            console.log('Player' + current_player + 'just lost his turn')
            confirm('Player ' + current_player + 'just lost their turn and had their score reset to zero!')
            if(current_player ===1) {
                player1_score = 0
                document.getElementById('player1-score').innerHTML = 'Score: 0'
            } else {
                player2_score = 0
                document.getElementById('player2-score').innerHTML = 'Score: 0'

            }
            hold()
            
        }

        function game_won() {
            confirm.log(current_player + ' just WON!')
            confirm('Congrats bruh' + current_player + 'nice')
        }ls 
    


