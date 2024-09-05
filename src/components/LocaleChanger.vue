<template>
  <div class="relative text-[#fff]">
    <button class="flex items-center gap-[8px]" @click="toggleLangs">
      <svg-icon name="language" fill="currentColor" />
      <div class="flex items-center justify-between">
        <p class="text-[14px] opacity-14">{{ LANGUAGE_ENUMS[currentLocale] }}</p>
        <div class="w-[20px] h-[20px] flex items-center justify-center">
          <svg-icon name="arrow-dropdown" fill="currentColor" class="flex-shrink-0" />
        </div>
      </div>
    </button>
    <transition name="fade">
      <div v-if="langsList">
        <div class="fixed top-0 left-0 h-[100vh] w-[100vw] z-[1]" @click="toggleLangs" />
        <ul class="z-[2] bg-[#fff] rounded-[12px] absolute p-[8px]" :class="[dropdown === 'top' ? 'bottom-[150%]' : 'top-[150%] min-w-[135px] right-0']">
          <li class="flex items-center justify-start rounded-[4px] py-[2px] px-[8px]"
              :class="{'bg-[#00000014]': currentLocale === 'en'}"
          >
            <button class="text-[14px] text-[#000]" @click="switchLanguage('en')">
              English
            </button>
          </li>
          <li class="flex items-center justify-start rounded-[4px] py-[2px] px-[8px]"
              :class="{'bg-[#00000014]': currentLocale === 'ru'}"
          >
            <button class="text-[14px] text-[#000]" @click="switchLanguage('ru')">
              Русский <span class="text-[12px] opacity-40">Russian</span>
            </button>
          </li>
          <li class="flex items-center justify-start rounded-[4px] py-[2px] px-[8px]"
              :class="{'bg-[#00000014]': currentLocale === 'es'}"
          >
            <button class="text-[14px] text-[#000]" @click="switchLanguage('es')">
              Español <span class="text-[12px] opacity-40">Spanish</span>
            </button>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>
<script setup lang="ts">
import SvgIcon from "@/components/shared/SvgIcon.vue";
import { useSwitchLanguage } from "@/composables/useSwitchLanguage";
import {ref} from "vue";
const langsList = ref(false);
defineProps({
  dropdown: {type: String, default: 'top'}
})

const { switchLanguage, LANGUAGE_ENUMS, currentLocale } = useSwitchLanguage()

const toggleLangs = () => {
  langsList.value = !langsList.value;
}

</script>
