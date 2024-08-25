<template>
  <div class="relative bg-[#fff] flex flex-col justify-between p-[24px] pt-[80px] w-full min-h-[100dvh]">
    <base-button type="icon" class="max-[768px]:hidden absolute bg-[#000] rounded-full p-[10px] top-[14px] left-[14px]" @click="toggleComponent">
      <svg-icon name="cross" />
    </base-button>
    <base-button type="icon" class="min-[768px]:hidden absolute top-[14px] left-[14px]" @click="toggleComponent">
      <svg-icon name="cross" fill="#000" />
    </base-button>
    <div v-if="!formSent">
      <div>
        <h2 class="text-[44px] text-center font-[600] leading-[1.1] tracking-[-1.76px] text-[#000] mb-[8px] min-[768px]:text-[80px] min-[768px]:tracking-[-3.2px] min-[768px]:mb-[16px]">
          Get a job
        </h2>
        <p class="text-[30px] text-center font-[300] leading-[1.1]  tracking-[-1.2px] text-[#000] opacity-50 min-[768px]:text-[40px] min-[768px]:tracking-[-1.6px]">
          Share information about you
        </p>
      </div>
      <form-get-job @on-submit="onSubmit" class="max-w-[440px] mx-auto" />
    </div>
    <div v-else>
      <h2 class="text-[44px] text-center font-[600] leading-[1.1] tracking-[-1.76px] text-[#000] mb-[8px] min-[768px]:text-[80px] min-[768px]:tracking-[-3.2px] min-[768px]:mb-[16px]">
        Thank you
      </h2>
      <p class="text-[30px] text-center font-[300] leading-[1.1]  tracking-[-1.2px] text-[#000] opacity-50 min-[768px]:text-[40px] min-[768px]:tracking-[-1.6px]">
        We will be back to you shortly
      </p>
      <base-button @click="toggleComponent" class="mx-auto block mt-[40px]">
        Done
      </base-button>
    </div>
  </div>
</template>

<script setup>
import BaseButton from "@/components/ui/base/BaseButton.vue";
import SvgIcon from "@/components/shared/SvgIcon.vue";
import {useModals} from "@/composables/useModals.js";
import {ref} from "vue";
import FormGetJob from "@/components/forms/FormGetJob.vue";
const { toggleComponent } = useModals();

const formSent = ref(false)

const onSubmit = () => {
  formSent.value = true;
}
</script>
