module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      from: '0xe3653F60c44c99a462282B93d553F6696e201EbA',
      network_id: 5777, // Match any network id
       gasPrice: 1,   // <--- Twice as much
       gas: 9999999,   // <--- Twice as much
    }
  }
};
