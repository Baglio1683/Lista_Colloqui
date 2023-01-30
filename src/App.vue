<script>
import AppHeader from './components/AppHeader.vue';
import AppCard from './components/AppCard.vue';

export default {
  name: 'App',
  components:
  {
    AppHeader,
    AppCard,
  }
}
</script>

<template>

  <router-link :to="{ name: 'about' }">
    Aggiungi Contatto
  </router-link>

</template>

<style lang="scss">
@use './style/general.scss' as *;

h1 {
  color: $blue-color;
}
</style>
