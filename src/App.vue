<template>
  <div class="answer">
    <div >{{ monitorData }}</div>
    <div >result : {{ resultData }}</div>
  </div>
  <button @click="cleaner" class="btn btn__action btn__c">c</button>
  <button @click="calcOperator('/')" class="btn btn__action btn__/">/</button>
  <button @click="calcOperator('*')" class="btn btn__action btn__*">*</button>
  <button @click="calcOperator('-')" class="btn btn__action btn__-">-</button>
  <button @click="calcOperator('+')" class="btn btn__action btn__+">+</button>
  <button class="btn btn__action btn__.">.</button>
  <button @click="calcData" class="btn btn__action btn__=">=</button>
  <button @click="getNumber(9)" class="btn btn__number btn__9">9</button>
  <button @click="getNumber(8)" class="btn btn__number btn__8">8</button>
  <button @click="getNumber(7)" class="btn btn__number btn__7">7</button>
  <button @click="getNumber(6)" class="btn btn__number btn__6">6</button>
  <button @click="getNumber(5)" class="btn btn__number btn__5">5</button>
  <button @click="getNumber(4)" class="btn btn__number btn__4">4</button>
  <button @click="getNumber(3)" class="btn btn__number btn__3">3</button>
  <button @click="getNumber(2)" class="btn btn__number btn__2">2</button>
  <button @click="getNumber(1)" class="btn btn__number btn__1">1</button>
  <button @click="getNumber(0)" class="btn btn__number btn__0">0</button>
</template>
<script lang="ts">
import { computed, defineComponent, ref, watchEffect, } from "vue";

export default defineComponent({
  name: "TheApp",
  setup() {
    let vh = computed(()=> window.innerHeight * 0.01);
    

    watchEffect(()=> document.documentElement.style.setProperty('--vh', `${vh.value}px`))


    const temp = ref<any>([]);
    const calcTemp = ref<any>([]);
    const getNumber = (number: any) => {
      temp.value.push(number);
      console.log(temp.value.join(""));
    };
    const cleaner = () => {
      temp.value = [];
      calcTemp.value = [];
      console.clear();
       resultData.value = null
    };
    const calcOperator = (action: string) => {
      let test = +temp.value.join("");
      calcTemp.value.push(test);
      calcTemp.value.push(action);
      console.log(calcTemp.value);
      temp.value = [];
       resultData.value = null
    };
    // const monitorData = computed(() => {
    //   return (+temp.value.join("")).toLocaleString();
    // });

    const monitorData = computed({
      set: (value: any) => {
        temp.value = +value;
      },
      get: () => {
        return (+temp.value.join("")).toLocaleString();
      },
    });
    const resultData = ref()
    const calcData = () => {
      let test = +temp.value.join("");
      calcTemp.value.push(test);
      console.log(eval(calcTemp.value.join("")));

      resultData.value = eval(calcTemp.value.join(""));
    };

    return {
      getNumber,
      cleaner,
      calcOperator,
      monitorData,
      calcData,
      resultData
    };
  },
});
</script>
<style>
#app {
  @apply h-screen grid gap-4 p-4 text-white bg-[#60627b];
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(8, 1fr);
  height: calc(var(--vh, 1vh) * 100);
}
.answer {
  @apply bg-[#7b7c92] col-start-1 col-end-5 row-start-1 row-end-4 text-4xl p-5 break-words grid capitalize;
  box-shadow: inset 0px 0px 4px #1e1f20, -2px -2px 10px #979393;
}
.btn {
  @apply text-2xl capitalize;
  box-shadow: 3px 3px 11px #1e1f20, -2px -2px 10px rgb(151, 147, 147);
}
.btn:active {
  box-shadow: none;
}
.btn__number {
}
.btn__action {
}
.btn__c {
  @apply col-start-1 col-end-2 row-start-4 row-end-5;
}
.btn__\/ {
  @apply col-start-2 col-end-3 row-start-4 row-end-5;
}
.btn__\= {
  @apply col-start-4 col-end-5 row-start-6 row-end-9;
}
.btn__\* {
  @apply col-start-3 col-end-4 row-start-4 row-end-5;
}
.btn__\- {
  @apply col-start-4 col-end-5 row-start-4 row-end-5;
}
.btn__\+ {
  @apply col-start-4 col-end-5 row-start-5 row-end-6;
}
.btn__\. {
  @apply col-start-3 col-end-4 row-start-8  row-end-9;
}
.btn__0 {
  @apply col-start-1 col-end-3 row-start-8 row-end-9;
}
.btn__1 {
  @apply col-start-1 col-end-2 row-start-7 row-end-8;
}
.btn__2 {
  @apply col-start-2 col-end-3 row-start-7 row-end-8;
}
.btn__3 {
  @apply col-start-3 col-end-4 row-start-7 row-end-8;
}

.btn__4 {
  @apply col-start-1 col-end-2 row-start-6 row-end-7;
}
.btn__5 {
  @apply col-start-2 col-end-3 row-start-6 row-end-7;
}
.btn__6 {
  @apply col-start-3 col-end-4 row-start-6 row-end-7;
}

.btn__7 {
  @apply col-start-1 col-end-2 row-start-5 row-end-6;
}
.btn__8 {
  @apply col-start-2 col-end-3 row-start-5 row-end-6;
}
.btn__9 {
  @apply col-start-3 col-end-4 row-start-5 row-end-6;
}
</style>
