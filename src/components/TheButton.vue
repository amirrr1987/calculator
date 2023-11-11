<template>
  <input class="btn btn-primary" type="button" :value="props.label" />
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
  @apply text-3xl text-gray-500 border-0 font-bold;
}
.btn-primary:focus,
.btn-primary.focus {
  box-shadow:
    3px 3px 6px #b8b9be,
    -3px -3px 6px #ffffff;
  color: rgba(107, 114, 128, var(--un-text-opacity));
}
</style>
