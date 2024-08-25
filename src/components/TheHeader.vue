<template>
  <div
      id="header"
      class="w-full flex items-start justify-between z-[5] transition top-0"
      :class="[scrolled ? 'sticky bg-[#fff] py-[8px] px-[12px]' : 'static p-[14px]']"
  >
    <a href="#">
      <svg-icon name="logo" :scrolled="scrolled" />
    </a>
    <div v-if="!scrolled" class="flex items-start justify-between">
      <base-button type="icon" @click="openMobileMenu">
        <svg-icon name="burger" />
      </base-button>
    </div>
    <div v-if="scrolled" class="flex items-center justify-between">
      <div class="flex items-center justify-between gap-[8px]">
        <base-button @click="openFindTalent">
          Find talent
        </base-button>
        <base-button type="inverted" class="!border-[#000]">
          Get a job
        </base-button>
        <base-button type="icon" class="ml-[2px]" @click="openMobileMenu">
          <svg-icon name="burger" />
        </base-button>
      </div>
    </div>
  </div>
</template>
<script setup>
import {onBeforeUnmount, onMounted, ref} from "vue";
import {useModals} from "@/composables/useModals.js";

const { openMobileMenu, openFindTalent } = useModals();
const scrolled = ref(false)

const handleScroll = () => {
  scrolled.value = window.scrollY > 0
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);

})
</script>
