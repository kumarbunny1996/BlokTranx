<template>
  <div
    class="flex flex-1 2xl:min-w-[450px] 2xl:max-w-[500px] sm:min-w-[270px] sm:max-w-[300px] min-w-full hover:shadow-2xl bg-[#181918] rounded-md p-3 m-4"
  >
    <div class="flex flex-col justify-center items-center w-full mt-3">
      <div class="mb-6 p-2 w-full">
        <a :href="fromUrl" target="blank" rel="noreferrer">
          <p class="text-white text-base">
            From: {{ shortenAddress(addressFrom) }}
          </p>
        </a>
        <a :href="toUrl" target="blank" rel="noreferrer">
          <p class="text-white text-base">
            To: {{ shortenAddress(addressTo) }}
          </p>
        </a>
        <p class="text-white text-base">Amount: {{ amount }}</p>
        <p v-if="message" class="text-white text-base">
          Message: {{ message }}
        </p>
      </div>
      <img
        :src="gifUrl"
        alt="gif"
        class="w-full 2xl:h-96 h-64 rounded-md shadow-lg object-cover"
      />
      <div class="bg-black p-3 px-5 rounded-3xl -mt-5 w-max shadow-2xl">
        <p class="font-bold text-[#37c7da]">{{ timestamp }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import { toRefs } from "@vue/reactivity";
import { shortenAddress } from "../utils/shortenAddress";
import { useFetch } from "../composables/fetchgif";
export default {
  name: "TransactionCard",
  props: {
    addressFrom: {
      type: String,
      default: "",
    },
    addressTo: {
      type: String,
      default: "",
    },
    timestamp: {
      type: String,
      default: "",
    },
    amount: {
      type: Number,
      default: 0,
    },
    message: {
      type: String,
      default: "",
    },
    keyword: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    let { addressFrom, addressTo, keyword } = toRefs(props);
    let { gifUrl } = useFetch({ keyword });

    const hrefUrl = "https://ropsten.etherscan.io/address/";
    const fromUrl = `${hrefUrl}${addressFrom.value}`;
    const toUrl = `${hrefUrl}${addressTo.value}`;

    return {
      shortenAddress,
      fromUrl,
      toUrl,
      gifUrl,
    };
  },
};
</script>
