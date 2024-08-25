<template>
  <base-form
      :rules="validationRules"
      :form="formValues"
      @submit-event="onSubmit"
      v-slot="{errors, values}"
  >
    <base-input
        label="First name"
        :name="values.fName.id"
        :id="values.fName.id"
        v-model="values.fName.value"
        :error="errors.fName"
    />
    <base-input
        label="Last name"
        :name="values.lName.id"
        :id="values.lName.id"
        v-model="values.lName.value"
        :error="errors.lName"
    />
    <base-input
        label="Work Email"
        :name="values.email.id"
        :id="values.email.id"
        v-model="values.email.value"
        :error="errors.email"
    />
    <base-input
        label="Company name"
        :name="values.companyName.id"
        :id="values.companyName.id"
        v-model="values.companyName.value"
        :error="errors.companyName"
    />
    <base-input
        label="Telegram (optional)"
        :name="values.telegram.id"
        :id="values.telegram.id"
        v-model="values.telegram.value"
        :error="errors.telegram"
    />
    <base-input
        label="Phone"
        :name="values.phone.id"
        :id="values.phone.id"
        v-model="values.phone.value"
        :error="errors.phone"
    />
    <base-button type="inverted" class="mx-auto block mt-[40px]">
      Submit
    </base-button>
  </base-form>
</template>
<script setup>
import states from '../../common/input-fields/index.js'
import BaseForm from "@/components/forms/BaseForm.vue";
import {ref} from "vue";
import validation from "@/common/validation-rules/index.js";
import BaseInput from "@/components/ui/base/BaseInput.vue";
import BaseButton from "@/components/ui/base/BaseButton.vue";


const emit = defineEmits(['on-submit'])

const formValues = ref({
  fName: { ...states.fName},
  lName: { ...states.lName},
  email: { ...states.email },
  phone: { ...states.phone },
  companyName: { ...states.companyName },
  telegram: { ...states.telegram },
})

const validationRules = {
  fName: validation.fName,
  lName: validation.lName,
  email: validation.email,
  phone: validation.phone,
  telegram: validation.telegram,
  companyName: validation.companyName
}

const onSubmit = async payload => {
  emit('on-submit', payload)
}
</script>
