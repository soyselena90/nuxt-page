<template>
    <Card style="width: 100%; overflow: hidden" @click="$emit('click')">
        <template #header>
            <img alt="user header" :src="thumbnail"/>
        </template>
        <template #title>{{ title }}</template>
        <template #subtitle>{{ subtitle }}</template>
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