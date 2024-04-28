<script setup lang="ts">
import Notification from '../Notification.vue'

const notificationOpen = ref(false)

function toggleSideBar() {
    const leftSideBar = document.getElementById('left-sidebar')
    if (leftSideBar) {
        leftSideBar.style.display = leftSideBar.style.display === 'none' ? 'flex' : 'none'
    }
}

const colorMode = useColorMode()
const isDark = computed({
  get () {
    return colorMode.value === 'dark'
  },
  set () {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})

</script>

<template>
    <div class="flex flex-row flex-nowrap gap-2 ">
        <!-- Button to collapse or expand the side bar -->
        <div class="p-1 rounded-md place-self-start
                    hover:bg-gray-400/20 dark:hover:bg-white-500/10
                    hover:cursor-pointer"
                    @click="toggleSideBar">
            <UIcon name="i-heroicons-bars-3"
                size="1.5em"
                dynamic/>
        </div>
            
        <div class="grow"/>

        <div class="p-1 rounded-md justify-self-end
                    hover:bg-gray-400/20 dark:hover:bg-white-500/10
                    hover:cursor-pointer">
            <UPopover v-model:open="notificationOpen" mode="click">
                <UIcon name="i-heroicons-bell"
                        size="1.5em"
                        dynamic/>
                <template #panel>
                    <div class="p-4">
                        <Notification/>
                    </div>
                </template>
            </UPopover>
        </div>

        <div class="p-1 rounded-md justify-self-end
                    hover:bg-gray-400/20 dark:hover:bg-white-500/10
                    hover:cursor-pointer">
            <UIcon 
                :name="isDark ? 'i-heroicons-moon' : 'i-heroicons-sun'"
                size="1.5em"
                dynamic
                @click="isDark = !isDark"/>
        </div>
    </div>
</template>