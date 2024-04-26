<script setup lang="ts">

import { reactive, computed } from 'vue'

export interface MenuItem {
    icon?: string;
    label: string;
    isCollapsible?: boolean;
    isCollapsed?: boolean;
    to: string;
    items?: MenuItem[];
}

const props = defineProps(['level', 'items', 'isCollapsed'])
const reactiveItems = reactive(props.items)

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
    let newLevel = Number(props.level) + 0.2
    // console.log('incrementLevel props.level', newLevel)
    return newLevel
})

const getTreeLineClass = computed(() => {
    if (Number(props.level) !== 1) {
        return 'border-l ml-6'
    } else {
        return ''
    }
})

function hasChildItems(currentItem: any) {
    return currentItem.items && currentItem.items.length > 0
}

function getCollapseOrExpandIcon (currentItem: any) {
    console.log('getCollapseOrExpandIcon')
    if (currentItem.isCollapsible === undefined || currentItem.isCollapsible === null) {
        return ''
    }

    if (hasChildItems(currentItem) && (currentItem.isCollapsible === true)) {

        if (currentItem.isCollapsed === undefined || currentItem.isCollapsed === null) {
            // set a default state where it has expanded its children
            currentItem.isCollapsed = false
        }

        return currentItem.isCollapsed ? 'i-heroicons-chevron-down' : 'i-heroicons-chevron-up'
    }
    return ''
}



function toggleCollapse(currentItem: any, index: number) {

    if (currentItem.isCollapsible === undefined || currentItem.isCollapsible === null) {
        return ''
    }

    if (currentItem.isCollapsible) {
        if (currentItem.isCollapsed) {
            currentItem.isCollapsed = false

            const ele = document.getElementById(`sub-${props.level}${index}`)
            if (ele !== undefined && ele !== null) {
                
                ele.style.display = 'list-item';
            }

        } else {
            currentItem.isCollapsed = true

            const ele = document.getElementById(`sub-${props.level}${index}`)
            if (ele !== undefined && ele !== null) {
                
                ele.style.display = 'none';
                
            }
        }
    }
    console.log('toggleCollapse:', currentItem.isCollapsed)
}

</script>

<template>
    <ul>
        <li v-for="(item, index) in reactiveItems">
            <div :class="getTreeLineClass">
                <div class="flex flex-row flex-nowrap gap-1 
                            rounded-md            
                            py-1 
                            text-sm
                            hover:bg-gray-400/20 dark:hover:bg-white-500/10
                            hover:cursor-pointer 
                            "
                        :style="computedLeftPadding"
                        @click="toggleCollapse(item, index)"
                            >
                    <UIcon v-if="item.icon" :name="item.icon" size="1.5em" class="place-self-center" dynamic />

                    <ULink class="grow place-self-center mr-2" :to="item.to" >{{ item.label }}</ULink>
                    
                    <UIcon 
                        v-if="hasChildItems(item)" 
                        :name="getCollapseOrExpandIcon(item)" 
                        class="w-8 self-center justify-self-end" 
                        dynamic />
                    <div v-else class="w-8 self-center justify-self-end"></div>
                </div>

                <MenuAndSubMenuItem :id="`sub-${level}${index}`" v-if="hasChildItems(item)" :items="item.items" :level="incrementLevel"
                    class="sub-menu"></MenuAndSubMenuItem>
            </div>
        </li>
    </ul>
</template>

<style scoped>
.sub-menu {
    transition: all 2s;
}
</style>