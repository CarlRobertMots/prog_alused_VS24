const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Kas soovite istekoha valida(`ise`) voi loosida (`loos`)", istekoht =>{
    if (istekoht == "ise"){
        rl.question("Kas soovite istuda akna aares(`aken`) voi mitte (`muu`)",tapsemkoht =>{
            if (tapsemkoht == "aken"){
                console.log("Valisite ise. Aknakoht")
            }
            else if (tapsemkoht == "muu"){
                console.log("Valisite ise. Vahekaigukoht")
            }
            rl.close()
        })
    } 
    else if (istekoht == "loos") {
        if (Math.ceil(Math.random() * 3) == 1) {
            console.log("Koht loositi. Aknakoht.")
        } else {
            console.log("Koht loositi. Vahekaigukoht")
        }
        rl.close()
    }
        
})
