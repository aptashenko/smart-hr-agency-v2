<template>
  <base-form
    :rules="validationRules"
    :form="formValues"
    @submit-event="onSubmit"
    class="login-form"
    v-slot="{ errors, values }"
  >
   <input-phone
    :id="values.phone.id"
    label="Phone"
    v-model="values.phone.value"
    :error="errors.phone"
    search-placeholder="Enter code"
    class="form-login__input"
   />
   <base-input
    label="Password"
    :name="values.password.id"
    v-model="values.password.value"
    :error="errors.password"
   />
   <button type="submit">
    login
   </button>
  </base-form>
</template>
<script setup>
import BaseForm from '@/components/forms/BaseForm.vue'
import { ref } from 'vue'
import states from '../../common/input-fields/index.js'
import validation from '@/common/validation-rules/index.js'
import InputPhone from "@/components/ui/InputPhone.vue"
const emit = defineEmits(['on-submit'])

const formValues = ref({
 phone: { ...states.phone },
 password: { ...states.password },
})

const validationRules = {
 phone: validation.phone,
 password: validation.password,
}

const onSubmit = async payload => {
 emit('on-submit', payload)
}
</script>

<style lang="scss">
.login-form {
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
