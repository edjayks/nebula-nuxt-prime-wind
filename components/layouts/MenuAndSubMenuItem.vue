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
    let paddingLeft = 0
    if (Number(props.level) === 1) {
        paddingLeft = 1
    } else {
        paddingLeft = Number(props.level) * 1
    }
    
    // console.log(`computedLeftPadding props.level ${props.level} , ${paddingLeft}`)
    return 'padding-left:' + paddingLeft + 'rem;'
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
            <div class="flex flex-row flex-nowrap gap-1 
                        rounded-md            
                        py-1 my-0.5
                        text-sm
                        hover:bg-gray-400/20 dark:hover:bg-white-500/10
                        hover:cursor-pointer 
                        "
                    :style="computedLeftPadding"
                        >
                <UIcon :name="item.icon" size="1.5em" class="place-self-center" dynamic />
                <ULink class="grow place-self-center mr-2" :to="item.to" >{{ item.label }}</ULink>
                <UIcon v-if="item.isGroup" name="i-heroicons-chevron-down" class="w-8 self-center justify-self-end" dynamic />
                <div v-else class="w-8 self-center justify-self-end"></div>
            </div>

            <MenuAndSubMenuItem v-if="item.items && item.items.length > 0" :items="item.items" :level="incrementLevel"></MenuAndSubMenuItem>
        </li>
    </ul>
</template>