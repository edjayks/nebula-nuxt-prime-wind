<script setup lang="ts">
import MenuAndSubMenuItem from './MenuAndSubMenuItem.vue'
import { ref, reactive, computed } from 'vue'

const menuItems: any[] = [
    {
        icon: 'i-heroicons-home',
        label: "Home",
        isGroup: true,
        isCollapsible: true,
        isCollapsed: false,
        to: "/",
        items: [
            {
                icon: 'i-heroicons-chart-pie',
                label: "Dashboard",
                isGroup: true,
                isCollapsible: true,
                isCollapsed: false,
                to: "/dashboard",
                items: [
                    {
                        icon: 'i-heroicons-chart-bar',
                        label: "Daily Insights",
                        isGroup: false,
                        to: "/dashboard",
                    },
                    {
                        icon: 'i-heroicons-chart-bar',
                        label: "Monthly Insights",
                        isGroup: false,
                        to: "/dashboard",
                    },
                    {
                        icon: 'i-heroicons-chart-bar',
                        label: "Yearly Insights",
                        isGroup: false,
                        to: "/dashboard",
                    }
                ]
            }
        ]
    },
    {
        icon: 'i-heroicons-clipboard-document-list',
        label: "Order",
        isGroup: false,
        to: "/order",
    },
    {
        icon: 'i-heroicons-archive-box',
        label: "Product",
        isGroup: false,
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