<template>
  <div v-if="isLoading.value">
    <Loader />
  </div>
  <div
    v-else
    :class="[
      className,
      layoutClass,
      { 'opacity-50 cursor-not-allowed': isDisabled, 'cursor-wait': isLoading.value },
    ]"
    @click="() => !isDisabled && !isLoading.value && onClick()"
  >
    {{ isLoading.value ? "" : content }}
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
      default: "w-full text-center cursor-pointer rounded-full",
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
      type: Object,
      default: {},
    },
    onClick: {
      type: Function,
      default: () => {},
    },
  },
  setup() {},
};
</script>
