require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/yjkdLv9JzrcCR6PajPw6GwxqsbBwmf8h',
      accounts: ['ecade2f1cfa47cb2a15ad02b70198d60250b732e053a9f0a19997b8cb1a0841a'],
    },
  },
};