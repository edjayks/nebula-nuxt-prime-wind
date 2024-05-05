<script setup lang="ts">
import MenuAndSubMenuItem, { type MenuItem } from './MenuAndSubMenuItem.vue'
import { ref, reactive, computed } from 'vue'

const menuItems: MenuItem[] = [
    {
        icon: 'i-heroicons-home',
        label: "Home",
        isCollapsible: true,
        isCollapsed: false,
        to: "/",
        items: [
            {
                icon: 'i-heroicons-chart-pie',
                label: "Dashboard",
                isCollapsible: true,
                isCollapsed: false,
                items: [
                    {
                        icon: 'i-heroicons-chart-bar',
                        label: "Daily Insights",
                        to: "/dashboard",
                        items: [
                            {
                                icon: 'i-heroicons-chart-bar',
                                label: "Trend 01",
                            },
                            {
                                label: "Trend 02",
                                to: "/dashboard",
                            },
                        ]
                    },
                    {
                        icon: 'i-heroicons-chart-bar',
                        label: "Monthly Insights",
                        to: "/dashboard",
                    },
                    {
                        icon: 'i-heroicons-chart-bar',
                        label: "Yearly Insights",
                        to: "/dashboard",
                    }
                ]
            }
        ]
    },
    {
        icon: 'i-heroicons-clipboard-document-list',
        label: "Order",
        to: "/order",
        items: [
            {
                icon: 'i-heroicons-archive-box',
                label: "Order Group",
                to: "/order",
            },
            {
                icon: 'i-heroicons-archive-box',
                label: "Order Line",
                to: "/order",
            }
        ]
    },
    {
        icon: 'i-heroicons-archive-box',
        label: "Product",
        to: "/order",
    },
    {
        label: "Screens",
        items: [
            {
                label: "Login",
                to: "/login",
            },
            {
                label: "UnAuthorised",
                to: "/unauthorised",
            },
            {
                label: "Not Found",
                to: "/notfound",
            },
            {
                label: "Server Error",
                to: "/servererror",
            }
        ]
    }
    
]

const rMenuItems = reactive(menuItems)

function handleMenuItemClickedEvent(clickedMenuItem: MenuItem) {
    // console.log('handleMenuItemClickedEvent-root', clickedMenuItem)

    inActivateRecursively(clickedMenuItem, rMenuItems);

    return true
}

function inActivateRecursively(clickedMenuItem: MenuItem, startingMenuItems: MenuItem[]) {
    startingMenuItems.forEach(item => {
        if (item.to && (item.to === clickedMenuItem.to && item.label === clickedMenuItem.label)) {
            item.isActive = true;
            // console.log('Activated item', item.label)
        } else {
            item.isActive = false;
            // console.log('Inactivated item', item.label)
        }

        if (item.items && item.items.length > 0) {
            inActivateRecursively(clickedMenuItem, item.items)
        }
    });
}

</script>

<template>

    <div class="py-1 px-4 h-screen flex flex-col flex-nowrap select-none">

        <!-- Header -->
        <div class="justify-self-start flex flex-row flex-nowrap gap-1 justify-center items-center py-4">
            <UIcon name="i-heroicons-light-bulb" />
            <h1>The Idea Factory</h1>
        </div>

        <!-- Menus -->
        <MenuAndSubMenuItem :items="rMenuItems" level="1" class="justify-self-start grow" @menu-clicked="handleMenuItemClickedEvent"></MenuAndSubMenuItem>
        <UDivider />

        <!-- Footer -->
        <div class="justify-self-end flex flex-col gap-1">
            <ULink to="/documentation">Documentation</ULink>
            <ULink to="/documentation">Help & Support</ULink>
            <ULink to="/documentation">Billing</ULink>
        </div>
    </div>

    
</template>