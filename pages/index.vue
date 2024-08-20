<template>
    <div class="grid grid-cols-4 gap-5 w-full">

        <div
            v-for="{ itemSlug, title, subtitle, thumbnail } in itemDatas"
            :key="itemSlug"
            class="lg:col-span-1 max-lg:col-span-2 md:col-span-2 max-sm:col-span-4 sm:col-span-4">
            <NuxtLink v-slot="{ navigate }" :to="`/items/${itemSlug}`">
                <AppCard
                    :title="title"
                    :subtitle="subtitle"
                    :thumbnail="thumbnail"
                    @click="navigate"
                />
            </NuxtLink>
        </div>
    </div>

</template>

<script setup lang="ts">
import {useItemDatas} from "~/composables/useFakeDatas";

const {itemDatas} = useItemDatas();
</script>

<style scoped>

</style>