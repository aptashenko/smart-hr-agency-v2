<template>
  <div
      id="header"
      class="w-full flex items-start justify-between z-[5] transition top-0"
      :class="[scrolled ? 'sticky bg-[#fff] max-[768px]:py-[8px] py-[13px] px-[12px]' : 'static max-[768px]:!p-[14px] p-[20px]']"
  >
    <a href="#">
      <svg-icon name="logo" :scrolled="scrolled" />
    </a>
    <div class="min-[768px]:hidden">
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
          <base-button type="inverted" class="!border-[#000]" @click="openGetJob">
            Get a job
          </base-button>
          <base-button type="icon" class="ml-[2px]" @click="openMobileMenu">
            <svg-icon name="burger" />
          </base-button>
        </div>
      </div>
    </div>
    <div class="max-[768px]:hidden flex items-center flex-1" :class="{'h-[34px]': scrolled}">
      <ul class="flex items-center justify-center gap-[24px] flex-1">
        <li>
          <a href="#" class="text-[16px] font-[400] leading-[1.48] transition hover:opacity-50">Expretise</a>
        </li>
        <li>
          <a href="#" class="text-[16px] font-[400] leading-[1.48] transition hover:opacity-50">About</a>
        </li>
        <li>
          <a href="#" class="text-[16px] font-[400] leading-[1.48] transition hover:opacity-50">How it works</a>
        </li>
        <li>
          <a href="#" class="text-[16px] font-[400] leading-[1.48] transition hover:opacity-50">Flexibility</a>
        </li>
      </ul>
      <locale-changer v-if="!scrolled" class="!text-[#00000080]" dropdown="bottom" />
      <div v-else class="flex items-center gap-[8px]">
        <base-button class="!text-[16px]" @click="openFindTalent">
          Find talent
        </base-button>
        <base-button type="inverted" class="!border-[#000] !text-[16px]" @click="openGetJob">
          Get a job
        </base-button>
      </div>
    </div>
  </div>
</template>
<script setup>
import {onBeforeUnmount, onMounted, ref} from "vue";
import {useModals} from "@/composables/useModals.js";
import LocaleChanger from "@/components/LocaleChanger.vue";

const { openMobileMenu, openFindTalent, openGetJob } = useModals();
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
