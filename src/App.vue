<template>
  <div class="answer">
    <span v-if="dataResult != ''">{{ dataResult }}</span>
    <span v-else>0</span>
  </div>
  <button @click="cleaner" class="btn btn__action btn__c">c</button>
  <button @click="addToCalc('/')" class="btn btn--/">/</button>
  <button @click="addToCalc('*')" class="btn btn--*">*</button>
  <button @click="addToCalc('-')" class="btn btn---">-</button>
  <button @click="addToCalc('+')" class="btn btn--+">+</button>
  <button @click="addToCalc('.')" class="btn btn--.">.</button>
  <button @click="calcData" class="btn btn--=">=</button>
  <button @click="addToCalc('9')" class="btn btn--9">9</button>
  <button @click="addToCalc('8')" class="btn btn--8">8</button>
  <button @click="addToCalc('7')" class="btn btn--7">7</button>
  <button @click="addToCalc('6')" class="btn btn--6">6</button>
  <button @click="addToCalc('5')" class="btn btn--5">5</button>
  <button @click="addToCalc('4')" class="btn btn--4">4</button>
  <button @click="addToCalc('3')" class="btn btn--3">3</button>
  <button @click="addToCalc('2')" class="btn btn--2">2</button>
  <button @click="addToCalc('1')" class="btn btn--1">1</button>
  <button @click="addToCalc('0')" class="btn btn--0">0</button>
</template>
<script lang="ts">
import { computed, defineComponent, ref, watchEffect } from "vue";

export default defineComponent({
  name: "TheApp",
  setup() {
    const vh = computed(() => window.innerHeight * 0.01);

    watchEffect(() =>
      document.documentElement.style.setProperty("--vh", `${vh.value}px`)
    );

    const dataResult = ref("");
    const addToCalc = (dataString: string) => {
      dataString == "0" ? "" : (dataResult.value += dataString);
    };
    const calcData = () => {
      dataResult.value = eval(dataResult.value);
    };

    const cleaner = () => {
      dataResult.value = "";
    };

    return {
      cleaner,
      calcData,
      addToCalc,
      dataResult,
      vh
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

.btn--c {
  @apply col-start-1 col-end-2 row-start-4 row-end-5;
}
.btn--\/ {
  @apply col-start-2 col-end-3 row-start-4 row-end-5;
}
.btn--\= {
  @apply col-start-4 col-end-5 row-start-6 row-end-9;
}
.btn--\* {
  @apply col-start-3 col-end-4 row-start-4 row-end-5;
}
.btn--\- {
  @apply col-start-4 col-end-5 row-start-4 row-end-5;
}
.btn--\+ {
  @apply col-start-4 col-end-5 row-start-5 row-end-6;
}
.btn--\. {
  @apply col-start-3 col-end-4 row-start-8  row-end-9;
}
.btn--0 {
  @apply col-start-1 col-end-3 row-start-8 row-end-9;
}
.btn--1 {
  @apply col-start-1 col-end-2 row-start-7 row-end-8;
}
.btn--2 {
  @apply col-start-2 col-end-3 row-start-7 row-end-8;
}
.btn--3 {
  @apply col-start-3 col-end-4 row-start-7 row-end-8;
}
.btn--4 {
  @apply col-start-1 col-end-2 row-start-6 row-end-7;
}
.btn--5 {
  @apply col-start-2 col-end-3 row-start-6 row-end-7;
}
.btn--6 {
  @apply col-start-3 col-end-4 row-start-6 row-end-7;
}
.btn--7 {
  @apply col-start-1 col-end-2 row-start-5 row-end-6;
}
.btn--8 {
  @apply col-start-2 col-end-3 row-start-5 row-end-6;
}
.btn--9 {
  @apply col-start-3 col-end-4 row-start-5 row-end-6;
}
</style>
