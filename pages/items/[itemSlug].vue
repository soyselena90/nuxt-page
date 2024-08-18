<template>
    <div class="flex justify-center items-center">
        <AppCardDtl>
            <template #header>
                <div class="text-3xl bold mb-5">Nuxt Item Page</div>
                <div class="flex q-gutter-x-sm items-center q-mt-sm text-grey-8">
                    <span> 5A card can be utilized in many use cases as a result no  </span>
                </div>
            </template>
            <div class="q-mb-md">
                <VideoPlayer/>
            </div>
            <div class="flex items-center justify-end w-full my-2">
                <Button
                    label="VUE3"
                    unelevated
                    color="primary"
                    target="_blank"
                    class="mr-2.5"
                />
                <Button
                    label="NUXT3"
                    unelevated
                    color="red"
                    target="_blank"
                />
            </div>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
                numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis
                esse, cupiditate neque
            </p>
        </AppCardDtl>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>