<template>
 <div class="sign-in-page">
  <router-link :to="{name: 'sign-up'}">
   to registration
  </router-link>
  <form-login
   @on-submit="signIn"
  />
 </div>
</template>
<script setup>
import FormLogin from "@/components/forms/FormLogin.vue"
const signIn = (payload) => {
  console.log('SIGN IN')
}
</script>

<style lang="scss" scoped>
.sign-in-page {
 display: grid;
 place-items: center;
 height: calc(100vh - 120px);
}
</style>
