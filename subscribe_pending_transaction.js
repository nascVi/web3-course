const Web3 = require('web3')
const ws = 'wss://mainnet.infura.io/ws/v3/cfc8a67431274099a151d7de778d7e37'
const web3 = new Web3(ws)

// web3.eth.subscribe('pendingTransactions', (error, txhash) =>{
//     console.log(txhash);
// })

web3.eth.subscribe('pendingTransactions', (error, txhash) =>{
    if(!error) {
        web3.eth.getTransaction(txhash, (error, tx) => {
            if(tx!=null){
                // console.log(tx);
                // filter transaction >= 1eth
                if(tx.value >= 1000000000000000000){
                    console.log(tx.value);
                    console.log(web3.utils.fromWei(tx.value, 'ether'), 'ether');
                }
            }
        })
    }else{
        console.log(error);
    }
})
