<template>
  <component
    :is="component"
    :to="to"
    :href="href"
    :disabled="isDisabled"
    :class="[mainClass]"
  >
    <slot />
  </component>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  tag: {
    type: String,
    default: 'button',
  },
  to: {
    type: [Object, String],
    default: null,
  },
  href: {
    type: String,
    default: null,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    default: 'button',
  },
});

const component = computed(
  () => (props.to && 'router-link') || (props.href && 'a') || props.tag
);

const isDisabled = computed(() =>
  Boolean(props.disabled || props.loading || null)
);

const mainClass = computed(
  () =>
    ({
      button: 'rounded-[200px] bg-[#000] py-[5px] px-[20px] text-[#fff] border-[1px] border-[#000] text-[16px] min-[768px]:text-[24px]',
      inverted: 'rounded-[200px] bg-[#fff] py-[5px] px-[20px] text-[#000] border-[1px] border-[#fff] text-[16px] min-[768px]:text-[24px]',
    })[props.type]
);
</script>
