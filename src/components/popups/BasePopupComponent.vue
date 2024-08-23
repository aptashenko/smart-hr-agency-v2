<template>
  <div
    class="overlay"
    :class="{ 'bg-color': globalPopUpState.props.selfClick }"
    aria-modal="true"
    role="dialog"
    tabindex="-1"
    @click.self="handleSelfClick"
  >
    <transition v-bind="globalPopUpState.props.transition" @after-leave="closePopup">
     <div
      v-if="globalPopUpState.showContent"
      class="wrapper"
     >
      <component
       :is="globalPopUpState.component"
       v-bind="globalPopUpState.props"
      />
     </div>
    </transition>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';
import { usePopups } from '@/composables/usePopups';

const { closePopup, globalPopUpState, toggleComponent } = usePopups();
const keydownListener = (event) => {
  if (event.key === 'Escape') toggleComponent();
};

const handleSelfClick = () => {
  if (globalPopUpState.props.selfClick) toggleComponent();
};

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

.wrapper {
  position: fixed;
  bottom: 25px;
  width: 100%;
}
</style>
