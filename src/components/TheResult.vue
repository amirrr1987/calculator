<template>
  <div class="card bg-primary shadow-inset border-light p-4 text-4xl font-bold max-h-max overflow-auto">
    {{props.result}}
  </div>
</template>
<script setup lang="ts">
interface Props {
  result: string
}
const props = withDefaults(defineProps<Props>(), {
  result: ''
})
</script>
<style></style>
