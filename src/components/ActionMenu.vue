<template>
  <div>
    <div class="flex items-center gap-[20px] justify-center mb-[20px]">
      <label v-for="(item, idx) of texts" class="text-[18px] leading-[1.48] font-[700] cursor-pointer min-[768px]:text-[40px] min-[768px]:tracking-[-1.6px]" :class="{'opacity-50 !font-[400]': product !== idx}">
        {{item.label}}
        <input hidden v-model="product" :value="idx" type="radio" name="product" />
      </label>
    </div>

    <p class="text-center text-[16px] font-[400] leading-[1.48] opacity-50 mb-[20px] min-[768px]:text-[24px]">
      {{texts[product].text}}
    </p>
    <base-button class="mx-auto block">
      {{texts[product].cta}}
    </base-button>
  </div>
</template>

<script setup>
import BaseButton from "@/components/ui/base/BaseButton.vue";
import {ref} from "vue";
const product = ref(0)
const texts = [
  {
    label: 'Companies',
    text: 'We will find suitable candidates within 1 day to 2 weeks. Along with the resume, we will send a 15-minute video recording of the initial interview and the results of 4 psychological tests so that you can get to know the candidates and select the best ones before the personal communication stage. All you have to do is conduct the final interviews and choose the one who best meets your vision.',
    cta: 'Find talent'
  },
  {
    label: 'Professionals',
    text: 'NO TEXT',
    cta: 'NO TEXT'
  },
  {
    label: 'Partners',
    text: 'NO TEXT',
    cta: 'NO TEXT'
  },
]
</script>
