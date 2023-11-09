<template>
  <!-- <div class="col-span-full">
          <template v-for="item in numbers">{{ item }}</template>
          {{ result }}
        </div> -->
  <TheResult class="col-span-full row-span-3" :result="numbers" />
  <TheButton class="btn" @click="cleaner" label="C" />
  <TheButton @click="setMethod('/')" class="btn" label="/" />
  <TheButton @click="setMethod('*')" class="btn" label="*" />
  <TheButton @click="setMethod('-')" class="btn" label="-" />
  <TheButton @click="getNumber('7')" class="btn" label="7" />
  <TheButton @click="getNumber('8')" class="btn" label="8" />
  <TheButton @click="getNumber('9')" class="btn" label="9" />
  <TheButton @click="setMethod('+')" class="btn" label="+" />
  <TheButton @click="getNumber('4')" class="btn" label="4" />
  <TheButton @click="getNumber('5')" class="btn" label="5" />
  <TheButton @click="getNumber('6')" class="btn" label="6" />
  <TheButton @click="calculateResult" class="btn row-span-3" label="=" />
  <TheButton @click="getNumber('1')" class="btn" label="1" />
  <TheButton @click="getNumber('2')" class="btn" label="2" />
  <TheButton @click="getNumber('3')" class="btn" label="3" />
  <TheButton @click="getNumber('0')" class="btn col-span-2" label="0" />
  <TheButton @click="getNumber('.')" class="btn" label="." />
</template>
<script setup lang="ts">
import TheButton from '@/components/TheButton.vue'
import TheResult from '@/components/TheResult.vue'
import { ref } from 'vue'
import { cloneDeep, last, findLastIndex, isNumber, toNumber } from 'lodash'
const numbers = ref<string[]>([])
const temp = ref('')
const getNumber = (number: string) => {
  numbers.value.push(number)
}

const setMethod = (method: string) => {
  if (numbers.value.length === 0) return
  const lastItem = last(numbers.value)
  if (lastItem === '+' || lastItem === '-' || lastItem === '/' || lastItem === '*') {
    numbers.value.pop()
  }
  numbers.value.push(method)
}

const isMethod = (item: string) => {
  switch (item) {
    case '-':
      return true
    case '+':
      return true
    case '*':
      return true
    case '/':
      return true
  }
}
// write method to calculator result numbers width methods

const result = ref('')

const itemIndex = ref<number>(0)
const stack = ref<string[]>([''])
function calculateResult() {
  numbers.value.push('=')
  numbers.value.forEach((item) => {
    if (toNumber(item)) {
      if (stack.value[itemIndex.value] == undefined) {
        stack.value[itemIndex.value] = ''
      }
      stack.value[itemIndex.value] += item
    }
    if (!toNumber(item)) {
      itemIndex.value = itemIndex.value + 1
      if (stack.value[itemIndex.value] == undefined) {
        stack.value[itemIndex.value] = ''
      }
      stack.value[itemIndex.value] += item
      itemIndex.value = itemIndex.value + 1
    }
  })
  itemIndex.value = 0
  stack.value = []

  let result = 0
  numbers.value.forEach((item) => {
    if (isNumber(toNumber(item))) {
      result = toNumber(item)
    }
    if (isMethod(item)) {
      switch (item) {
        case '-':
          result = result - toNumber(last(stack.value))
          break
        case '+':
          result = result + toNumber(last(stack.value))
          break
        case '*':
          result = result * toNumber(last(stack.value))
          break
        case '/':
          result = result / toNumber(last(stack.value))
          break
      }
    }
  })

  numbers.value.push(result.toString())

  // cleaner()
}

const cleaner = () => (numbers.value = [])
</script>
<style>
html {
}
body {
  @apply p-0 m-0;
}
#app {
  @apply grid grid-cols-4 grid-rows-8 gap-4 p-4 overflow-hidden;
  height: 100svh;
}
</style>
