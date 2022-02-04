import { ethers } from "ethers";
import { computed, reactive, ref, watch } from "vue";
import { shortenAddress } from "../utils/shortenAddress";

const { ethereum } = window;

export const welcomeContext = ({ createEthereumContract, currentAccount }) => {
  const isLoading = ref(false);
  let formdata = reactive({
    addressTo: "",
    amount: "",
    keyword: "",
    message: "",
  });
  let transactionCount = ref(localStorage.getItem("transactionCount"));

  const handleInput = (inputVal, name) => {
    formdata[name] = inputVal;
  };

  const connectWallet = async () => {
    try {
      if (!ethereum) return alert("Please install metamask");
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      currentAccount.value = accounts[0];
    } catch (error) {
      console.log(error);
      throw new Error("No ethereum address is found");
    }
  };

  const checkIfTransactionExits = async (value) => {
    try {
      if (!ethereum) return alert("Please install metamask");
      if (
        localStorage.getItem("transactionCount") === [] ||
        null ||
        undefined
      ) {
        let transactionContract = createEthereumContract();
        let currentTransactionCount =
          await transactionContract.getTransactionsCount();
        localStorage.setItem("transactionCount", currentTransactionCount);
      } else {
        localStorage.setItem("transactionCount", value);
      }
    } catch (error) {
      console.log(error);
      throw new Error("No ethereum address is found");
    }
  };

  const displayCurrentAccount = computed(() =>
    currentAccount.value ? shortenAddress(currentAccount.value) : "Address"
  );

  const sendTransactions = async () => {
    try {
      if (ethereum) {
        let { addressTo, amount, keyword, message } = formdata;
        let transactionContract = createEthereumContract();
        let parsedAmount = ethers.utils.parseEther(amount);
        console.log(parsedAmount);

        await ethereum.request({
          method: "eth_sendTransaction",
          params: [
            {
              from: currentAccount.value,
              to: addressTo,
              gas: "0x5208",
              value: parsedAmount._hex,
            },
          ],
        });
        const transactionHash = await transactionContract.addToBlockchain(
          addressTo,
          parsedAmount,
          keyword,
          message
        );

        isLoading.value = true;
        await transactionHash.wait();
        isLoading.value = false;
        let count = await transactionContract.getTransactionsCount();
        transactionCount.value = count;
      }
    } catch (error) {
      console.log(error);
      throw new Error("No ethereum address is found");
    }
  };

  watch(transactionCount, (newVal) => {
    checkIfTransactionExits(newVal);
  });

  return {
    isLoading,
    formdata,
    transactionCount,
    handleInput,
    displayCurrentAccount,
    connectWallet,
    sendTransactions,
  };
};
