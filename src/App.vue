<template>
  <TheResult class="col-span-full row-span-3" :result="numbers" />
  <TheButton @click="cleaner" label="C" />
  <TheButton @click="setMethod" label="/" />
  <TheButton @click="setMethod" label="*" />
  <TheButton @click="setMethod" class="text-danger" label="-" />
  <TheButton @click="getNumber" label="7" />
  <TheButton @click="getNumber" label="8" />
  <TheButton @click="getNumber" label="9" />
  <TheButton @click="setMethod" label="+" />
  <TheButton @click="getNumber" label="4" />
  <TheButton @click="getNumber" label="5" />
  <TheButton @click="getNumber" label="6" />
  <TheButton @click="calculateResult" class="row-span-3 text-success" label="=" />
  <TheButton @click="getNumber" label="1" />
  <TheButton @click="getNumber" label="2" />
  <TheButton @click="getNumber" label="3" />
  <TheButton @click="getNumber" class="col-span-2" label="0" />
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
  @apply grid grid-cols-4 grid-rows-8 gap-4 p-4 overflow-hidden;
  height: 100svh;
}
</style>
