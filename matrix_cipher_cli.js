/* File Name matrix_cipher_cli.js
 *
 * This is a CLI 2D matrix cipher program. 
 * 
 * To Encode a Message: node matrix_cipher_cli.js -e message.txt codez.txt
 * To Decode a Message: node matrix_cipher_cli.js -d code.txt message.txt
 *
 * Author: Darren Huai
 */

let fs = require('fs')
let message = '', code = ''

const flag = process.argv[2]
const inputFile = process.argv[3]
const outputFile = process.argv[4]

const input = fs.readFileSync(inputFile, {encoding:'utf-8', flag:'r'})

if(flag === '-e') {
    code = encodeMessage(input)
    fs.writeFileSync(outputFile, code)
} else if(flag === '-d') {
    message = decodeMessage(input)
    fs.writeFileSync(outputFile, message)
} else {
    console.log('Error: Invalid Input')
    console.log('  To Encode a Message: node matrix_cipher_cli.js -e message.txt codez.txt')
    console.log('  To Decode a Message: node matrix_cipher_cli.js -d code.txt message.txt')
}

function encodeMessage(input) {
    let message = []
    let code = []
    let encodeKey = [[3, 7], [-2, -5]]
    let answer = ''

    // Setting up the matrices
    message[0] = new Array(Math.ceil(input.length/2)).fill(0)
    message[1] = new Array(Math.ceil(input.length/2)).fill(0)
    code[0] = new Array(Math.ceil(input.length/2)).fill(0)
    code[1] = new Array(Math.ceil(input.length/2)).fill(0)

    // Convert the input to ASCII values and store them in the message matrix
    for (let i=0; i<input.length/2; i++) {
        message[0][i] = input.charCodeAt(i)
        message[1][i] = input.charCodeAt(i+Math.ceil(input.length/2))
    }

    // Adding a space to the end if needed.
    if (input.length % 2 == 1)
        message[1][Math.ceil(input.length/2)-1] = ' '.charCodeAt(0)

    // Multiplying code1 by the encodeKey and store it in the code2 matrix
    for(let i=0; i<message[0].length; i++) {
        code[0][i] = encodeKey[0][0]*message[0][i] + encodeKey[1][0]*message[1][i]
        code[1][i] = encodeKey[0][1]*message[0][i] + encodeKey[1][1]*message[1][i]
    }

    for(let i=0; i<code.length; i++) {
        for(let j=0; j<code[0].length; j++) {
            answer += code[i][j] + ' '
        }
    }

    return answer
}
 
function decodeMessage(input) {
    let inputVals = []
    let code = []
    let message = []  //The message after the multiplication.
    let decodeKey = [[5, 7], [-2, -3]]
    let answer = ''

    inputVals = input.trim().split(" ")

    // Setting up the matrices
    message[0] = new Array(Math.ceil(inputVals.length/2)).fill(0)
    message[1] = new Array(Math.ceil(inputVals.length/2)).fill(0)
    code[0] = new Array(Math.ceil(inputVals.length/2)).fill(0)
    code[1] = new Array(Math.ceil(inputVals.length/2)).fill(0)

    // Convert the input to integer values and store them in the code matrix
    for (let i=0; i<inputVals.length/2; i++) {
        code[0][i] = parseInt(inputVals[i])
        code[1][i] = parseInt(inputVals[i+Math.ceil(inputVals.length/2)])
    }

    // Multiplying the code matrix by the decodeKey matrix and store it in the message matrix
    for(let i=0; i<message[0].length; i++) {
        message[0][i] = decodeKey[0][0]*code[0][i] + decodeKey[1][0]*code[1][i]
        message[1][i] = decodeKey[0][1]*code[0][i] + decodeKey[1][1]*code[1][i]
    }

    for(let i=0; i<code.length; i++) {
        for(let j=0; j<code[0].length; j++) {
            answer += String.fromCharCode(message[i][j])
        }
    }

    return answer
 }