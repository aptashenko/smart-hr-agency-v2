<template>
  <div class="main-page">
    <h2>{{ $t('global.document_title') }}</h2>
    <button @click="openAlertButton">Open alert</button>
    <button @click="openBaseModal">Open modal</button>
  </div>
</template>

<script setup>
import { usePopups } from '@/composables/usePopups.js';
import { useModals } from '@/composables/useModals.js';

const { openAlert } = usePopups();
const { openBaseModal } = useModals();

const openAlertButton = () => {
  openAlert({ text: 'this is alert text', title: 'this is alert title' });
};

</script>
