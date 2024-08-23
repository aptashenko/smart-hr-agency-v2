import { ref } from 'vue';

export function useToggler() {
  const isToggled = ref(false);

  const toggle = () => {
    isToggled.value = !isToggled.value;
  };

  return {
    isToggled,
    toggle,
  };
}
