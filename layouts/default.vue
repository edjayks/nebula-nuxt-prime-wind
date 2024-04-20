<script setup lang="ts">
/* __placeholder__ */
import VerticalLeftMenuBar from '~/components/layouts/VerticalLeftMenuBar.vue'

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
  <div class="w-full h-screen flex flex-row flex-nowrap">

    <!-- Left Side -->
    <VerticalLeftMenuBar :items="menuItems" class="min-w-24 border-r-2" />
    <!-- <div class="min-w-24 border-r-2">
        
    </div> -->

    <!-- Right Side -->
    <div class="min-w-32 grow">
        <!-- Top navi bar -->
        <slot />
        <!-- Content Area -->
    </div>

  </div>
</template>

<style>
</style>

