<template>
  <div>
    <span> {{ user.name }}</span>
    <h4>User location is {{ userCity }}</h4>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
name: "Portfolio",
  computed: {
    ...mapGetters([
      'user',
      'getCityById'
    ]),

    userCity() {
      return this.getCityById(this.user.i)
    }
  }
}
</script>

<style scoped>

</style>