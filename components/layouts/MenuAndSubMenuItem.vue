<script setup lang="ts">

import { reactive, computed } from 'vue'

export interface MenuItem {
    icon?: string;
    label: string;
    isGroup: boolean;
    isCollapsible?: boolean;
    isCollapsed?: boolean;
    to: string;
    items?: MenuItem[];
}

const props = defineProps(['level', 'items'])

const computedLeftPadding = computed(() => {
    const paddingLeft = 'padding-left:' + (Number(props.level) * 1) + 'rem;'
    // console.log(`computedLeftPadding props.level ${props.level} , ${paddingLeft}`)
    return paddingLeft
})

const incrementLevel = computed(() => {
    let newLevel = Number(props.level) + 1
    // console.log('incrementLevel props.level', newLevel)
    return newLevel
})

</script>

<template>
    <ul>
        <li v-for="(item, index) in items" >
            <div class="flex flex-row flex-nowrap gap-1.5 
                        w-full rounded-md            
                        pr-1 py-1 my-1
                        font-medium text-sm
                        text-gray dark:text-white 
                        bg-gray-100 dark:bg-white-100
                        hover:bg-gray-400/20 dark:hover:bg-white-500/10
                        hover:cursor-pointer 
                        "
                    :style="computedLeftPadding"
                        >
                <UIcon :name="item.icon" size="1.25em" class="place-self-center" dynamic />
                <span class="grow place-self-center mr-2">{{ item.label }}</span>
                <UIcon v-if="item.isGroup" name="i-heroicons-chevron-down" class="w-9 self-center justify-self-end" dynamic />
                <div v-else class="h-full w-9 self-center justify-self-end"></div>
            </div>

            <MenuAndSubMenuItem v-if="item.items && item.items.length > 0" :items="item.items" :level="incrementLevel"></MenuAndSubMenuItem>
        </li>
    </ul>
</template>