require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.4",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/tzq6fzDe5uACBcVCzs2A3n4lYdSilckq",
      accounts: [
        "ddf5256817d1431887e454965a6c7ba202efd1215033e53e1826cbdacc92eb7f",
      ],
    },
  },
};
