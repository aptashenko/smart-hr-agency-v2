<template>
  <base-form
    :rules="validationRules"
    :form="formValues"
    @submit-event="onSubmit"
    class="support-form"
    v-slot="{ errors, values }"
  >
   <base-input
    label="Name"
    :name="values.name.id"
    v-model="values.name.value"
    :error="errors.name"
    />
   <input-phone
    :id="values.phone.id"
    label="Phone"
    v-model="values.phone.value"
    :error="errors.phone"
    search-placeholder="Enter code"
   />
   <base-input
    label="Email"
    :name="values.email.id"
    v-model="values.email.value"
    :error="errors.email"
   />
   <base-input
    label="Message"
    text-area
    :name="values.message.id"
    v-model="values.message.value"
    :error="errors.message"
   />
   <button type="submit">
    send
   </button>
  </base-form>
</template>
<script setup>
import BaseForm from '@/components/forms/BaseForm.vue'
import { ref } from 'vue'
import states from '../../common/input-fields/index.js'
import validation from '@/common/validation-rules/index.js'
import InputPhone from "@/components/ui/InputPhone.vue"
import { useMainStore } from "@/stores/main-store.js"
const emit = defineEmits(['on-submit'])
const main = useMainStore()

const formValues = ref({
 name: { ...states.name },
 phone: { ...states.phone },
 email: { ...states.email },
 message: { ...states.message },
})

const validationRules = {
 name: validation.name,
 phone: validation.phone,
 email: validation.email,
 message: validation.message,
}

const onSubmit = payload => {
  main.sendSupportMessage(payload, formValues.value)
  emit('on-submit', payload)
}
</script>

<style lang="scss">
.support-form {
 display: flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;

 & label {
  display: flex;
  flex-direction: column;
 }
}
</style>
