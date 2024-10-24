const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Taringute arv: ", taringud => {
  for(let arv = 1; arv <= taringud;arv++ ){
    console.log(Math.ceil(Math.random() * 6))
  }
  rl.close()
})