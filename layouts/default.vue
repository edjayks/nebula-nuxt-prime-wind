<script setup lang="ts">
/* __placeholder__ */
import VerticalLeftMenuBar from '~/components/layouts/VerticalLeftMenuBar.vue'
import { ref, reactive, computed } from 'vue'

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
    <VerticalLeftMenuBar id="left-sidebar" :style="{width: sideBarWidth + 'px'}" />

    <!-- Resizer -->
    <div id="leftright-resizer"
        class="hover:cursor-col-resize h-screen w-0.5 bg-gray-400/20 dark:bg-white-100"/>

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

