<template>
 <div class="sign-in-page">
  <form-forgot-password
   @on-submit="accountRecover"
  />
 </div>
</template>
<script setup>
import FormForgotPassword from "@/components/forms/FormForgotPassword.vue"
const accountRecover = (payload) => {
  console.log(payload)
}
</script>

<style lang="scss" scoped>
.sign-in-page {
 display: grid;
 place-items: center;
 height: calc(100vh - 120px);
}
</style>
