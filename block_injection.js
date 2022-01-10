let Web3 = require('web3')
let url = 'https://mainnet.infura.io/v3/cfc8a67431274099a151d7de778d7e37'
let web3 = new Web3(url)

web3.eth.getBlockNumber().then((result)=>{
    console.log(result);
})

web3.eth.getBlock(13975129).then((block)=>{
    console.log(block);
})