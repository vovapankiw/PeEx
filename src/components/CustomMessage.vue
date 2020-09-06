<template>
  <div>
    <div>
      <slot name="title"></slot>
    </div>
    <div>
      <slot name="content"></slot>
    </div>
    <button @click="emitEvent">Emit event</button>
  </div>
</template>

<script>
export default {
  name: "CustomMessage",
  methods: {
    emitEvent() {
      this.$emit("customEvent");
    },
  },
};
</script>

<style></style>
