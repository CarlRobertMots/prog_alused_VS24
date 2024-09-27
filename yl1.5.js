const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Sisestage ainepunktide arv: ", ainepunkt =>{
    rl.question ("Sisestage nädalate arv: ", nadalad =>{
        let tunnid = Math.round(ainepunkt * 26 / nadalad)
        console.log(tunnid)
        rl.close()
    })
})
