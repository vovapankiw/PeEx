<template>
<div>
  <slot></slot>
  <input
  :value="value"
  @input="$emit('input', $event.target.value)"
>
</div>

</template>

<script>
export default {
name: 'CustomInput',
props:['value']
}
</script>

<style>

</style>