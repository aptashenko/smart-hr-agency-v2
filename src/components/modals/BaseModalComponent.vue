<template>
  <div
    class="overlay"
    :class="{ 'bg-color': globalModalState.props.selfClick }"
    aria-modal="true"
    role="dialog"
    tabindex="-1"
    @click.self="handleSelfClick"
  >
    <transition v-bind="globalModalState.props.transition" @after-leave="handleAfterLeave">
     <component
      v-if="globalModalState.showContent"
      :is="globalModalState.component"
      v-bind="globalModalState.props"
     />
    </transition>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';
import { useModals } from '@/composables/useModals';

const { closeModal, globalModalState, toggleComponent } = useModals();
const keydownListener = (event) => {
  if (event.key === 'Escape') toggleComponent();
};

const handleSelfClick = () => {
  if (globalModalState.props.selfClick) toggleComponent();
};

const handleAfterLeave = () => {
  setTimeout(closeModal, 500)
}

onMounted(() => {
  document.addEventListener('keydown', keydownListener);
  toggleComponent();
});

onUnmounted(() => {
  document.removeEventListener('keydown', keydownListener);
});
</script>

<style lang="scss" scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 101;

  overflow: scroll;

  &.bg-color {
    background: rgba(54, 58, 68, 0.4);
  }

  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
