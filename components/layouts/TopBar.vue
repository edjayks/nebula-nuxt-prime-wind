<script setup lang="ts">
</script>

<template>
    <div class="flex flex-row flex-nowrap gap-2 ">
        <!-- Button to collapse or expand the side bar -->
        <UIcon name="i-heroicons-bars-3"
            size="1.5em"
            class="place-self-start
                hover:bg-gray-400/20 dark:hover:bg-white-500/10
                hover:cursor-pointer"
            dynamic/>
            
        <div class="grow"/>

        <UIcon name="i-heroicons-bell"
                size="1.5em"
                class="justify-self-end
                    hover:bg-gray-400/20 dark:hover:bg-white-500/10
                    hover:cursor-pointer"
                dynamic/>
        <UIcon name="i-heroicons-moon"
            size="1.5em"
            class="justify-self-end
                hover:bg-gray-400/20 dark:hover:bg-white-500/10
                hover:cursor-pointer"
            dynamic/>
    </div>
</template>