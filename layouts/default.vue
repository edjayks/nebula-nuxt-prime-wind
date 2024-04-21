<script setup lang="ts">
/* __placeholder__ */
import VerticalLeftMenuBar from '~/components/layouts/VerticalLeftMenuBar.vue'
import { ref, reactive, computed } from 'vue'

const menuItems: any[] = [
    {
        icon: 'i-heroicons-home',
        label: "Home",
        isGroup: true,
        isCollapsible: true,
        isCollapsed: false,
        to: "/",
        items: [
            {
                icon: 'i-heroicons-chart-pie',
                label: "Dashboard",
                isGroup: true,
                isCollapsible: true,
                isCollapsed: false,
                to: "/dashboard",
                items: [
                    {
                        icon: 'i-heroicons-chart-bar',
                        label: "Daily Insights",
                        isGroup: false,
                        to: "/dashboard",
                    },
                    {
                        icon: 'i-heroicons-chart-bar',
                        label: "Monthly Insights",
                        isGroup: false,
                        to: "/dashboard",
                    },
                    {
                        icon: 'i-heroicons-chart-bar',
                        label: "Yearly Insights",
                        isGroup: false,
                        to: "/dashboard",
                    }
                ]
            }
        ]
    },
    {
        icon: 'i-heroicons-clipboard-document-list',
        label: "Order",
        isGroup: false,
        to: "/order",
    },
    {
        icon: 'i-heroicons-archive-box',
        label: "Product",
        isGroup: false,
        to: "/order",
    }
]

const sideBarWidth = ref(265)
const dragging = ref(false)

function initResizing(event: MouseEvent) {
    if (event.target && (event.target as HTMLElement).id === 'leftright-resizer') {
        dragging.value = true
        // console.log('mousedown')
    }
}

function startResizing(event: MouseEvent) {
    if (dragging.value === true && event.buttons > 0) {
        // console.log('mousemove') 
        sideBarWidth.value = sideBarWidth.value + event.movementX       
    }
}

function stopResizing(event: MouseEvent) {
    if (dragging.value === true) {
        // console.log('stop dragging', event.type)
        dragging.value = false
    }
}
</script>

<template>
  <div class="w-full h-screen flex flex-row flex-nowrap"
        @mousedown="initResizing($event)"
        @mousemove="startResizing($event)"
        @mouseup="stopResizing($event)"
        >

    <!-- Left Side -->
    <VerticalLeftMenuBar id="left-sidebar" :items="menuItems" :style="{width: sideBarWidth + 'px'}" />

    <!-- Resizer -->
    <div id="leftright-resizer"
        class="hover:cursor-col-resize h-screen w-1 bg-gray-400/20 dark:bg-white-100"/>

    <!-- Right Side -->
    <div id="right-content" class="min-w-32 grow">
        <!-- Top navi bar -->
        <div class="p-4 border-b-2">
            Top bar
        </div>
        <div class="p-4">
            <slot/>
        <!-- Content Area -->
        </div>
        
    </div>

  </div>
</template>

<style>
</style>

