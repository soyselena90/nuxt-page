// https://nuxt.com/docs/api/configuration/nuxt-config

import Lara from '@primevue/themes/lara';

export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: {enabled: true},
    typescript: {
        typeCheck: true
    },
    modules: [
        '@primevue/nuxt-module',
        '@nuxtjs/color-mode'
    ],
    primevue: {
        options: {
            theme: {
                preset: Lara
            }
        }
    },
    css: [
        '~/assets/css/main.css',
        'primeicons/primeicons.css'
    ],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    colorMode: {
        classSuffix: ''
    }
})