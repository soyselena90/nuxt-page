<template>
    <div class="">
        <Menubar :model="items">
            <template #start>
                <h1 class="text-3xl text-green-700 font-bold">
                    NUXTGUIDE
                </h1>

            </template>
            <template #item="{ item, props, hasSubmenu, root }">
                <NuxtLink v-ripple class="flex items-center" v-bind="props.action" :to="item.link">
                    <span :class="item.icon"/>
                    <span class="ml-2">{{ item.label }}</span>
                    <Badge v-if="item.badge" :class="{ 'ml-auto': !root, 'ml-2': root }" :value="item.badge"/>
                    <span v-if="item.shortcut"
                          class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1">{{
                            item.shortcut
                        }}</span>
                    <i v-if="hasSubmenu"
                       :class="['pi pi-angle-down', { 'pi-angle-down ml-2': root, 'pi-angle-right ml-auto': !root }]"></i>
                </NuxtLink>
            </template>
            <template #end>
                <div class="flex items-center gap-2">
                    <InputText placeholder="Search" type="text" class="w-32 sm:w-auto"/>
                    <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle"/>
                </div>
            </template>
        </Menubar>
        <div class="max-w-[1200px] my-5 mx-auto max-lg:px-8">
            <slot></slot>
        </div>

    </div>

</template>
<script setup>
import {ref} from "vue";

const items = ref([
    {
        label: 'Home',
        icon: 'pi pi-home',
        link: '/'
    },
    {
        label: 'About',
        icon: 'pi pi-star',
        link: '/about'
    },
    {
        label: 'Items',
        icon: 'pi pi-search',
        link: '/items/1234',
        items: [
            {
                label: 'Core',
                icon: 'pi pi-bolt',
                shortcut: '⌘+S'
            },
            {
                label: 'Blocks',
                icon: 'pi pi-server',
                shortcut: '⌘+B'
            },
            {
                label: 'UI Kit',
                icon: 'pi pi-pencil',
                shortcut: '⌘+U'
            },
            {
                separator: true
            },
            {
                label: 'Templates',
                icon: 'pi pi-palette',
                items: [
                    {
                        label: 'Apollo',
                        icon: 'pi pi-palette',
                        badge: 2
                    },
                    {
                        label: 'Ultima',
                        icon: 'pi pi-palette',
                        badge: 3
                    }
                ]
            }
        ]
    },
    {
        label: 'Contact',
        link: '/',
        badge: 3
    }
]);
</script>

<style>
</style>