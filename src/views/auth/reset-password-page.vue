<template>
 <div class="sign-in-page">
  <form-reset-password
   @on-submit="resetPassword"
  />
 </div>
</template>
<script setup>
import FormResetPassword from "@/components/forms/FormResetPassword.vue"
const resetPassword = (payload) => {
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
