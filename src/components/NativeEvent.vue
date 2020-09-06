<template>
  <input type="text" />
</template>

<script>
export default {
  name: "NativeEvent",
  methods: {
    doStuff(e) {
      console.log("Native event was triggered", e);
    },
  },
};
</script>

<style></style>
