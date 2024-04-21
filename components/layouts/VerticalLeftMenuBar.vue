<script setup lang="ts">
import MenuAndSubMenuItem from './MenuAndSubMenuItem.vue'
import { ref, reactive, computed } from 'vue'

defineProps(['items'])

</script>

<template>

    <div class="py-1 px-1 h-screen flex flex-col flex-nowrap">

        <!-- <div>dummy</div> -->

        <!-- Header -->
        <div class="justify-self-start flex flex-row flex-nowrap gap-1 justify-center items-center py-4">
            <UIcon name="i-heroicons-light-bulb" />
            <h1>The Idea Factory</h1>
        </div>

        <!-- Menus -->
        <MenuAndSubMenuItem :items="items" level="1" class="justify-self-start grow"></MenuAndSubMenuItem>
        <UDivider />

        <!-- Footer -->
        <div class="justify-self-end flex flex-col gap-1">
            <ULink to="/documentation">Documentation</ULink>
            <ULink to="/documentation">Help & Support</ULink>
            <ULink to="/documentation">Billing</ULink>
        </div>
    </div>

    
</template>