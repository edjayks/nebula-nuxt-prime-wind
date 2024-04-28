<script setup lang="ts">

const notifications: any[] = [
    { 
        "title": "Company Memo 2024-04-21",
        "message": "Please be informed that the company will be closed on April 21, 2024, in observance of the Holy Week",
    },
    { 
        "title": "Company Memo 2024-04-22",
        "message": "Please be informed that the company will be closed on April 22, 2024, in observance of the Holy Week",
    },
    { 
        "title": "Company Memo 2024-04-23",
        "message": "Please be informed that the company will be closed on April 23, 2024, in observance of the Holy Week",
    },
    { 
        "title": "Company Memo 2024-04-24",
        "message": "Please be informed that the company will be closed on April 24, 2024, in observance of the Holy Week",
    },
    { 
        "title": "Company Memo 2024-04-25",
        "message": "Please be informed that the company will be closed on April 25, 2024, in observance of the Holy Week",
    },
    { 
        "title": "Company Memo 2024-04-26",
        "message": "Please be informed that the company will be closed on April 26, 2024, in observance of the Holy Week",
    },
    { 
        "title": "Company Memo 2024-04-27",
        "message": "Please be informed that the company will be closed on April 27, 2024, in observance of the Holy Week",
    },
    { 
        "title": "Company Memo 2024-04-28",
        "message": "Please be informed that the company will be closed on April 28, 2024, in observance of the Holy Week",
    },
    { 
        "title": "Company Memo 2024-04-29",
        "message": "Please be informed that the company will be closed on April 29, 2024, in observance of the Holy Week",
    },
    { 
        "title": "Company Memo 2024-04-30",
        "message": "Please be informed that the company will be closed on April 30, 2024, in observance of the Holy Week",
    },
    { 
        "title": "Company Memo 2024-05-01",
        "message": "Please be informed that the company will be closed on May 1, 2024"
    },
]

</script>

<template>
    <ul class="max-w-sm max-h-96 overflow-y-scroll">
        <UDivider />
        <li v-for="notification in notifications" :key="notification.id" class="my-4">
            <h1>{{ notification.title }}</h1>
            <span>{{ notification.message }}</span>
            <UDivider />
        </li>
        
        
    </ul>

</template>