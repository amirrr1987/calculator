import { ref } from 'vue'
import { last, isNumber, toNumber, size, isEmpty } from 'lodash'

export const numbers = ref<string[]>([])

const itemIndex = ref<number>(0)
const stack = ref<string[]>([''])
const lastItem = last(numbers.value)

export const getNumber = (event: InputEvent) => {
  numbers.value.push((event.target as HTMLInputElement).value)
}

/**
 * Clears the array of numbers.
 */
export const cleaner = () => {
  numbers.value = []
}

export const setMethod = (event: InputEvent) => {
  if (numbers.value.length === 0) return
  if (lastItem === '+' || lastItem === '-' || lastItem === '/' || lastItem === '*') {
    numbers.value.pop()
  }
  numbers.value.push((event.target as HTMLInputElement).value)
}

/**
 * Checks if a given string is a valid mathematical operator (+, -, *, /).
 * @param {string} method - The string to check.
 * @returns {boolean} - True if the string is a valid operator, false otherwise.
 */
const isMethod = (method: string): boolean => {
  switch (method) {
    case '-':
      return true
    case '+':
      return true
    case '*':
      return true
    case '/':
      return true
    default:
      return false
  }
}

export const calculateResult = () => {
  if (isEmpty(numbers.value)) return false
  if (lastItem && isMethod(lastItem)) return

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
