const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Sisestage oma nimi: ", Nimi =>{
    rl.question("Sisestage lubatud kiirus (km/h): ", LubatudKiirus =>{
        rl.question("Sisestage tegelik kiirus (km/h): ", TegelikKiirus =>{
            let result = (TegelikKiirus - LubatudKiirus) * 3
            result = Math.min(result,190)
            console.log(`${Nimi}, kiiruse ületaimse eest on teie trahv ${result} eurot.`)
            rl.close()
            } )
    } )
} )