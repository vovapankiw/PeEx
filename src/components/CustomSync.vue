<template>
  <div class="main__wrraper">
    <input
      type="text"
      :value="name"
      @input="$emit('update:name', $event.target.value)"
    />
    <input
      type="text"
      :value="volume"
      @input="$emit('update:volume', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: "CustomSync",
  props: ["name", "volume"],
};
</script>

<style>
.main__wrraper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
