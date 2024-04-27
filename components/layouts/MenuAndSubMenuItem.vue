<script setup lang="ts">

import { reactive, computed } from 'vue'

export interface MenuItem {
    icon?: string;
    label: string;
    isCollapsible?: boolean;
    isCollapsed?: boolean;
    to?: string;
    items?: MenuItem[];
    isActive?: boolean;
}

const props = defineProps(['level', 'items', 'isCollapsed'])
const emit = defineEmits(['menuClicked'])
// const reactiveItems = reactive(props.items)

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
    // console.log('getCollapseOrExpandIcon')
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

function handleMenuItemClickedEvent(event: any, clickedMenuItem: MenuItem, index: number) {
    // console.log('handleMenuItemClickedEvent-p', clickedMenuItem)

    clickedMenuItem.isActive = true

    emit('menuClicked', clickedMenuItem)

    return true
}

</script>

<template>
    <ul>
        <li v-for="(item, index) in props.items">
            <div :class="getTreeLineClass">
                <div class="flex flex-row flex-nowrap gap-1 
                            rounded-md            
                            py-1 
                            text-sm
                            hover:bg-gray-400/20 dark:hover:bg-white-500/20
                            hover:cursor-pointer 
                            "
                        :class="item.isActive ? 'bg-gray-400/40 dark:bg-white-500/40' : 'bg-transparent'"
                        :style="computedLeftPadding"
                        
                >
                    <UIcon v-if="item.icon" :name="item.icon" size="1.5em" class="place-self-center" dynamic />

                    <ULink v-if="item.to !== undefined && item.to !== null" 
                            class="grow place-self-center mr-2" 
                            :to="item.to"
                            @click="handleMenuItemClickedEvent($event, item, index)" 
                            
                    >{{ item.label }}</ULink>
                    <span v-else class="grow place-self-center mr-2">o-{{ item.label }}</span>
                    
                    <UIcon 
                        v-if="hasChildItems(item)" 
                        :name="getCollapseOrExpandIcon(item)" 
                        style="transition: all 0.3s"
                        class="w-8 self-center justify-self-end
                            hover:font-bold hover:text-xl" 
                        dynamic 
                        @click="toggleCollapse(item, index)"/>
                    <div v-else class="w-8 self-center justify-self-end"></div>
                </div>

                <MenuAndSubMenuItem 
                    :id="`sub-${level}${index}`" 
                    v-if="hasChildItems(item)" 
                    :items="item.items" 
                    :level="incrementLevel"
                    @menu-clicked="$emit('menuClicked', $event)"
                >
                </MenuAndSubMenuItem>
            </div>
        </li>
    </ul>
</template>
