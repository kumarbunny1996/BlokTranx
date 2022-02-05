<template>
  <div class="w-full flex md:justify-center items-center p-4 justify-between gradient-bg-footer flex-col">
    <div class="flex sm:flex-row flex-col jusitify-between items-center my-4 w-full">
      <div class="flex flex-[0.5] justify-center items-center">
        <img :src="logo" alt="logo" class="w-32">
      </div>
      <div class="flex flex-wrap flex-1 justify-evenly items-center w-full sm:mt-0 mt-5">
        <p className="text-white text-base text-center mx-2 cursor-pointer">Market</p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">Exchange</p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">Tutorials</p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">Wallets</p>
      </div>
    </div>
    <div class="flex flex-col w-full justify-center items-center mt-5">
      <p className="text-white text-sm text-center">Come join us and hear for the unexpected miracle</p>
      <p className="text-white text-sm text-center font-medium mt-2">info@kryptomastery.com</p>
    </div>
    <div class="sm:w-[90%] w-full h-[0.25px] mt-5 bg-gray-400"></div>
    <div class="flex justify-between items-center sm:w-[90%] w-full mt-3">
      <p className="text-white text-left text-xs">@kryptomastery2022</p>
      <p className="text-white text-right text-xs">All rights reserved</p>
    </div>
  </div>
</template>
<script>
import logo from '../../images/logo.png';
export default {
  name: "Footer",
  setup() {
    return{
      logo
    }
  },
};
</script>
