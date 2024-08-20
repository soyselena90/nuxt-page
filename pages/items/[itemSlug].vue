<template>
    <div class="flex justify-center items-center">
        <AppCardDtl>
            <template #header>
                <div class="text-3xl bold mb-5">{{ item?.title }}</div>
                <div class="flex q-gutter-x-sm items-center q-mt-sm text-grey-8">
                    <span> {{ item?.subtitle }}</span>
                </div>
            </template>
            <div class="q-mb-md">
                <VideoPlayer :src="item?.video" />
            </div>
            <p>
               {{ item?.video}}
            </p>
            <template #footer>
                <div class="flex gap-4 mt-1">
                    <Button v-if="preItem"  @click="goToPage(preItem.itemSlug)" label="이전" severity="secondary" outlined class="w-full"/>
                    <Button v-if="nextItem"  @click="goToPage(nextItem.itemSlug)" label="다음" class="w-full"/>
                </div>
            </template>
        </AppCardDtl>
    </div>
</template>

<script setup lang="ts">
import {useData} from "~/composables/useData";

const route = useRoute();
const { item, preItem, nextItem } = useData(route.params.itemSlug);
const goToPage = (path:string) => {
    navigateTo(path);
}
</script>

<style scoped></style>