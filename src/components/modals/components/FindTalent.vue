<template>
  <div class="relative bg-[#000] flex flex-col justify-between p-[24px] pt-[80px] w-full min-h-[100dvh]">
    <base-button type="icon" class="max-[768px]:hidden absolute bg-[#fff] rounded-full p-[10px] top-[14px] left-[14px]" @click="toggleComponent">
      <svg-icon name="cross" fill="#000" />
    </base-button>
    <base-button type="icon" class="min-[768px]:hidden absolute top-[14px] left-[14px]" @click="toggleComponent">
      <svg-icon name="cross" />
    </base-button>
    <div v-if="!formSent">
      <div>
        <h2 class="text-[44px] text-center font-[600] leading-[1.1] tracking-[-1.76px] text-[#fff] mb-[8px] min-[768px]:text-[80px] min-[768px]:tracking-[-3.2px] min-[768px]:mb-[16px]">
          {{ $t('forms.findTalent.title') }}
        </h2>
        <p class="text-[30px] text-center font-[300] leading-[1.1]  tracking-[-1.2px] text-[#fff] opacity-50 min-[768px]:text-[40px] min-[768px]:tracking-[-1.6px]">
          {{ $t('forms.findTalent.subtitle') }}
        </p>
      </div>
      <form-find-talent @on-submit="onFormSubmit" class="max-w-[440px] mx-auto" />
    </div>
    <div v-else>
      <h2 class="text-[44px] text-center font-[600] leading-[1.1] tracking-[-1.76px] text-[#fff] mb-[8px] min-[768px]:text-[80px] min-[768px]:tracking-[-3.2px] min-[768px]:mb-[16px]">
        Thank you
      </h2>
      <p class="text-[30px] text-center font-[300] leading-[1.1]  tracking-[-1.2px] text-[#fff] opacity-50 min-[768px]:text-[40px] min-[768px]:tracking-[-1.6px]">
        We will be back to you shortly
      </p>
      <base-button type="inverted" @click="toggleComponent" class="mx-auto block mt-[40px]">
        Done
      </base-button>
    </div>
  </div>
</template>

<script setup>
import BaseButton from "@/components/ui/base/BaseButton.vue";
import SvgIcon from "@/components/shared/SvgIcon.vue";
import {useModals} from "@/composables/useModals.js";
import FormFindTalent from "@/components/forms/FormFindTalent.vue";
import {ref} from "vue";
import {useSendOrder} from "@/composables/useSendOrder.js";
import BaseInput from "@/components/ui/base/BaseInput.vue";
const { toggleComponent } = useModals();
const { onSubmit } = useSendOrder()
const formSent = ref(false)

const onFormSubmit = (payload) => {
  onSubmit(payload, () => {formSent.value = true})
}
</script>
