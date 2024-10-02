const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Sisesta õhutemperatuur: ", temp =>{
    if (temp < 4.0){
        console.log('ei ole jäätumise ohtu.')
    } 
    else{
        console.log ('On jäätumise oht')
    } 
    rl.close()
})