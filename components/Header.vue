<template>
    <Menubar :model="items">
        <template #start>
            <NuxtLink to="/">
                <h1>
                    <svg width="147" height="49" viewBox="0 0 147 49" fill="none" xmlns="http://www.w3.org/2000/svg"
                         xmlns:xlink="http://www.w3.org/1999/xlink">
                        <rect x="24" y="12" width="16" height="24" fill="url(#pattern0_297_82154)"/>
                        <path
                            d="M63.7379 21.1044C63.6136 20.7017 63.4421 20.3413 63.2234 20.0231C63.0096 19.6999 62.7511 19.424 62.4478 19.1953C62.1495 18.9666 61.8065 18.7951 61.4187 18.6808C61.0309 18.5614 60.6083 18.5018 60.1509 18.5018C59.3306 18.5018 58.5998 18.7081 57.9585 19.1207C57.3171 19.5334 56.8125 20.1399 56.4446 20.9403C56.0817 21.7358 55.9002 22.7053 55.9002 23.8487C55.9002 25.0021 56.0817 25.979 56.4446 26.7795C56.8075 27.5799 57.3121 28.1889 57.9585 28.6065C58.6048 29.0192 59.3555 29.2255 60.2106 29.2255C60.9862 29.2255 61.6573 29.0763 62.2241 28.7781C62.7958 28.4798 63.2358 28.0572 63.544 27.5103C63.8523 26.9585 64.0064 26.3121 64.0064 25.5714L64.6328 25.6683H60.4865V23.5057H66.6836V25.3402C66.6836 26.6477 66.4052 27.7788 65.8484 28.7333C65.2915 29.6879 64.5259 30.4237 63.5515 30.9407C62.5771 31.4528 61.4585 31.7088 60.1957 31.7088C58.7887 31.7088 57.5533 31.3931 56.4893 30.7617C55.4304 30.1254 54.6026 29.223 54.006 28.0547C53.4144 26.8814 53.1186 25.4893 53.1186 23.8786C53.1186 22.6456 53.2926 21.5444 53.6406 20.5749C53.9936 19.6055 54.4858 18.7827 55.1172 18.1065C55.7486 17.4254 56.4893 16.9084 57.3395 16.5554C58.1896 16.1974 59.1143 16.0185 60.1136 16.0185C60.9588 16.0185 61.7468 16.1428 62.4776 16.3913C63.2085 16.6349 63.8572 16.983 64.424 17.4354C64.9957 17.8878 65.4656 18.4247 65.8335 19.0462C66.2014 19.6676 66.4425 20.3537 66.5568 21.1044H63.7379ZM69.2396 31.5V20.0455H71.8572V21.9545H71.9765C72.1853 21.2933 72.5432 20.7837 73.0503 20.4258C73.5624 20.0629 74.1466 19.8814 74.8028 19.8814C74.952 19.8814 75.1185 19.8888 75.3025 19.9038C75.4914 19.9137 75.648 19.9311 75.7723 19.956V22.4393C75.6579 22.3995 75.4765 22.3647 75.2279 22.3349C74.9843 22.3001 74.7481 22.2827 74.5194 22.2827C74.0273 22.2827 73.5848 22.3896 73.192 22.6033C72.8042 22.8121 72.4985 23.103 72.2748 23.4759C72.051 23.8487 71.9392 24.2788 71.9392 24.766V31.5H69.2396ZM82.0906 31.7237C80.9719 31.7237 80.0025 31.4776 79.1822 30.9854C78.3619 30.4933 77.7255 29.8047 77.2731 28.9197C76.8256 28.0348 76.6019 27.0007 76.6019 25.8175C76.6019 24.6342 76.8256 23.5977 77.2731 22.7077C77.7255 21.8178 78.3619 21.1268 79.1822 20.6346C80.0025 20.1424 80.9719 19.8963 82.0906 19.8963C83.2092 19.8963 84.1786 20.1424 84.9989 20.6346C85.8192 21.1268 86.4531 21.8178 86.9006 22.7077C87.353 23.5977 87.5792 24.6342 87.5792 25.8175C87.5792 27.0007 87.353 28.0348 86.9006 28.9197C86.4531 29.8047 85.8192 30.4933 84.9989 30.9854C84.1786 31.4776 83.2092 31.7237 82.0906 31.7237ZM82.1055 29.5611C82.712 29.5611 83.2191 29.3945 83.6268 29.0614C84.0344 28.7234 84.3377 28.271 84.5366 27.7042C84.7404 27.1374 84.8423 26.506 84.8423 25.81C84.8423 25.109 84.7404 24.4751 84.5366 23.9084C84.3377 23.3366 84.0344 22.8817 83.6268 22.5437C83.2191 22.2056 82.712 22.0366 82.1055 22.0366C81.484 22.0366 80.967 22.2056 80.5543 22.5437C80.1467 22.8817 79.8409 23.3366 79.6371 23.9084C79.4382 24.4751 79.3388 25.109 79.3388 25.81C79.3388 26.506 79.4382 27.1374 79.6371 27.7042C79.8409 28.271 80.1467 28.7234 80.5543 29.0614C80.967 29.3945 81.484 29.5611 82.1055 29.5611ZM91.9063 31.5L88.6698 20.0455H91.4216L93.4351 28.0994H93.5395L95.5977 20.0455H98.3197L100.378 28.0547H100.49L102.473 20.0455H105.233L101.989 31.5H99.1773L97.0296 23.7592H96.873L94.7252 31.5H91.9063ZM112.837 20.0455V22.1335H106.252V20.0455H112.837ZM107.878 17.3011H110.578V28.0547C110.578 28.4176 110.632 28.696 110.742 28.8899C110.856 29.0788 111.005 29.2081 111.189 29.2777C111.373 29.3473 111.577 29.3821 111.801 29.3821C111.97 29.3821 112.124 29.3697 112.263 29.3448C112.407 29.32 112.517 29.2976 112.591 29.2777L113.046 31.3881C112.902 31.4379 112.696 31.4925 112.427 31.5522C112.164 31.6119 111.841 31.6467 111.458 31.6566C110.782 31.6765 110.173 31.5746 109.631 31.3509C109.089 31.1222 108.659 30.7692 108.341 30.2919C108.027 29.8146 107.873 29.218 107.878 28.5021V17.3011ZM118.041 24.7884V31.5H115.341V16.2273H117.981V21.9918H118.115C118.384 21.3455 118.799 20.8359 119.361 20.4631C119.927 20.0852 120.648 19.8963 121.523 19.8963C122.319 19.8963 123.012 20.0629 123.604 20.396C124.196 20.729 124.653 21.2163 124.976 21.8576C125.304 22.4989 125.468 23.282 125.468 24.2067V31.5H122.769V24.6243C122.769 23.8537 122.57 23.2546 122.172 22.8271C121.779 22.3945 121.228 22.1783 120.517 22.1783C120.039 22.1783 119.612 22.2827 119.234 22.4915C118.861 22.6953 118.568 22.9911 118.354 23.3789C118.145 23.7667 118.041 24.2365 118.041 24.7884Z"
                            fill="#212121"/>
                        <defs>
                            <pattern id="pattern0_297_82154" patternContentUnits="objectBoundingBox" width="1"
                                     height="1">
                                <use xlink:href="#image0_297_82154" transform="scale(0.00454545 0.0030303)"/>
                            </pattern>
                            <image id="image0_297_82154" width="220" height="330"
                                   xlink:href="data:image/png;base64,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"/>
                        </defs>
                    </svg>
                </h1>
            </NuxtLink>

        </template>
        <template #item="{ item, props, hasSubmenu, root }">
            <NuxtLink v-ripple class="flex items-center" v-bind="props.action" :to="item.link">
                <span :class="item.icon"/>
                <span class="ml-2">{{ item.label }}</span>
                <Badge v-if="item.badge" :class="{ 'ml-auto': !root, 'ml-2': root }" :value="item.badge"/>
                <span v-if="item.shortcut"
                      class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1">
                    {{ item.shortcut }}
                </span>
                <i v-if="hasSubmenu"
                   :class="['pi pi-angle-down', { 'pi-angle-down ml-2': root, 'pi-angle-right ml-auto': !root }]"></i>
            </NuxtLink>
        </template>

        <template #end>
            <div class="card flex justify-center">
                <Avatar
                    label="최" style="background-color: #E5E7EB; color: #4B5563; font-size: 14px;"
                    class="mr-4 cursor-pointer"
                    shape="circle"
                    @click="toggle"
                />
                <Menu ref="menu" id="overlay_menu" :model="logoutMenu" :popup="true"/>
            </div>
        </template>
    </Menubar>
