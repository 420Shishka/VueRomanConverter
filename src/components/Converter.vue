<script setup lang="ts">
import { ref, watch } from "vue";
import { RomanNumber, manifest } from '../declarations';

const inputValue = ref('');
const validator = /^(?=[MDCLXVI])M*(C[MD]|D?C{0,3})(X[CL]|L?X{0,3})(I[XV]|V?I{0,3})$/;

let result: null | number = null;

const convert = (input: any) => {
  const data: RomanNumber[] = [...input];

  return result = data.reduce(
    (result: number, currentValue: RomanNumber, currentIndex: number) => {
      return manifest.get(data[currentIndex + 1])! > manifest.get(currentValue)!
        ? result - manifest.get(currentValue)!
        : result + manifest.get(currentValue)!
    }, 0
  );
}

const validate = (newVal: string) => {
  return validator.test(newVal);
}

const handleInput = (newVal: string) => {
  if (!newVal) return result = null;
  const isValid = validate(newVal);
  console.log(isValid);

  if (!isValid) return;

  convert(newVal);
}

watch(inputValue, handleInput);
</script>

<template>
  <div id="converter-container">
    <div id="converter__input">
      <input type="text" placeholder="Roman number" v-model="inputValue" />
    </div>

    <div id="converter__result">{{ result }}</div>
  </div>
</template>

<style scoped>
#converter__input {
  border-bottom: 3px solid white;
}

input {
  margin-bottom: 1rem;
  padding: .5rem .8rem;
  width: 100%;
  border: none;
  border-radius: 15px;
  outline: none;
  font-size: 1.3rem;
}

#converter__result {
  padding-top: 1rem;
}
</style>
