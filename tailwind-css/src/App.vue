<template>
  <HeaderComponents/>
  <RouterView/>
</template>

<script>
import HeaderComponents from '@/components/HeaderComponents.vue'
export default {
  name: 'App',
  components:{ HeaderComponents}
}
</script>

<style>

</style>
