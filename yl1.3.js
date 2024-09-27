const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


rl.question("sisesta astme alus: ", astmealus => {
    rl.question("Sisesta astendaja: ", astendaja => {
        let result = astmealus ** astendaja
        console.log(result)
        rl.close ()
    } )
} )