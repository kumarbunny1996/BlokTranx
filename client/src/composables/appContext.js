import { ref, watchEffect } from "vue";
import { contractAddress, contractAbi } from "../utils/constants";
import { ethers } from "ethers";

const { ethereum } = window;

export const appContext = () => {
  const currentAccount = ref("");
  const transactions = ref([]);

  const createEthereumContract = () => {
    let provider = new ethers.providers.Web3Provider(ethereum);
    let signer = provider.getSigner();
    let transactionsContract = new ethers.Contract(
      contractAddress,
      contractAbi,
      signer
    );
    return transactionsContract;
  };

  const getAllTransactions = async () => {
    try {
      if (!ethereum) return alert("Please install metamask");
      let transactionContract = createEthereumContract();
      transactions.value = await transactionContract.getAllTransactions();
      console.log(transactions.value);
    } catch (error) {
      console.log(error);
      throw new Error("No ethereum address is found");
    }
  };

  const checkIfWalletIsConnected = async () => {
    try {
      if (!ethereum) return alert("Please install metamask");
      const accounts = await ethereum.request({ method: "eth_accounts" });
      console.log(accounts);
      if (accounts.length) {
        currentAccount.value = accounts[0];
        getAllTransactions();
      } else {
        console.log("no accounts found");
      }
    } catch (error) {
      console.log(error);
      throw new Error("No ethereum address is found");
    }
  };

  watchEffect(() => {
    checkIfWalletIsConnected();
  });

  return {
    currentAccount,
    transactions,
    createEthereumContract,
  };
};
