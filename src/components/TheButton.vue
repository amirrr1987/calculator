<template>
  <button class="btn btn-primary">{{ props.label }}</button>
</template>
<script setup lang="ts">
interface Props {
  label: string
}
const props = withDefaults(defineProps<Props>(), {
  label: 'button'
})
</script>
<style>
.btn {
  @apply text-2xl text-gray-500 border-0 font-bold;
}
</style>
