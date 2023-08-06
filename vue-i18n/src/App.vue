<template>
  <h1>{{ $t("Home") }}</h1>
  <select v-model="$i18n.locale">
    <option v-for="l in $i18n.availableLocales" :key="`local-${l}`" :value=l>{{ l }}</option>
  </select>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
