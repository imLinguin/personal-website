<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
    titleTemplate: (s) => s? `${s} - Paweł Lidwin` : `Paweł Lidwin` 
})
</script>