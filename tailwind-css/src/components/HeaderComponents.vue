<template>
    <div  class="bg-[#404258] p-8 w-full h-full text-lg text-white flex space-x-4">
        <h1 
        @click="this.$router.push({name:d.url})"
        class="cursor-pointer  p-2" 
        v-for="(d, i) in this.$store.state.header" 
        :class="[this.$route.name == d.url ? 'bg-slate-800 rounded-md' :'']"
        :key="i">{{ d.title }}</h1>
    </div>
</template>