</template>

<script setup>
import {ref} from "vue";

const router = useRouter();
const items = ref([
    {
        label: '유투브',
        icon: 'pi pi-youtube',
        link: '/'
    },
    {
        label: '광고 관리',
        icon: 'pi pi-megaphone',
        link: '/gg'
    },
    {
        label: '랜딩폼 관리',
        icon: 'pi pi-desktop',
        link: '/lds'
    },
    {
        label: '폼 관리',
        icon: 'pi pi-file-edit',
        link: '/forms'
    }, {
        label: '문의 관리',
        icon: 'pi pi-whatsapp',
        link: '/dbs'
    },
    {
        label: '소재 관리',
        icon: 'pi pi-palette',
        items: [
            {
                label: '배너디자인 관리',
                link: '/banners'
            },
            {
                label: '랜딩디자인 관리',
                link: '/ldgns'
            },
            // {
            //     label: 'UI Kit',
            //     icon: 'pi pi-pencil',
            //     shortcut: '⌘+U'
            // },
            // {
            //     separator: true
            // },
            // {
            //     label: 'Templates',
            //     icon: 'pi pi-palette',
            //     items: [
            //         {
            //             label: 'Apollo',
            //             icon: 'pi pi-palette',
            //             badge: 2
            //         },
            //         {
            //             label: 'Ultima',
            //             icon: 'pi pi-palette',
            //             badge: 3
            //         }
            //     ]
            // }
        ]
    },
    // {
    //     label: 'Contact',
    //     link: '/',
    //     badge: 3
    // }
]);
const menu = ref();
const logoutMenu = ref([
    {
        label: '로그아웃',
        command: () => {
            router.push('/login');
        }
    }
]);

const toggle = (event) => {
    menu.value.toggle(event);
};
</script>

<style scoped>
.p-menubar {
    background: white;
    color: black;
    padding: 0;
    height: 48px;
    border-radius: 0;
    border-bottom: 1px solid #DEE2E6;

    span, i {
        color: black;
        font-size: 14px;
    }
}

</style>