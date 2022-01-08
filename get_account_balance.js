let Web3 = require('web3')
let url = 'https://mainnet.infura.io/v3/cfc8a67431274099a151d7de778d7e37'
let web3 = new Web3(url)

let address = "0x00000000219ab540356cBB839Cbe05303d7705Fa"

web3.eth.getBalance(address, function(error, balance) {
    if(!error) {
        console.log(web3.utils.fromWei(balance, 'ether'));
    } else {
        console.log(error);
    }
})
