<template>
  <div>
    <div class="flex items-center gap-[20px] justify-center mb-[20px]">
      <label v-for="(item, idx) of texts" class="text-[18px] leading-[1.48] font-[700] cursor-pointer min-[768px]:text-[40px] min-[768px]:tracking-[-1.6px]" :class="{'opacity-50 !font-[400]': product !== idx}">
        {{item.label}}
        <input hidden v-model="product" :value="idx" type="radio" name="product" />
      </label>
    </div>

    <p class="text-center text-[16px] font-[400] leading-[1.48] opacity-50 mb-[20px] min-[768px]:text-[24px]">
      {{texts[product].text}}
    </p>
    <base-button
        :href="texts[product].href"
        target="_blank"
        class="mx-auto block w-fit bg-[#00000033] border-none"
        @click="texts[product].action"
    >
      {{texts[product].cta}}
    </base-button>
  </div>
</template>

<script setup>
import BaseButton from "@/components/ui/base/BaseButton.vue";
import {computed, ref} from "vue";
import {useI18n} from "vue-i18n";
import {useModals} from "@/composables/useModals.js";
const product = ref(0);
const { t } = useI18n();
const { openGetJob, openFindTalent } = useModals()
const texts = computed(() => ([
  {
    label: t('landing.actionMenu.companies.label'),
    text: t('landing.actionMenu.companies.description'),
    cta: t('header.actions.findTalent'),
    action: openFindTalent,
  },
  {
    label: t('landing.actionMenu.specialists.label'),
    text: t('landing.actionMenu.specialists.description'),
    cta: t('header.actions.getJob'),
    action: openGetJob
  },
  {
    label: t('landing.actionMenu.partners.label'),
    text: t('landing.actionMenu.partners.description'),
    cta: t('header.actions.apply'),
    href: 'https://t.me/kott_a'
  },
]))
</script>
