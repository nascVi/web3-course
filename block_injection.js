let Web3 = require('web3')
let url = 'https://mainnet.infura.io/v3/cfc8a67431274099a151d7de778d7e37'
let web3 = new Web3(url)

// web3.eth.getBlockNumber().then((result)=>{
//     console.log(result);
// })

// web3.eth.getBlock(13975129).then((block)=>{
//     console.log(block);
// })

// web3.eth.getBlockNumber().then((result)=>{
//     for(let i=0;i<100;i++){
//         web3.eth.getBlock(result-i).then((block)=>{
//             console.log(block.number);
//         })
//     };
// })

// web3.eth.getBlock('pending').then((block)=>{ // strings: pending, latest
//     console.log(block.number);
// })

// web3.eth.getBlock('0x8ad15342dc0a9c20cc6169f90497e62cff781f3e62971a0e4a407ada33d7427d').then((block)=>{ // by the hash
//     console.log(block.number);
// })

web3.eth.getTransactionFromBlock(13975132, 2).then(console.log);
