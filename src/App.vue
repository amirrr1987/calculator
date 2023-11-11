<template>
  <TheResult class="col-span-full" :result="numbers" />
  <TheButton @click="cleaner" label="C" />
  <TheButton @click="setMethod" label="/" />
  <TheButton @click="setMethod" label="*" />
  <TheButton @click="setMethod" label="-" />
  <TheButton @click="getNumber" label="7" />
  <TheButton @click="getNumber" label="8" />
  <TheButton @click="getNumber" label="9" />
  <TheButton @click="setMethod" label="+" />
  <TheButton @click="getNumber" label="4" />
  <TheButton @click="getNumber" label="5" />
  <TheButton @click="getNumber" label="6" />
  <TheButton @click="calculateResult" class="text-success ratio-1-3 row-span-3" label="=" />
  <TheButton @click="getNumber" label="1" />
  <TheButton @click="getNumber" label="2" />
  <TheButton @click="getNumber" label="3" />
  <TheButton @click="getNumber" class="col-span-2 ratio-2-1" label="0" />
  <TheButton @click="getNumber" label="." />
</template>
<script setup lang="ts">
import TheButton from '@/components/TheButton.vue'
import TheResult from '@/components/TheResult.vue'
import { getNumber, setMethod, calculateResult, cleaner, numbers } from '@/utils/calculator'
</script>
<style>
body {
  @apply p-0 m-0;
}

#app {
  @apply grid grid-cols-4  gap-4 p-4 overflow-hidden;
  grid-template-rows: 1fr max-content max-content max-content max-content max-content;
  height: 100svh;
}
.ratio-1-1{
  aspect-ratio: 1 / 1;
}
.ratio-1-3{
  aspect-ratio: 1 / 3.5;
}

.ratio-2-1{
  aspect-ratio: 2.2 / 1;
}
</style>
