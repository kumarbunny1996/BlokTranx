<template>
  <em
    :class="['fa', `fa-${iconMapping[type]}`, className, { curP: !!onClick }]"
    @click="() => onClick && onClick()"
  ></em>
</template>
<script>
export default {
  name: "Icon",
  props: {
    type: {
      type: String,
      required: true,
    },
    className: {
      type: String,
      default: "",
    },
    onClick: {
      default: undefined,
    },
  },
  setup() {
    const iconMapping = {
      menu: "bars",
      close: "times close",
      ethereum: "ethereum",
      "info-circle": "info-circle",
      search: "search",
      "shield-alt": "shield-alt",
      heart: "heart",
    };
    return {
      iconMapping,
    };
  },
};
</script>
<style scoped>
.curP {
  cursor: pointer;
}
</style>
