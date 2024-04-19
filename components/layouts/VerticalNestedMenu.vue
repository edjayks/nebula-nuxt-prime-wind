<script setup lang="ts">
import MenuAndSubMenuItem from './MenuAndSubMenuItem.vue'

defineProps(['items'])

</script>

<template>

    <div class="py-4 pl-2 pr-1">
        <MenuAndSubMenuItem :items="items" level="1"></MenuAndSubMenuItem>
    </div>


</template>