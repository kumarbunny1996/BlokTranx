<template>
  <li :class="classProps">{{ title }}</li>
</template>
<script>
export default {
  name: "NavbarItem",
  props: {
    classProps: {
      type: String,
      default: "mx-4 cursor-pointer",
    },
    title: {
      type: String,
      default: "",
    },
  },
  setup() {},
};
</script>
