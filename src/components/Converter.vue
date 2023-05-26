<script setup lang="ts">
import { ref, watch } from 'vue';
import { RomanNumber, manifest } from '../declarations';
import Error from './Error.vue';

const inputValue = ref('');
const romanValidator = /^(?=[MDCLXVI])*(M{0,3})(C[MD]|D?C{0,3})(X[CL]|L?X{0,3})(I[XV]|V?I{0,3})$/;

let result: null | number = null;
let isValid: boolean = true;

const convert = (input: any) => {
  const data: RomanNumber[] = [...input];

  return result = data.reduce(
    (result: number, currentValue: RomanNumber, currentIndex: number) => {
      return manifest.get(data[currentIndex + 1])! > manifest.get(currentValue)!
        ? result - manifest.get(currentValue)!
        : result + manifest.get(currentValue)!;
    }, 0
  );
}

const validateRomanNumber = (newVal: string) => {
  return romanValidator.test(newVal);
}

const handleInput = (newVal: string) => {
  if (!newVal) {
    result = null;
    isValid = true;
    return;
  }

  isValid = validateRomanNumber(newVal);

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

    <div id="converter__result-container">
      <div id="converter__error" v-if="!isValid">
        <Error message="Invalid input" />
      </div>

      <div id="converter__result" v-else>
        Result: {{ result }}
      </div>
    </div>
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
  border-radius: .7rem;
  outline: none;
  font-size: 1.3rem;
}

#converter__result-container {
  padding-top: 1rem;
}
</style>
