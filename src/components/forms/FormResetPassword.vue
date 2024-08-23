<template>
  <base-form
    :rules="validationRules"
    :form="formValues"
    @submit-event="onSubmit"
    class="reset-password-form"
    v-slot="{ errors, values }"
  >
   <base-input
    label="Password"
    :name="values.password.id"
    v-model="values.password.value"
    :error="errors.password"
    />
   <base-input
    label="Confirm password"
    :name="values.password_confirmation.id"
    v-model="values.password_confirmation.value"
    :error="errors.password_confirmation"
   />
   <button type="submit">
    reset password
   </button>
  </base-form>
</template>
<script setup>
import BaseForm from '@/components/forms/BaseForm.vue'
import { ref } from 'vue'
import states from '../../common/input-fields/index.js'
import validation from '@/common/validation-rules/index.js'
import { useAuthStore } from "@/stores/auth-store.js"
const emit = defineEmits(['on-submit'])
const auth = useAuthStore()
const formValues = ref({
 password: { ...states.password },
 password_confirmation: {...states.password},
})

const validationRules = {
 password: validation.password,
 password_confirmation: validation.password,
}

const onSubmit = payload => {
 auth.resetPassword(payload, formValues.value)
 emit('on-submit', payload)
}
</script>

<style lang="scss">
.reset-password-form {
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
