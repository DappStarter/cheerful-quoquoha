require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drip flock tooth guard render remind concert hunt merry forward spawn'; 
let testAccounts = [
"0x766f25dd49aab192319b80500e73d7b4c6c5541c83967d9d1188c6becf3c42d8",
"0xa4fc14a063e3f18c29dafe8f4ec70060fe546f02e0eeec7af0fc17a169a50bcf",
"0x5a11533ee0686a28609c731c0ec4c6587c48c15d684a55f60da70532c853a777",
"0x259c11a94de42440d65aee052b0f680ed2ee274e75c2a2d1cae7f39d3bb362b5",
"0x469f2bd83dad427aaadeead730fb87cda0d04fb4eec76d1a0fe9516cf7ac52e1",
"0x5f036319ce83b3f4343196a41b2f92fe71b2f809def6140ea060d622474fc8df",
"0x1d5e88d1587af14105a71adcb6d10d436e8bb4bd605c6b1401847ec9b06b8e63",
"0xbe354b0b6012b5aa154e00405839fb2d0abaf860cff9dbf35ceee76fc6c4738e",
"0xa9eb8187ffe052301f26597990f77706205753242e76b03b43376ae78e53f813",
"0xc1d95a1de250b7f22db5f1ef0795ee3bcc432e64a9302ff9b6a5cc3254e1e5f3"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
