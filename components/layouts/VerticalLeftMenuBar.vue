<script setup lang="ts">
import MenuAndSubMenuItem from './MenuAndSubMenuItem.vue'
import { ref, reactive, computed } from 'vue'

const menuItems: any[] = [
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
                to: "/dashboard",
                items: [
                    {
                        icon: 'i-heroicons-chart-bar',
                        label: "Daily Insights",
                        to: "/dashboard",
                        items: [
                            {
                                icon: 'i-heroicons-chart-bar',
                                label: "Trend 01",
                                to: "/dashboard",
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
    }
]

</script>

<template>

    <div class="py-1 px-4 h-screen flex flex-col flex-nowrap">

        <!-- Header -->
        <div class="justify-self-start flex flex-row flex-nowrap gap-1 justify-center items-center py-4">
            <UIcon name="i-heroicons-light-bulb" />
            <h1>The Idea Factory</h1>
        </div>

        <!-- Menus -->
        <MenuAndSubMenuItem :items="menuItems" level="1" class="justify-self-start grow"></MenuAndSubMenuItem>
        <UDivider />

        <!-- Footer -->
        <div class="justify-self-end flex flex-col gap-1">
            <ULink to="/documentation">Documentation</ULink>
            <ULink to="/documentation">Help & Support</ULink>
            <ULink to="/documentation">Billing</ULink>
        </div>
    </div>

    
</template>