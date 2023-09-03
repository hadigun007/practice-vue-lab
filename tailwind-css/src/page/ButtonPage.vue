<template>
    <PageBase>
        <div>
            <h1 class="title">Button</h1>
            <GroupBase :title="'Basic'" :show="basic.show" @update-view="updateViewBasic">
                <template v-slot:view>
                    <button class="rounded-md bg-blue-500 py-2 px-4">Primary</button>
                    <button class="rounded-md bg-sky-500 py-2 px-4">Info</button>
                    <button class="rounded-md bg-green-500 py-2 px-4">Success</button>
                    <button class="rounded-md bg-red-500 py-2 px-4">Error</button>
                </template>
                <template v-slot:html>
                    <div class="w-full bg-slate-900 p-4 rounded-md">
                        <code v-for="(d, i) in basic.html" :key="i">
                                {{ d }} <br/>
                            </code>
                    </div>
                </template>
                <template v-slot:vue>
                    <div class="w-full bg-slate-900 p-4 rounded-md">
                        <code>
                               Soon!
                            </code>
                    </div>
                </template>
            </GroupBase>
            <GroupBase :title="'Shadow'" :show="shadow.show" @update-view="updateViewShadow">
                <template v-slot:view>
                    <button class="rounded-md bg-blue-500 py-2 px-4 shadow-sm">Shadow SM</button>
                    <button class="rounded-md bg-sky-500 py-2 px-4 shadow-md">Shadow MD</button>
                    <button class="rounded-md bg-green-500 py-2 px-4 shadow-lg">Shadow LG</button>
                    <button class="rounded-md bg-red-500 py-2 px-4 shadow-xl">Shadow XL</button>
                    <button class="rounded-md bg-pink-500 py-2 px-4 shadow-2xl">Shadow 2XL</button>
                    <button class="rounded-md bg-purple-500 py-2 px-4 shadow-5xl">Shadow 5XL</button>
                </template>
                <template v-slot:html>
                    <div class="w-full bg-slate-900 p-4 rounded-md">
                        <code v-for="(d, i) in shadow.html" :key="i">
                                {{ d }} <br/>
                            </code>
                    </div>
                </template>
                <template v-slot:vue>
                    <div class="w-full bg-slate-900 p-4 rounded-md">
                        <code>
                               Soon!
                            </code>
                    </div>
                </template>
            </GroupBase>
            <GroupBase :title="'Rounded'" :show="rounded.show" @update-view="updateViewRounded">
                <template v-slot:view>
                    <button class="rounded-sm bg-blue-500 py-2 px-4 shadow-sm">Rounded SM</button>
                    <button class="rounded-md bg-sky-500 py-2 px-4 shadow-md">Rounded MD</button>
                    <button class="rounded-lg bg-green-500 py-2 px-4 shadow-lg">Rounded LG</button>
                    <button class="rounded-xl bg-red-500 py-2 px-4 shadow-xl">Rounded XL</button>
                    <button class="rounded-full bg-pink-500 py-2 px-4 shadow-2xl">Rounded Full</button>
                </template>
                <template v-slot:html>
                    <div class="w-full bg-slate-900 p-4 rounded-md">
                        <code v-for="(d, i) in rounded.html" :key="i">
                                {{ d }} <br/>
                            </code>
                    </div>
                </template>
                <template v-slot:vue>
                    <div class="w-full bg-slate-900 p-4 rounded-md">
                        <code>
                               Soon!
                            </code>
                    </div>
                </template>
            </GroupBase>
            <GroupBase :title="'Outline'" :show="outline.show"  @update-view="updateViewOutline">
                <template v-slot:view>
                    <button class="rounded-md border border-blue-500 duration-200 py-2 px-4 shadow-sm">Basic</button>
                    <button class="rounded-md border border-blue-500 hover:bg-blue-500 py-2 px-4 shadow-sm">Hover
                        Effect</button>
                    <button
                        class="rounded-md border border-blue-500 hover:bg-blue-500 duration-300 py-2 px-4 shadow-sm">Hover
                        Effect with Transition</button>
                </template>
                <template v-slot:html>
                    <div class="w-full bg-slate-900 p-4 rounded-md">
                        <code v-for="(d, i) in outline.html" :key="i">
                                {{ d }} <br/>
                            </code>
                    </div>
                </template>
                <template v-slot:vue>
                    <div class="w-full bg-slate-900 p-4 rounded-md">
                        <code>
                               Soon!
                        </code>
                    </div>
                </template>
            </GroupBase>
        </div>
    </PageBase>
</template>

<script>
import PageBase from '@/components/base/PageBase.vue';
import GroupBase from '@/components/base/GroupBase.vue';

export default {
    components: {
        PageBase, GroupBase
    },
    data() {
        return {
            basic: {
                show: 1,
                html: [
                    '<button class="rounded-md bg-blue-500 py-2 px-4">Primary</button>',
                    '<button class="rounded-md bg-sky-500 py-2 px-4">Info</button>',
                    '<button class="rounded-md bg-green-500 py-2 px-4">Success</button>',
                    '<button class="rounded-md bg-red-500 py-2 px-4">Error</button>'
                ]
            },
            shadow: {
                show: 1,
                html: [
                    '<button class="rounded-md bg-blue-500 py-2 px-4 shadow-sm">Shadow SM</button>',
                    '<button class="rounded-md bg-sky-500 py-2 px-4 shadow-md">Shadow MD</button>',
                    '<button class="rounded-md bg-green-500 py-2 px-4 shadow-lg">Shadow LG</button>',
                    '<button class="rounded-md bg-red-500 py-2 px-4 shadow-xl">Shadow XL</button>',
                    '<button class="rounded-md bg-pink-500 py-2 px-4 shadow-2xl">Shadow 2XL</button>',
                    '<button class="rounded-md bg-purple-500 py-2 px-4 shadow-5xl">Shadow 5XL</button>'
                ]
            },
            rounded: {
                show: 1,
                html: [
                    '<button class="rounded-sm bg-blue-500 py-2 px-4 shadow-sm">Rounded SM</button>',
                    '<button class="rounded-md bg-sky-500 py-2 px-4 shadow-md">Rounded MD</button>',
                    '<button class="rounded-lg bg-green-500 py-2 px-4 shadow-lg">Rounded LG</button>',
                    '<button class="rounded-xl bg-red-500 py-2 px-4 shadow-xl">Rounded XL</button>',
                    '<button class="rounded-full bg-pink-500 py-2 px-4 shadow-2xl">Rounded Full</button>'
                ]
            },
            outline: {
                show: 1,
                html: [
                '<button class="rounded-md border border-blue-500 duration-200 py-2 px-4 shadow-sm">Basic</button>',
                '<button class="rounded-md border border-blue-500 hover:bg-blue-500 py-2 px-4 shadow-sm">Hover Effect</button>',
                '<button class="rounded-md border border-blue-500 hover:bg-blue-500 duration-300 py-2 px-4 shadow-sm">Hover Effect with Transition</button>'
                ]
            },

        }
    },
    methods: {
        updateViewBasic(d) {
            this.basic.show = d
        },
        updateViewShadow(d) {
            this.shadow.show = d
        },
        updateViewRounded(d) {
            this.rounded.show = d
        },
        updateViewOutline(d) {
            this.outline.show = d
        }
    }
}
</script>