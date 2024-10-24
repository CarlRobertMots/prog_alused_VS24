const { pid } = require('node:process');
const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Mitu poialpoissi tahab ounu: ", poisid => {
    let ounad = 14
    for (let poialpoiss = 1; poialpoiss <= poisid;poialpoiss++) {
      let ounadBoys = Math.ceil(Math.random() * 2)
      console.log(ounadBoys)
      ounad = ounad - ounadBoys
    }
    console.log(`Lumivalgekesele jai ${ounad}`)
    rl.close()
})
