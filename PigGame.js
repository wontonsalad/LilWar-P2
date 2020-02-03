//File Name: pigGAme.js
//
//This is the back-end of a pig game app.
//
//Author: Darren Huai


/* This is a normal 6 sided dice except the 1 is a value of 0 */
const chalk = require('chalk')

function rollDice() {
    const dice = Math.ceil(Math.random() * 6)

    if(dice == 1) {
        return 0
    } else {
        return dice
    }

}

function printBoard(current_player, p1_score, p2_score, dice) {
    let ans = '\n'

    if(p1_score < 10) {
        p1_score = p1_score + ' '
    }
    if(current_player===1) {
        ans += '    ' + chalk.green('|=====================|') + chalk.gray('|====================|\n')
        ans += '    ' + chalk.green('|       Player 1      |') + chalk.gray('|      Player 2      |\n')
        ans += '    ' + chalk.green('|       ' + chalk.bold('Score ' + p1_score) + '       |') + chalk.gray('|      Score ' + p2_score + '       |')
        ans += '    ' + chalk.green('|---------------------|') + chalk.gray('|--------------------|\n')
        ans += '    ' + chalk.green('|       Dice:  ' + dice + '      |') + chalk.gray('|                    |\n')
        ans += '    ' + chalk.green('|=====================|') + chalk.gray('|====================|\n')

            
         
    } else {
        ans += '    ' + chalk.gray('|=====================|') + chalk.green('|====================|\n')
        ans += '    ' + chalk.gray('|       Player 1      |') + chalk.green('|      Player 2      |\n')
        ans += '    ' + chalk.gray('|       ' + chalk.bold('Score ' + p2_score) + chalk.green('|    Score ' + p2_score + '       |'))
        ans += '    ' + chalk.gray('|---------------------|') + chalk.gray('|--------------------|\n')    
        ans += '    ' + chalk.gray('|                     |') + chalk.green('|       Dice:  ' + dice + '           |\n')
        ans += '    ' + chalk.gray('|=====================|') + chalk.green('|====================|\n')
    }
    console.log(ans);
}
module.exports = {
    rollDice: rollDice,
    printBoard: printBoard
}