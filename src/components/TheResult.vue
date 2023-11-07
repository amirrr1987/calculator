<template>
  <div class="card bg-primary shadow-inset border-light p-4 text-4xl font-bold">
  <template v-for="item in props.result">{{ item }}</template>  
  </div>
</template>
<script setup lang="ts">
interface Props {
  result: string[]
}
const props = withDefaults(defineProps<Props>(), {
  result: ()=> []
})
</script>
<style>
</style>
