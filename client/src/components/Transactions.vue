<template>
  <div
    class="w-full flex justify-center items-center gradient-bg-transactions 2xl:px-20"
  >
    <div class="flex flex-col md:p-12 py-12 px-4">
      <h3
        v-if="currentAccount.value"
        class="text-white text-center text-3xl my-2"
      >
        Latest Transaction
      </h3>
      <h3 v-else class="text-white text-center text-3xl my-2">
        Connect your account to see the latest transactions
      </h3>
      <div class="flex flex-wrap justify-center items-center mt-10">
        <p
          v-if="!transactionCount.value"
          class="text-white text-2xl font-light"
        >
          There is no transaction not yet done
        </p>
        <TransactionCard
          v-else
          v-for="(transaction, index) in transactionList"
          :key="index"
          v-bind="{ ...transaction }"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { computed } from "@vue/reactivity";
import TransactionCard from "./TransactionCard.vue";
import { toRefs } from '@vue/reactivity';
export default {
  name: "Transactions",
  components: { TransactionCard },
  props: {
    currentAccount: {
      type: Object,
      default: {},
    },
    transactionCount: {
      type: Object,
      default: {},
    },
    transactions: {
      type: Object,
      default: {},
    },
  },
  setup(props) {
    let { transactions } = toRefs(props);
  
    const transactionList = computed(() => {
      return transactions.value.map((transaction) => ({
        addressTo: transaction.reciever,
        addressFrom: transaction.sender,
        message: transaction.message,
        keyword: transaction.keyword,
        amount: parseInt(transaction.amount._hex) / 10 ** 18,
        timestamp: new Date(
          transaction.timestamp.toNumber() * 1000
        ).toLocaleString(),
      }));
    });
    return {
      transactionList,
    };
  },
};
</script>
