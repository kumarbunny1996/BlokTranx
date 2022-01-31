<template>
  <div
    :class="[
      className,
      layoutClass,
      { 'opacity-50 cursor-not-allowed': isDisabled, 'cursor-wait': isLoading },
    ]"
    @click="() => !isDisabled && !isLoading && onClick()"
  >
    {{ isLoading ? "" : content }}
    <Loader v-if="isLoading" />
  </div>
</template>
<script>
import Loader from "./Loader.vue";
export default {
  name: "Button",
  components: { Loader },
  props: {
    className: {
      type: String,
      default:
        "flex flex-row justify-center items-center my-5 cursor-pointer p-3 rounded-full",
    },
    layoutClass: {
      type: String,
      default: "",
    },
    content: {
      type: String,
      default: "",
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
    onClick: {
      type: Function,
      default: () => {},
    },
  },
  setup() {},
};
</script>
