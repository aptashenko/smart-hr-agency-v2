<template>
 <transition v-bind="globalBannerState.props.transition" @after-leave="hideBanner">
  <div
   v-if="globalBannerState.showContent"
   class="base-banner-component"
  >
   <component
    :is="globalBannerState.component"
    v-bind="globalBannerState.props"
    class="base-banner"
   />
  </div>
 </transition>
</template>

<script setup>
import { useBanners } from '@/composables/useBanners.js';
import { onMounted } from "vue"
const { globalBannerState, hideBanner, toggleBanner } = useBanners();

onMounted(toggleBanner)
</script>

<style lang="scss" scoped>
.base-banner-component {
 position: sticky;
 top: 0;
}
</style>
