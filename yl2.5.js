const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let Spam = "Kiri on spamm"
let NoSpam = "Kiri ei ole spamm"
rl.question("Sisestage kirja suurus: ", suurus =>{
    rl.question("Sisestage kirja teema pealkiri: ", pealkiri => {
        rl.question("Kas kirjaga on kaasas fail: ", fail => {
            if (suurus >= 1 && fail == "jah" || fail == "Jah"){
                console.log(Spam)
            } 
            else if (pealkiri == ""){
                console.log(Spam)
            }  
            else{
                console.log(NoSpam)
            } 
            rl.close()
        })
        
    })
})
