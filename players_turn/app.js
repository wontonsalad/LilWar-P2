let currentPlayer=1

function switchTurn() {
    //let currentPlayerDiv, otherPlayerDiv, currentPlayerP, otherPlayerP
if(currentPlayer===1) {
    currentPlayer =2
    

    
    document.getElementById('person1-div').style.color ='#808080'
    document.getElementById('person1-div').style.backgroundColor ='#D0D2D4'
    document.getElementById('person2-div').style.color ='#000000'
    document.getElementById('person2-div').style.backgroundColor ='#88f56e'

    document.getElementById('person1-p').innerHTML = 'It is Not your Turn'
    document.getElementById('person2-p').innerHTML = 'It is your Turn'


} else {
    currentPlayer = 1
    document.getElementById('person2-div').style.color ='#808080'
    document.getElementById('person2-div').style.backgroundColor ='#D0D2D4'
    document.getElementById('person1-div').style.color ='#000000'
    document.getElementById('person1-div').style.backgroundColor ='#88f56e'

    document.getElementById('person2-p').innerHTML = 'It is Not your Turn'
    document.getElementById('person1-p').innerHTML = 'It is your Turn'

}
}