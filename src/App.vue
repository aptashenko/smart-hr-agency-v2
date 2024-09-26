<template>
  <the-header />
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" class="max-w-[1200px] mx-auto" />
    </transition>
  </router-view>
  <the-footer class="max-w-[1200px] mx-auto" />
  <teleport to="body">
    <base-modal-component v-if="globalModalState.component" />
  </teleport>
</template>

<script setup>
import TheFooter from '@/components/TheFooter.vue';
import BaseModalComponent from '@/components/modals/BaseModalComponent.vue';

import { useSwitchLanguage } from '@/composables/useSwitchLanguage.js';
import { useModals } from '@/composables/useModals.js';
import TheHeader from "@/components/TheHeader.vue";

const { globalModalState } = useModals();
const { switchLanguage } = useSwitchLanguage();

switchLanguage();
</script>
