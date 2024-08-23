<template>
  <base-form
    :rules="validationRules"
    :form="formValues"
    @submit-event="onSubmit"
    class="forgot-password-form"
    v-slot="{ errors, values }"
  >
   <base-input
    label="Email"
    :name="values.email.id"
    v-model="values.email.value"
    :error="errors.email"
   />
   <button type="submit">
    continue
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
 email: { ...states.email },
})

const validationRules = {
 email: validation.email,
}

const onSubmit = payload => {
 auth.accountRecovery(payload, formValues.value)
 emit('on-submit', payload)
}
</script>

<style lang="scss">
.forgot-password-form {
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
