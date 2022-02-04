<template>
  <div
    class="flex flex-row white-glassmorphism p-3 cursor-pointer m-2 justify-start items-start hover:shadow-2xl"
  >
    <div :class="[iconStyle, color]">
      <Icon :type="type" class="text-white text-xl" />
    </div>
    <div class="flex flex-col ml-5 flex-1">
      <h3 class="text-white text-lg mt-2">{{ title }}</h3>
      <p class="text-white text-sm md:w-9/12 mt-1">{{ subtitle }}</p>
    </div>
  </div>
</template>
<script>
import Icon from "./Icon.vue";
export default {
  name: "ServiceCard",
  components: { Icon },
  props: {
    title: {
      type: String,
      default: "",
    },
    subtitle: {
      type: String,
      default: "",
    },
    color: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "",
    },
  },
  setup() {
    const iconStyle = "w-10 h-10 rounded-full flex justify-center items-center";

    return {
      iconStyle,
    };
  },
};
</script>
