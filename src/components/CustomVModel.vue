<template>
  <input type="checkbox" :checked="checked" @input="handleInput" />
</template>

<script>
export default {
  name: "CustomVModel",
  prop: ["checked"],
  model: {
    prop: "checked",
    event: "change",
  },
  methods: {
    handleInput(value) {
      this.$emit("change", value);
    },
  },
};
</script>

<style></style>
