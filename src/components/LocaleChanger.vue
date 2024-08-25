<template>
  <div class="relative text-[#fff]">
    <button class="flex items-center gap-[8px]" @click="toggleLangs">
      <svg-icon name="language" fill="currentColor" />
      <div class="flex items-center justify-between">
        <p class="text-[14px] opacity-14">English</p>
        <div class="w-[20px] h-[20px] flex items-center justify-center">
          <svg-icon name="arrow-dropdown" fill="currentColor" class="flex-shrink-0" />
        </div>
      </div>
    </button>
    <div v-if="langsList" class="">
      <div class="fixed top-0 left-0 h-[100vh] w-[100vw] z-[1]" @click="toggleLangs" />
      <ul class="z-[2] bg-[#fff] rounded-[12px] absolute bottom-[150%] p-[8px]">
        <li class="flex items-center justify-start bg-[#00000014] rounded-[4px] py-[2px] px-[8px]">
          <button class="text-[14px] text-[#000]">
            English
          </button>
        </li>
        <li class="flex items-center justify-start rounded-[4px] py-[2px] px-[8px]">
          <button class="text-[14px] text-[#000]">
            Русский <span class="text-[12px] opacity-40">Russian</span>
          </button>
        </li>
        <li class="flex items-center justify-start rounded-[4px] py-[2px] px-[8px]">
          <button class="text-[14px] text-[#000]">
            Español <span class="text-[12px] opacity-40">Spanish</span>
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup lang="ts">
import SvgIcon from "@/components/shared/SvgIcon.vue";
import {ref} from "vue";
const langsList = ref(false);

const toggleLangs = () => {
  langsList.value = !langsList.value;
}

</script>
