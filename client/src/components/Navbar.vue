<template>
  <nav
    class="w-full flex text-white md:justify-center justify-between items-center p-4"
  >
    <div class="md:flex-[0.5] flex-initial justify-center items-center">
      <img :src="logo" alt="logo-png" class="w-32 cursor-pointer" />
    </div>
    <ul
      class="md:flex hidden flex-initial justify-between items-center list-none"
    >
      <NavbarItem
        v-for="(item, index) in navbarItems"
        :index="index"
        :key="index + item"
        :title="item"
      />
      <li
        class="bg-blue-500 rounded-full cursor-pointer w-28 mx-4 p-1 text-center hover:bg-indigo-50 hover:text-blue-600"
      >
        Login
      </li>
    </ul>
    <div class="flex relative">
      <div v-if="!toggleMenu" class="md:hidden w-4 h-4">
        <Icon type="menu" :onClick="() => (toggleMenu = !toggleMenu)" />
      </div>
      <div v-if="toggleMenu" class="md:hidden w-4 h-4">
        <Icon type="close" :onClick="() => (toggleMenu = !toggleMenu)" />
      </div>
      <ul
        v-if="toggleMenu"
        class="z-10 fixed top-0 right-0 w-[70vw] blue-glassmorphism md:hidden flex flex-col p-4 justify-start items-end shadow-2xl rounded-md h-screen"
      >
        <li class="w-full text-xl my-2">
          <Icon type="close" :onClick="() => (toggleMenu = !toggleMenu)" />
        </li>
        <NavbarItem
          v-for="(item, index) in navbarItems"
          :index="index"
          :key="index + item"
          :title="item"
          classProps="text-lg my-2"
        />
      </ul>
    </div>
  </nav>
</template>
<script>
import { ref } from "@vue/reactivity";
import logo from "../../images/logo.png";
import NavbarItem from "./NavbarItem.vue";
import  Icon from "./Icon.vue";

export default {
  name: "Navbar",
  components: { NavbarItem, Icon },
  setup() {
    let navbarItems = ["Market", "Exchange", "Tutorials", "Wallets"];
    let toggleMenu = ref(false);

    return {
      logo,
      navbarItems,
      toggleMenu,
    };
  },
};
</script>
