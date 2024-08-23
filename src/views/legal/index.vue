<template>
  <div class="legal-view">
    <h2 class="legal-view__title vollkorn-title">
      {{ $t(`legal.${pageName}.title`) }}
    </h2>
    <div class="legal-view__body">
      <div class="legal-view__text" v-html="$t(`legal.${pageName}.content`)" />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const pageName = computed(() => router.currentRoute.value.name);
</script>

<style lang="scss">
.legal-view {
  padding: 40px 20px;
  
  &__title {
    font-size: 38px;
    text-align: center;
    margin-bottom: 12px;
  }

  &__text {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
  }
}
</style>
