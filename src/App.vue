<template>
  <TheResult class="col-span-full row-span-3" :result="numbers" />
  <TheButton @click="cleaner" label="C" />
  <TheButton @click="setMethod('/')" label="/" />
  <TheButton @click="setMethod('*')" label="*" />
  <TheButton @click="setMethod('-')" label="-" />
  <TheButton @click="getNumber('7')" label="7" />
  <TheButton @click="getNumber('8')" label="8" />
  <TheButton @click="getNumber('9')" label="9" />
  <TheButton @click="setMethod('+')" label="+" />
  <TheButton @click="getNumber('4')" label="4" />
  <TheButton @click="getNumber('5')" label="5" />
  <TheButton @click="getNumber('6')" label="6" />
  <TheButton @click="calculateResult" class="row-span-3" label="=" />
  <TheButton @click="getNumber('1')" label="1" />
  <TheButton @click="getNumber('2')" label="2" />
  <TheButton @click="getNumber('3')" label="3" />
  <TheButton @click="getNumber('0')" class="col-span-2" label="0" />
  <TheButton @click="getNumber('.')" label="." />
</template>
<script setup lang="ts">
import TheButton from '@/components/TheButton.vue'
import TheResult from '@/components/TheResult.vue'
import { ref } from 'vue'
import { cloneDeep, last, findLastIndex, isNumber, toNumber } from 'lodash'
const numbers = ref<string[]>([])
const temp = ref('')
/**
 * Adds a number to the numbers array.
 * @param {string} number - The number to be added.
 */
const getNumber = (number: string) => {
  numbers.value.push(number)
}

/**
 * Sets the method for the calculation.
 * @param {string} method - The method to be set.
 */
const setMethod = (method: string) => {
  if (numbers.value.length === 0) return
  const lastItem = last(numbers.value)
  if (lastItem === '+' || lastItem === '-' || lastItem === '/' || lastItem === '*') {
    numbers.value.pop()
  }
  numbers.value.push(method)
}

/**
 * Checks if a given string is a valid mathematical operator (+, -, *, /).
 * @param {string} method - The string to check.
 * @returns {boolean} - True if the string is a valid operator, false otherwise.
 */
const isMethod = (method: string) => {
  switch (method) {
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

const result = ref('')

const itemIndex = ref<number>(0)
const stack = ref<string[]>([''])
const calculateResult = () => {
  if (numbers.value.length === 0) return
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
body {
  @apply p-0 m-0;
}

#app {
  @apply grid grid-cols-4 grid-rows-8 gap-4 p-4 overflow-hidden;
  height: 100svh;
}
</style>
