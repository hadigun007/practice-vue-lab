<template>
  <h1>{{ $t("the_world") }}</h1>
  <h1 class="font-bold">Screen With = {{ screenWidth }}</h1>
  <h1 class="xs:font-bold xs:text-red-500">Responsive XS</h1>
  <h1 class="sm:font-bold sm:text-red-500">Responsive SM</h1>
  <h1 class="md:font-bold md:text-red-500">Responsive MD</h1>
  <h1 class="lg:font-bold lg:text-red-500">Responsive LG</h1>
  <h1 class="xl:font-bold xl:text-red-500">Responsive XL</h1>
  <h2 class="md:text-red-500" style="transition: 10s;">text ini menggunakan sm</h2>
</template>

<script>

export default {
  name: 'App',
  onMounted(){
    console.log("onMounted")
  },
  mounted(){
    console.log("mounted")
    this.updateScreenWidth();
    this.onScreenResize();
  },
  updated(){
    console.log("updated")
  },
  beforeUpdated(){
    console.log("updated")
  },
  data(){
    return {
      screenWidth: ""
    }
  },
  methods:{
    onScreenResize() {
      window.addEventListener("resize", () => {
        
        this.updateScreenWidth();
      });
    },
    updateScreenWidth() {
      this.screenWidth = window.innerWidth;
    },
  }
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
