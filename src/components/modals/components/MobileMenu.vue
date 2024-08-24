<template>
 <div class="relative bg-[#000] flex flex-col justify-between p-[24px] w-full h-[100dvh]">
   <base-button type="icon" class="absolute top-[14px] right-[14px]" @click="toggleComponent">
     <svg-icon name="cross" />
   </base-button>
   <ul class="flex flex-col items-start text-[#fff] text-[40px] font-[300] gap-[24px]" @click="toggleComponent">
     <li class="flex items-center justify-center">
       <a href="#expertise" class="leading-[44px]" :class="{'text-[#FCFF7E]': currentPage === '#expertise'}">
         Expretise
       </a>
     </li>
     <li class="flex items-center justify-center">
       <a href="#about" class="leading-[44px]" :class="{'text-[#FCFF7E]': currentPage === '#about'}">
         About
       </a>
     </li>
     <li class="flex items-center justify-center">
       <a href="#how" class="leading-[44px]" :class="{'text-[#FCFF7E]': currentPage === '#how'}">
         How it works
       </a>
     </li>
     <li class="flex items-center justify-center">
       <a href="#flexibility" class="leading-[44px]" :class="{'text-[#FCFF7E]': currentPage === '#flexibility'}">
         Flexibility
       </a>
     </li>
   </ul>
   <div class="relative">
     <button class="flex items-center gap-[8px]" @click="toggleLangs">
       <svg-icon name="language" />
       <div class="flex items-center justify-between">
         <p class="text-[14px] text-[#fff] opacity-14">English</p>
         <div class="w-[20px] h-[20px] flex items-center justify-center">
           <svg-icon name="arrow-dropdown" class="flex-shrink-0" />
         </div>
       </div>
     </button>
     <div v-if="langsList" class="">
       <div class="fixed top-0 left-0 h-[100vh] w-[100vw] z-[1]" @click="toggleLangs" />
       <ul class="z-[2] bg-[#fff] rounded-[12px] absolute bottom-[150%] p-[8px]">
         <li class="flex items-center justify-start bg-[#00000014] rounded-[4px] py-[2px] px-[8px]">
           <button class="text-[14px]">
             English
           </button>
         </li>
         <li class="flex items-center justify-start rounded-[4px] py-[2px] px-[8px]">
           <button class="text-[14px]">
             Русский <span class="text-[12px] opacity-40">Russian</span>
           </button>
         </li>
         <li class="flex items-center justify-start rounded-[4px] py-[2px] px-[8px]">
           <button class="text-[14px]">
             Español <span class="text-[12px] opacity-40">Spanish</span>
           </button>
         </li>
       </ul>
     </div>
   </div>
 </div>
</template>
<script setup>
import BaseButton from "@/components/ui/base/BaseButton.vue";
import SvgIcon from "@/components/shared/SvgIcon.vue";
import { useModals } from "@/composables/useModals";
import {onBeforeUnmount, ref} from "vue";
import {useRoute} from "vue-router";
const { toggleComponent } = useModals();

const route = useRoute();
const langsList = ref(false);

const currentPage = ref('');

const toggleLangs = () => {
  langsList.value = !langsList.value;
}

currentPage.value = route.hash;

onBeforeUnmount(() => {
  currentPage.value = route.hash;
})
</script>
