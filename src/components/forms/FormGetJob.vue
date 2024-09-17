<template>
  <base-form
      :rules="validationRules"
      :form="formValues"
      @submit-event="onSubmit"
      v-slot="{errors, values}"
  >
    <base-input
        inverted
        :label="$t('forms.getJob.first_name')"
        :name="values.fName.id"
        :id="values.fName.id"
        :onkeydown="noDigits"
        :form="formValues"
        v-model="values.fName.value"
        :error="errors.fName"
    />
    <base-input
        inverted
        :label="$t('forms.getJob.last_name')"
        :name="values.lName.id"
        :onkeydown="noDigits"
        :form="formValues"
        :id="values.lName.id"
        v-model="values.lName.value"
        :error="errors.lName"
    />
    <base-input
        inverted
        :label="$t('forms.getJob.email')"
        :name="values.email.id"
        :id="values.email.id"
        :form="formValues"
        v-model="values.email.value"
        :error="errors.email"
    />
    <base-input
        inverted
        :label="$t('forms.getJob.telegram')"
        :name="values.telegram.id"
        :id="values.telegram.id"
        :form="formValues"
        v-model="values.telegram.value"
        :error="errors.telegram"
    />
    <base-input
        inverted
        :label="$t('forms.getJob.linkedin')"
        :name="values.linkedin.id"
        :form="formValues"
        :id="values.linkedin.id"
        v-model="values.linkedin.value"
        :error="errors.linkedin"
    />
    <base-input
        inverted
        :label="$t('forms.getJob.phone')"
        :name="values.phone.id"
        :form="formValues"
        :id="values.phone.id"
        v-model="values.phone.value"
        :error="errors.phone"
    />
    <base-button class="mx-auto block mt-[40px]">
      {{ $t('forms.getJob.cta') }}
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
import {noDigits} from "@/utils/helpers/index.js";


const emit = defineEmits(['on-submit'])

const formValues = ref({
  fName: { ...states.fName},
  lName: { ...states.lName},
  email: { ...states.email },
  phone: { ...states.phone },
  linkedin: { ...states.linkedin },
  telegram: { ...states.telegram },
})

const validationRules = {
  fName: validation.fName,
  lName: validation.lName,
  email: validation.email,
  phone: validation.phone,
  telegram: validation.telegram,
  linkedin: validation.linkedin
}

const onSubmit = async payload => {
  emit('on-submit', payload)
}
</script>
