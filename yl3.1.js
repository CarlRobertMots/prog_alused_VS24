const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Sisestage mitu korda aratada: ", aratus => {
    for (let kord = 1; kord <= aratus; kord++){
        console.log("Touse ja sara!")
    }
    rl.close()
})