<template>
 <base-banner v-if="globalBannerState.component" />
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
  <the-footer />
  <div v-if="globalPopUpState.component" class="notifications-wrapper">
    <base-popup-component />
  </div>
  <teleport to="body">
    <base-modal-component v-if="globalModalState.component" />
  </teleport>
</template>

<script setup>
import TheFooter from '@/components/TheFooter.vue';
import BasePopupComponent from '@/components/popups/BasePopupComponent.vue';
import BaseModalComponent from '@/components/modals/BaseModalComponent.vue';

import { useSwitchLanguage } from '@/composables/useSwitchLanguage.js';
import { usePopups } from '@/composables/usePopups.js';
import { useModals } from '@/composables/useModals.js';
import { useAuthStore } from '@/stores/auth-store';
import BaseBanner from "@/components/banners/BaseBannerComponent.vue"
import { useBanners } from "@/composables/useBanners.js"

const auth = useAuthStore();

const { globalPopUpState } = usePopups();
const { globalModalState } = useModals();
const { globalBannerState } = useBanners();
const { switchLanguage } = useSwitchLanguage();

if (auth.isAuth) auth.getUserProfile();

switchLanguage();
</script>
