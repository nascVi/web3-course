let Web3 = require('web3')
let ws = 'wss://mainnet.infura.io/ws/v3/cfc8a67431274099a151d7de778d7e37'
var web3 = new Web3(ws)

web3.eth.subscribe('newBlockHeaders', (error, blockheader)=>{
    if(!error) {
        console.log(blockheader);
    }else{
        console.log(error);
    }
})