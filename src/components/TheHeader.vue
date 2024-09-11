<template>
  <div
      id="header"
      class="relative w-full flex items-start justify-end z-[5] transition top-0"
      :class="[scrolled ? 'sticky bg-[#fff] max-[768px]:py-[8px] py-[13px] px-[12px]' : 'static max-[768px]:!p-[14px] p-[20px]']"
  >
    <router-link :to="{name: 'main', hash: '#'}" class="absolute left-[20px] flex-1" :class="[scrolled ? 'top-[13px]' : 'top-[20px]']">
      <svg-icon name="logo" :scrolled="scrolled" />
    </router-link>
    <template v-if="router.currentRoute.value.name === 'main'">
      <div class="min-[768px]:hidden">
        <div v-if="!scrolled" class="flex items-start justify-between">
          <base-button type="icon" @click="openMobileMenu">
            <svg-icon name="burger" />
          </base-button>
        </div>
        <div v-if="scrolled" class="flex items-center justify-between">
          <div class="flex items-center justify-between gap-[8px]">
            <base-button @click="openFindTalent" :class="{'!text-[14px]': currentLocale === 'ru'}">
              {{$t('header.actions.findTalent')}}
            </base-button>
            <base-button type="inverted" class="!border-[#000]" @click="openGetJob" :class="{'!text-[14px]': currentLocale === 'ru'}">
              {{$t('header.actions.getJob')}}
            </base-button>
            <base-button type="icon" class="ml-[2px]" @click="openMobileMenu">
              <svg-icon name="burger" />
            </base-button>
          </div>
        </div>
      </div>
      <div class="max-[768px]:hidden flex items-center" :class="{'h-[34px]': scrolled}">
        <ul class="flex items-center justify-center gap-[24px] flex-1 min-[768px]:center-absolute">
          <li @click="setPage('expertise')" :class="[currentPage === 'expertise' ? 'opacity-100' : 'opacity-50']">
            <a href="#expertise" class="text-[16px] font-[400] leading-[1.48] transition hover:opacity-50">
              {{$t('header.menu.expertise')}}
            </a>
          </li>
          <li @click="setPage('about')" :class="[currentPage === 'about' ? 'opacity-100' : 'opacity-50']">
            <a href="#about" class="text-[16px] font-[400] leading-[1.48] transition hover:opacity-50">
              {{$t('header.menu.about')}}
            </a>
          </li>
          <li @click="setPage('how')" :class="[currentPage === 'how' ? 'opacity-100' : 'opacity-50']">
            <a href="#how" class="text-[16px] font-[400] leading-[1.48] transition hover:opacity-50">
              {{$t('header.menu.how')}}
            </a>
          </li>
          <li @click="setPage('flexibility')" :class="[currentPage === 'flexibility' ? 'opacity-100' : 'opacity-50']">
            <a href="#flexibility" class="text-[16px] font-[400] leading-[1.48] transition hover:opacity-50">
              {{$t('header.menu.flex')}}
            </a>
          </li>
        </ul>
        <locale-changer v-if="!scrolled" class="!text-[#00000080]" dropdown="bottom" />
        <div v-else class="flex items-center gap-[8px]">
          <base-button class="!text-[16px]" @click="openFindTalent">
            {{$t('header.actions.findTalent')}}
          </base-button>
          <base-button type="inverted" class="!border-[#000] !text-[16px]" @click="openGetJob">
            {{$t('header.actions.getJob')}}
          </base-button>
        </div>
      </div>
    </template>
  </div>
</template>
<script setup>
import {onBeforeUnmount, onMounted, ref} from "vue";
import {useModals} from "@/composables/useModals.js";
import LocaleChanger from "@/components/LocaleChanger.vue";
import {useSwitchLanguage} from "@/composables/useSwitchLanguage.js";
import {useRoute, useRouter} from "vue-router";

const { openMobileMenu, openFindTalent, openGetJob } = useModals();
const scrolled = ref(false)
const { currentLocale } = useSwitchLanguage()
const router = useRouter()
const route = useRoute();

const handleScroll = (ev) => {
  if (window.scrollY === 0) {
    currentPage.value = ''
  }
  if (route.name === 'main') {
    scrolled.value = window.scrollY > 0
  }
};

const currentPage = ref('');

currentPage.value = route.hash;

const setPage = id => {
  currentPage.value = id
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);

})
</script>
