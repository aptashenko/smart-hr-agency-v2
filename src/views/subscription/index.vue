<template>
  <div>
    <h2>{{ $t('subscription.title') }}</h2>
    <button @click="planEvent">subscription</button>
  </div>
</template>

<script setup>
import { useMainStore } from '@/stores/main-store.js';
import { useAuthStore } from '@/stores/auth-store.js';
import { useI18n } from 'vue-i18n';
import { useMobstraPixel } from '@/composables/useMobstraPixel.js';
import { useIsFraud } from '@/composables/useIsFraud.js';
import { computed } from 'vue';

const main = useMainStore();
const auth = useAuthStore();

const { newClickId } = useMobstraPixel();
const { sendClick } = useIsFraud();
const { t, te } = useI18n();

const smsText = computed(() => {
  if (auth.user.click_id) {
    return `${t('subscription.keyword')} ${auth.user.click_id}\n${t('subscription.sms_text')}`;
  }
});

const smsBuilder = computed(() => ({
  ios: `sms:${t('subscription.short_code')}&body=` + encodeURI(smsText.value),
  android:
    `sms:${t('subscription.short_code')}?body=` + encodeURI(smsText.value),
  desktop: '#',
}));

const PIXEL_ID = {
  dev: import.meta.env.VITE_APP_MOBSTRA_PIXEL_ID,
  prod: t('subscription.pixel'),
};

newClickId(PIXEL_ID[import.meta.env.VITE_APP_ENV]);

const planEvent = async (event) => {
  if (!smsText.value || main.device === 'desktop') return;

  const success = await main.newPayment(auth.user.click_id);
  if (!success) return;

  sendClick(event);

  const link = document.createElement('a');
  link.href = smsBuilder.value[main.device];
  link.click();
};
</script>

<style lang="scss" scoped></style>
