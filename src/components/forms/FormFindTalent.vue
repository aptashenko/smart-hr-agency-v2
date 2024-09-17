<template>
  <base-form
      :rules="validationRules"
      :form="formValues"
      @submit-event="onSubmit"
      v-slot="{errors, values}"
  >
    <base-input
        :label="$t('forms.findTalent.first_name')"
        :name="values.fName.id"
        :onkeydown="noDigits"
        :form="formValues"
        :id="values.fName.id"
        v-model="values.fName.value"
        :error="errors.fName"
    />
    <base-input
        :label="$t('forms.findTalent.last_name')"
        :name="values.lName.id"
        :onkeydown="noDigits"
        :form="formValues"
        :id="values.lName.id"
        v-model="values.lName.value"
        :error="errors.lName"
    />
    <base-input
        :label="$t('forms.findTalent.email')"
        :name="values.email.id"
        :id="values.email.id"
        :form="formValues"
        v-model="values.email.value"
        :error="errors.email"
    />
    <base-input
        :label="$t('forms.findTalent.company_name')"
        :name="values.companyName.id"
        :id="values.companyName.id"
        :form="formValues"
        v-model="values.companyName.value"
        :error="errors.companyName"
    />
    <base-input
        :label="$t('forms.findTalent.telegram')"
        :name="values.telegram.id"
        :id="values.telegram.id"
        :form="formValues"
        v-model="values.telegram.value"
        :error="errors.telegram"
    />
    <base-input
        :label="$t('forms.findTalent.phone')"
        :name="values.phone.id"
        :id="values.phone.id"
        :form="formValues"
        :onkeydown="phoneValidation"
        v-model="values.phone.value"
        :error="errors.phone"
    />
    <base-input
        :label="$t('forms.findTalent.promocode')"
        :name="values.promocode.id"
        :id="values.promocode.id"
        :form="formValues"
        v-model="values.promocode.value"
        :error="errors.promocode"
    />
    <base-button type="inverted" class="mx-auto block mt-[40px]">
      {{ $t('forms.findTalent.cta') }}
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
import {noDigits, phoneValidation} from "@/utils/helpers/index.js";

const emit = defineEmits(['on-submit'])

const formValues = ref({
  fName: { ...states.fName},
  lName: { ...states.lName},
  email: { ...states.email },
  phone: { ...states.phone },
  companyName: { ...states.companyName },
  telegram: { ...states.telegram },
  promocode: { ...states.promocode }
})

const validationRules = {
  fName: validation.fName,
  lName: validation.lName,
  email: validation.email,
  phone: validation.phone,
  telegram: validation.telegram,
  companyName: validation.companyName,
  promocode: validation.promocode
}

const onSubmit = async payload => {
  emit('on-submit', payload)
}
</script>
