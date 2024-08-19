<template>
    <NuxtLayout
        class="bg-white text-slate-900 dark:bg-zinc-950 dark:text-zinc-50"
    >
        <Button
        label="toggle mode"
        @click="toggleMode"
        ></Button>
        <NuxtPage/>
    </NuxtLayout>
</template>

<script lang="ts" setup>
const colorMode = useColorMode();
const toggleMode = () => {
    colorMode.preference = colorMode.value === "light" ? "dark" : "light";
}
</script>

<style lang="scss" scoped>

</style>