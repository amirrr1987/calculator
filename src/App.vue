<template>
  <TheResult class="col-span-full" :result="expression" />
  <TheButton @click="cleanExpression" label="C" />
  <TheButton @click="appendCharacter" label="/" />
  <TheButton @click="appendCharacter" label="*" />
  <TheButton @click="appendCharacter" label="-" />
  <TheButton @click="appendCharacter" label="7" />
  <TheButton @click="appendCharacter" label="8" />
  <TheButton @click="appendCharacter" label="9" />
  <TheButton @click="appendCharacter" label="+" />
  <TheButton @click="appendCharacter" label="4" />
  <TheButton @click="appendCharacter" label="5" />
  <TheButton @click="appendCharacter" label="6" />
  <TheButton @click="calculateResult" class="text-success ratio-1-3 row-span-3" label="=" />
  <TheButton @click="appendCharacter" label="1" />
  <TheButton @click="appendCharacter" label="2" />
  <TheButton @click="appendCharacter" label="3" />
  <TheButton @click="appendCharacter" class="col-span-2 ratio-2-1" label="0" />
  <TheButton @click="appendCharacter" label="." />
</template>

<script setup lang="ts">
import TheButton from '@/components/TheButton.vue'
import TheResult from '@/components/TheResult.vue'
import { computed, ref } from 'vue'

const expression = ref('')
const lastCharIsMethod = computed(() => {
  return (
    expression.value.endsWith('+') ||
    expression.value.endsWith('-') ||
    expression.value.endsWith('*') ||
    expression.value.endsWith('/')
  )
})

const appendCharacter = (e: any) => {
  const char = e.target.value
  if (char === '.' && lastCharIsMethod.value) {
    expression.value += '0' + char
    return
  }
  if (expression.value.endsWith('.') && char === '.') {
    return
  }
  if (expression.value === '0' && char !== '.') {
    expression.value = char
    return
  }
  expression.value += char
}

const calculateResult = () => {
  if (lastCharIsMethod.value) {
    expression.value = expression.value.slice(0, -1)
  }
  try {
    expression.value = eval(expression.value)
  } catch (error) {
    expression.value = 'Error'
  }
}

const cleanExpression = () => {
  expression.value = ''
}
</script>

<style>
body {
  @apply p-0 m-0;
}

#app {
  @apply grid grid-cols-4 gap-4 p-4 overflow-hidden;
  grid-template-rows: 1fr max-content max-content max-content max-content max-content;
  height: 100svh;
}
.ratio-1-1 {
  aspect-ratio: 1 / 1;
}
.ratio-1-3 {
  aspect-ratio: 1 / 3.5;
}
.ratio-2-1 {
  aspect-ratio: 2.2 / 1;
}
</style>
