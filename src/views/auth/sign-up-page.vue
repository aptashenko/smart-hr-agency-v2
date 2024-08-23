<template>
  <div class="sign-up-page">
    <router-link :to="{ name: 'sign-in' }">to sign in</router-link>
    <form-registration @on-submit="signUp" />
  </div>
</template>
<script setup>
import FormRegistration from '@/components/forms/FormRegistration.vue';
const signUp = (payload) => {
  console.log(payload);
};
</script>

<style lang="scss" scoped>
.sign-up-page {
  display: grid;
  place-items: center;
  height: calc(100vh - 120px);
}
</style>
