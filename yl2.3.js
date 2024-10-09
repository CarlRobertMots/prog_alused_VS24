const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Sisestage enda vanus: ", vanus =>{
    rl.question("Sisestage enda sugu (M, m või N, n): ", sugu =>{
        rl.question("Sisestage treeningu tüüp (1, 2 või 3) : ", trenn => { 
          if (sugu == 'M'|| sugu == 'm'){
            Pulss = 220 - vanus
          } else if (sugu == 'N' || sugu == 'n') {
            Pulss = 206 - vanus * 0.88
          } 
            let minPulss
            let maxPulss

           if (trenn == 1){ 
              minPulss = 0.5 * Pulss
              maxPulss = 0.7 * Pulss
            }
            else if (trenn == 2){ 
              minPulss = 0.7 * Pulss
              maxPulss = 0.8 * Pulss
            }
            else if (trenn == 3){ 
              minPulss = 0.8 * Pulss
              maxPulss = 0.87 * Pulss
            }
            maxPulss = Math.round(maxPulss)
            minPulss = Math.round(minPulss)

            console.log(`Pulsisageuds peab olema ${minPulss} kuni ${maxPulss}.`)

            rl.close()
        })
    } )
    
} )