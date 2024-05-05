<script setup lang="ts">
definePageMeta({
  layout: 'empty'
});

import { ref } from 'vue'
const uname = ref('')
const pwd = ref('')

</script>

<template>
  <div class="flex flex-row">
    <img src="~/assets/streakofLights.jpg" alt="" class="h-screen"/>
    <UContainer class="flex flex-col gap-4 h-screen justify-center">
        <h1>Welcome</h1>

        <UInput v-model="uname" />
        <UInput v-model="pwd" />
        <UButton>Login</UButton>

        <UDivider label="OR" />
        <UButton>Register</UButton>
    </UContainer>
    
  </div>
</template>

<style>

</style>