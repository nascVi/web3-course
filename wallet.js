let Web3 = require('web3')
let url = 'https://mainnet.infura.io/v3/cfc8a67431274099a151d7de778d7e37'
let web3 = new Web3(url)

let wallet = web3.eth.accounts.wallet.create(2, 'some random string')

let account = web3.eth.accounts.create()
wallet.add(account.privateKey)

console.log(wallet);
