<template>
  <input
    :type="type"
    :name="name"
    :ref="name"
    v-model.trim="inputValue"
    :placeholder="placeholder"
    class="w-full rounded-sm my-2 text-white outline-none border-none p-2 bg-transparent text-sm white-glassmorphism"
    required
  />
</template>
<script>
import { watch } from "vue";
import { ref } from "@vue/reactivity";

export default {
  name: "Input",
  props: {
    type: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      required: true,
    },
    onInput: {
      type: Function,
      default: () => {},
    },
  },
  setup(props) {
    let inputValue = ref("");
    watch(inputValue, (newVal) => {
      let { onInput } = props;
      inputValue = newVal;
      onInput(inputValue);
    });

    return {
      inputValue,
    };
  },
};
</script>
