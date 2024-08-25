<template>
  <div class="relative bg-[#000] flex flex-col justify-between p-[24px] pt-[80px] w-full min-h-[100dvh]">
    <base-button type="icon" class="absolute top-[14px] left-[14px]" @click="toggleComponent">
      <svg-icon name="cross" />
    </base-button>
    <div v-if="!formSent">
      <div>
        <h2 class="text-[44px] text-center font-[600] leading-[1.1] tracking-[-1.76px] text-[#fff] mb-[8px]">
          Find talent
        </h2>
        <p class="text-[30px] text-center font-[300] leading-[1.1]  tracking-[-1.2px] text-[#fff] opacity-50">
          Share information about your company
        </p>
      </div>
      <form-find-talent @on-submit="onSubmit" />
    </div>
    <div v-else>
      <h2 class="text-[44px] text-center font-[600] leading-[1.1] tracking-[-1.76px] text-[#fff] mb-[8px]">
        Thank you
      </h2>
      <p class="text-[30px] text-center font-[300] leading-[1.1]  tracking-[-1.2px] text-[#fff] opacity-50">
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
const { toggleComponent } = useModals();

const formSent = ref(false)

const onSubmit = () => {
  formSent.value = true;
}
</script>
