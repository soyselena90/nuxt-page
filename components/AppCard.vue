<template>
    <Card style="width: 100%; overflow: hidden">
        <template #header>
            <img alt="user header" :src="thumbnail"/>
        </template>
        <template #title>{{ title }}</template>
        <template #subtitle></template>
        <template #content>
            <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
                numquam
                deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse,
                cupiditate
                neque
                quas!
            </p>
        </template>
        <template #footer>
            <div class="flex gap-4 mt-1">
                <Button label="Cancel" severity="secondary" outlined class="w-full"/>
                <Button label="Save" class="w-full"/>
            </div>
        </template>
    </Card>
</template>

<script setup lang="ts">
defineProps({
    thumbnail: {
        type: String,
        default: '',
    },
    title: String,
    subtitle: String,
});


defineEmits(['click'])
</script>