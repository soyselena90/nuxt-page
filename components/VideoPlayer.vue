<template>
    <div class="video-container">
        <!--        <iframe-->
        <!--            width="100%"-->
        <!--            height="100%"-->
        <!--            :src="'https://youtu.be/zPi4WkHKA58?si=PmCVmkOOFLcFsPl0'"-->
        <!--            title="금지된 사랑 이승기"-->
        <!--            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"-->
        <!--            allowfullscreen-->
        <!--        ></iframe>-->

        <iframe
            width="100%"
            height="100%"
            :src="src"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
        ></iframe>
    </div>
</template>

<script setup lang="ts">
interface Props {
    src?: string;
}
withDefaults(defineProps<Props>(), {
    src: 'https://www.youtube.com',
});
</script>

<style scoped>
.video-container {
    position: relative;
    padding-bottom: 56.25%;
    padding-top: 30px;
    height: 0;
    overflow: hidden;
}

.video-container iframe,
.video-container object,
.video-container embed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>