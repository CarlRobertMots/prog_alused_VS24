const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Sisestage Leedu Perenimi: ", Nimi =>{
    if (Nimi.slice(-2) == "ne"){
        console.log("Abielus");
    }   
    else if (Nimi.slice(-2) == "te"){
        console.log("Vallaline");
    } 
    else if (Nimi.slice(-1) == "e"){
        console.log("Määramata");
    } 
    else console.log("Pole Leedulanna perekonnanimi")

rl.close()
})