<template>
  <component :is="imgComponent" />
</template>

<script setup>
import { defineAsyncComponent } from 'vue';

const props = defineProps({
  name: {
    type: [String, Object],
    required: true,
  },
});

const imgComponent = defineAsyncComponent(() => {
  if (props.name.dir) {
    return import(
      `../../assets/images/svg/${props.name.dir}/${props.name.icon}.vue`
    );
  } else {
    return import(`../../assets/images/svg/${props.name.toLowerCase()}.vue`);
  }
});
</script>
