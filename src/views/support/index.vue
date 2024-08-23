<template>
  <div class="support-page">
    <form-support @on-submit="submitSupportMessage" />
  </div>
</template>

<script setup>
import FormSupport from '@/components/forms/FormSupport.vue';


const submitSupportMessage = async (payload) => {
  console.log('support sent')
};
</script>

<style lang="scss">
.support-page {
  display: grid;
  place-items: center;
  height: calc(100vh - 120px);
}
</style>
