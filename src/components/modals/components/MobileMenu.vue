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
   <locale-changer />
 </div>
</template>
<script setup>
import BaseButton from "@/components/ui/base/BaseButton.vue";
import SvgIcon from "@/components/shared/SvgIcon.vue";
import { useModals } from "@/composables/useModals";
import {onBeforeUnmount, ref} from "vue";
import {useRoute} from "vue-router";
import LocaleChanger from "@/components/LocaleChanger.vue";
const { toggleComponent } = useModals();

const route = useRoute();

const currentPage = ref('');

currentPage.value = route.hash;

onBeforeUnmount(() => {
  currentPage.value = route.hash;
})
</script>
