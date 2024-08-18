<template>
    <Card style="width:50rem; overflow: hidden">
        <template #header>
            <div class="card__header">
                <slot name="header"></slot>
            </div>
        </template>
        <template #content>
            <slot></slot>
        </template>
        <template #footer>
            <div class="card__footer">
                <slot name="footer"></slot>
            </div>
        </template>
    </Card>
</template>

<script setup>

</script>

<style scoped>
.card__header {
    padding: 32px 32px 0px 32px;
}

.card__footer {
    padding: 16px 32px 16px 32px;
}
</style>