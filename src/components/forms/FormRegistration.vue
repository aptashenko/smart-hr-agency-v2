<template>
  <base-form
    :rules="validationRules"
    :form="formValues"
    @submit-event="onSubmit"
    class="registration-form"
    v-slot="{ errors, values }"
  >
   <input-phone
    :id="values.phone.id"
    label="Phone"
    v-model="values.phone.value"
    :error="errors.phone"
    search-placeholder="Enter code"
   />
   <base-input
    label="Password"
    :name="values.password.id"
    v-model="values.password.value"
    :error="errors.password"
   />
   <base-input
    label="Confirm password"
    :name="values.confirm_password.id"
    v-model="values.confirm_password.value"
    :error="errors.confirm_password"
   />
   <button type="submit">
    sign up
   </button>
  </base-form>
</template>
<script setup>
import BaseForm from '@/components/forms/BaseForm.vue'
import { ref } from 'vue'
import states from '../../common/input-fields/index.js'
import validation from '@/common/validation-rules/index.js'
import InputPhone from "@/components/ui/InputPhone.vue"
import { useAuthStore } from "@/stores/auth-store.js"
const emit = defineEmits(['on-submit'])
const auth = useAuthStore()

const formValues = ref({
 phone: { ...states.phone },
 password: { ...states.password },
 confirm_password: {...states.password},
})

const validationRules = {
 phone: validation.phone,
 password: validation.password,
 confirm_password: validation.password,
}

const onSubmit = payload => {
 auth.signUp(payload, formValues.value)
 emit('on-submit', payload)
}
</script>

<style lang="scss">
.registration-form {
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
