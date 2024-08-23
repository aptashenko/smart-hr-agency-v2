<template>
  <div class="the-notification">
    <button class="the-notification__close" :class="[type]" @click="closeNotify">
      <span>
        <svg-icon v-if="false" :name="notifyIcon" />
      </span>
    </button>
    <div class="the-notification__body">
      <h2 class="">
        {{ title }}
      </h2>
      <p class="">
        {{ text }}
      </p>
    </div>
    <div class="the-notification__progress" :class="[type]" :style="{ width: width + '%' }" />
  </div>
</template>
<script setup>
// import SvgIcon from '@/components/shared/SvgIcon.vue';
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
import { usePopups } from '@/composables/usePopups.js';
const { toggleComponent } = usePopups();
const props = defineProps({
  title: { type: String, default: '' },
  text: { type: String, default: '' },
  type: { type: String, default: 'error' },
});
let intervalId;
const width = ref(100);
const delay = 8000;
const decrementRate = width.value / delay;

const notifyIcon = computed(
  () =>
    ({
      error: 'cancel_notify',
      success: 'check_circle',
    })[props.type],
);
const closeNotify = () => {
 toggleComponent();
};

const startInterval = () => {
  intervalId = setInterval(() => {
    width.value -= decrementRate * 10;
    width.value = Math.max(width.value, 0);
    if (width.value <= 0) {
      clearInterval(intervalId);
      closeNotify();
    }
  }, 1);
};

onMounted(startInterval);

onBeforeUnmount(() => {
  clearInterval(intervalId);
});
</script>

<style lang="scss" scoped>
.the-notification {
  position: relative;
  border-radius: 8px;
  box-shadow:
    0px 16px 24px 0px rgba(0, 0, 0, 0.14),
    0px 6px 30px 0px rgba(0, 0, 0, 0.12),
    0px 8px 10px 0px rgba(0, 0, 0, 0.2);
  padding: 12px 16px;
  overflow: hidden;
  max-width: 335px;
  margin: 0 auto;

 background: #fff;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;

  z-index: 10;

  &__progress {
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100%;
    height: 14px;
    border-radius: 10px;
    transition: all 0.25s linear;

    &.error {
      background: red;
    }

    &.success {
      background: green
    }
  }

  &__close {
    position: relative;
    flex-shrink: 0;
    background: transparent;
    border: none;
    margin: 0;
    display: flex;
    border-radius: 50%;
    padding: 4px;

    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 240px;
      height: 240px;
      pointer-events: none;
    }

    &.error {
      &::before {
        background: radial-gradient(
          50% 50% at 50% 50%,
          rgba(240, 66, 72, 0.13) 0%,
          rgba(240, 66, 72, 0) 100%
        );
      }
    }

    &.success {
      &::before {
        background: radial-gradient(
          50% 50% at 50% 50%,
          rgba(0, 237, 81, 0.12) 0%,
          rgba(0, 237, 123, 0) 100%
        );
      }
    }

    & span {
      display: flex;
      border-radius: 50%;

      &.error {
        background: red;
      }

      &.success {
        background: green;
      }

      & svg {
        width: 24px;
        height: 24px;
      }
    }
  }

  &__body {
    flex-grow: 1;

    & h2 {
      font-weight: 700 !important;
      line-height: 22px !important;
    }

    & p {
      font-size: 14px !important;
      line-height: 1.5 !important;
      font-weight: 400 !important;
    }
  }
}
</style>
