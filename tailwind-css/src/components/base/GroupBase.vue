<template>
    <div class="group duration-500">
        <h1 class="title2">{{ title }}</h1>
        <div class="flex space-x-4 mb-8">
            <div @click="this.$emit('updateView', 1)" class="cursor-pointer">View</div>
            <div @click="this.$emit('updateView', 2)"  class="cursor-pointer">HTML</div>
            <div @click="this.$emit('updateView', 3)"  class="cursor-pointer">Vue</div>
        </div>
        <div class="flex space-x-2 w-full">
            <slot name="view"  v-if="show==1"></slot>
            <slot name="html" v-if="show==2"></slot>
            <slot name="vue" v-if="show==3"></slot>
        </div>
    </div>
</template>

<script>
export default {
    props:["title", "show"]
}
</script>