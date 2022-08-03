require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea clog office skull dance birth soccer mixture harvest merry fog sign'; 
let testAccounts = [
"0xbbc1dcbfb8ca6ffe149ffb02f7255ae7c8ce6b8bf56123f9ef578a5bf1a74157",
"0x118e1cefe81d1a5e28897fec60b073c265f31b2eb2a9e630e681adde66b92167",
"0x1e2a54075933ed24c3f8ffd8adc23db880627bf68348916d0656db2744b2e19a",
"0x671a32057c912f7d7b04634b6acfcc9e58c51d922047aeebc66e528e6d5e147d",
"0x791fb386f7094e7b0d11a6cb1ef6844bcf17f545c1e11375872f17b8aee76a9a",
"0xb9be3abdcbfe9d523fa8445a0ff114d46c1d726cc177b903fa95b5e1c942b48d",
"0x2e4050ea226083fe72e33d77e7b3c018340f5d83085b89c6166451abb232ddf0",
"0x4c389b321287cd3d43db16ca27d9b2b08aadb378d36897b061b9d6751980bdd7",
"0xd8625dcc8ddfbb991d671c8bdd0976efe42b534787f6f187c20eb48110232521",
"0xce98a1e93f9025512fddf31159d3fc824d5d6b77f63993a8b47e3eb5bd2ff2e8"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

