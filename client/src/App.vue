<template>
  <div class="min-h-screen">
    <div class="gradient-bg-welcome">
      <Navbar />
      <Welcome v-bind="welcomeProps" />
    </div>
    <Services />
    <Transactions v-bind="transactionProps" />
    <Footer />
  </div>
</template>

<script>
import { Navbar, Welcome, Services, Transactions, Footer } from "./components";
import { appContext } from "./composables/appContext";
import { welcomeContext } from "./composables/welcom";

export default {
  name: "App",
  components: { Navbar, Welcome, Services, Transactions, Footer },
  setup() {
    let { currentAccount, createEthereumContract, transactions } = appContext();
    let {
      isLoading,
      sendTransactions,
      connectWallet,
      formdata,
      displayCurrentAccount,
      handleInput,
      transactionCount,
    } = welcomeContext({ createEthereumContract, currentAccount });

    let welcomeProps = {
      isLoading,
      currentAccount,
      handleInput,
      connectWallet,
      sendTransactions,
      formdata,
      displayCurrentAccount,
    };

    let transactionProps = {
      currentAccount,
      transactionCount,
      transactions,
    };

    return {
      welcomeProps,
      transactionProps,
    };
  },
};
</script>
