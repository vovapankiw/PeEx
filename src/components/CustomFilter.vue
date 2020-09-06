<template>
  <div>
    <span>{{ message | rawText }}</span>
  </div>
</template>

<script>
export default {
  name: "CustomFilter",
  props: ["message"],
  filters: {
    rawText: function(value) {
      if (!value) "";
      const regex = /(<([^>]+)>)/gi;
      return value.replace(regex, "");
    },
  },
};
</script>

<style></style>
