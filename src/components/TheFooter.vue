<template>
 <div class="the-footer">
  <div
   v-if="showCopyright"
   class="the-footer__wrapper">
   <template v-for="(value, key) of $tm('footer.lines')">
    <i18n-t
     v-if="$te(`footer.lines.${key}`)"
     tag="p"
     :keypath="`footer.lines.${key}`"
     class="the-footer__text"
    >
     <template #year>
      {{new Date().getFullYear()}}
     </template>
     <template #terms>
      <a @click="openInNewTab('terms')">{{ $t('footer.lines.terms') }}</a>
     </template>
     <template #privacy>
      <a @click="openInNewTab('privacy')">{{ $t('footer.lines.privacy') }}</a>
     </template>
     <template #email>
      <a @click="openInNewTab('support')">
       {{ $t('footer.lines.email') }}
      </a>
     </template>
    </i18n-t>
   </template>
  </div>
  <ul
   v-else
   class="the-footer__list">
   <router-link
    v-for="item of footerLinks"
    target="_blank"
    class="the-footer__link"
   >
    {{ item.label }}
   </router-link>
  </ul>
 </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';
import { useRouter } from "vue-router";

const { t } = useI18n();
const router = useRouter();

const showCopyright = computed(() => router.currentRoute.value.meta.copyright)
const openInNewTab = routeName => {
 const routeData = router.resolve({ name: routeName });
 window.open(routeData.href, '_blank');
};

const footerLinks = [
 {
  label: t('footer.support'),
  link: 'support'
 },
 {
  label: t('footer.terms'),
  link: 'terms'
 },
 {
  label: t('footer.privacy'),
  link: 'privacy'
 },
]
</script>

<style lang="scss">
</style>
