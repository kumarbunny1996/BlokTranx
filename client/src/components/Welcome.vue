<template>
  <div class="flex text-white w-full justify-center items-center">
    <div
      class="flex md:flex-row flex-col justify-start items-start md:p-20 py-12 px-4"
    >
      <div class="flex flex-1 flex-col justify-start items-start md:mr-10">
        <h1 class="text-3xl md:text-5xl text-gradient py-1">
          Send Crypto <br />
          across the world
        </h1>
        <p class="py-1 mt-5 text-left text-base font-light w-11/12 md:w-9/12">
          Explore the crypto world. Buy and sell cryptocurrencies easily on
          Krypto.
        </p>
        <Button v-bind="btnProps" />
        <div
          class="grid sm:grid-cols-3 justify-center items grid-cols-2 w-full mt-10"
        >
          <div :class="[companyCommonStyles, 'rounded-tl-2xl']">
            Reliability
          </div>
          <div :class="[companyCommonStyles]">Security</div>
          <div :class="[companyCommonStyles, 'sm:rounded-tr-2xl']">
            Ethereum
          </div>
          <div :class="[companyCommonStyles, 'sm:rounded-bl-2xl']">
            Low Fees
          </div>
          <div :class="[companyCommonStyles]">Web 3.0</div>
          <div :class="[companyCommonStyles, 'rounded-br-2xl']">Blockcnain</div>
        </div>
      </div>
      <div
        class="flex flex-1 flex-col justify-start items-center w-full md:mt-0 mt-10"
      >
        <div
          class="p-3 flex eth-card justify-end items-start white-glassmorphism flex-col rounded-xl h-40 sm:w-72 w-full my-5"
        >
          <div class="flex flex-col justify-between w-full h-full">
            <div class="flex justify-between items-start">
              <div
                class="rounded-full border-2 border-white w-10 h-10 flex justify-center items-center"
              >
                <Icon type="ethereum" />
              </div>
              <Icon type="info-circle" />
            </div>
            <div>
              <p class="text-white font-light text-sm">Address</p>
              <p class="text-white font-semibold text-lg mt-1">Ethereum</p>
            </div>
          </div>
        </div>
        <div
          class="sm:w-96 w-full p-5 flex flex-col blue-glassmorphism justify-start items-center"
        >
          <Input v-bind="addressInputProps" />
          <Input v-bind="amountInputProps" />
          <Input v-bind="keyInputProps" />
          <Input v-bind="msgInputProps" />
          <div class="h-[1px] w-full bg-gray-400 my-2"></div>
          <Button v-bind="sendBtnProps" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Button from "./Button.vue";
import Icon from "./Icon.vue";
import Input from "./Input.vue";

export default {
  name: "Welcome",
  components: { Button, Icon, Input },
  setup() {
    let btnProps = {
      layoutClass: "text-white bg-[#2952e3] hover:bg-[#2546bd] my-5 p-3",
      content: "Connect Wallet",
      isLoading: false,
    };

    let sendBtnProps = {
      layoutClass:
        "text-white border-[1px] p-2 border-[#3d4f7c] mt-2 hover:bg-[#3d4f7c]",
      content: "Send Eth",
      isLoading: false,
    };

    const companyCommonStyles =
      "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

    let addressInputProps = {
      type: "text",
      name: "address-to",
      placeholder: "Address To",
    };

    let amountInputProps = {
      type: "number",
      name: "amount",
      placeholder: "Amount",
    };
    let keyInputProps = {
      type: "text",
      name: "keyword",
      placeholder: "Keyword",
    };
    let msgInputProps = {
      type: "text",
      name: "message",
      placeholder: "Enter Mesaage",
    };
    return {
      btnProps,
      sendBtnProps,
      companyCommonStyles,
      addressInputProps,
      amountInputProps,
      msgInputProps,
      keyInputProps,
    };
  },
};
</script>
