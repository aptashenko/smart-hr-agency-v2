<template>
  <the-header v-if="route.name !== 'comm-offer'" />
  <router-view v-slot="{ Component }">
    <component :is="Component" class="max-w-[1200px] mx-auto" />
  </router-view>
  <the-footer v-if="route.name !== 'comm-offer'" class="max-w-[1200px] mx-auto" />
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
import {useRoute} from "vue-router";

const { globalModalState } = useModals();
const { switchLanguage } = useSwitchLanguage();
const route = useRoute();

switchLanguage();
</script>
