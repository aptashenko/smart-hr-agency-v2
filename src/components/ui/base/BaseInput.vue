<template>
  <div class="pt-[28px] pb-[10px]">
    <div
        v-if="!textArea || passwordInput"
        class="w-full relative border-b-[1px]  pb-[2px]"
        :class="[inverted ? 'border-[#00000033]' : 'border-[#FFFFFF33]', {[inverted ? '!border-[#55F6C6]' : '!border-[#FCFF7E]']: isFocused}]">
      <input
        :name="name"
        :id="name"
        v-bind="$attrs"
        :type="inputType"
        v-model="value"
        :placeholder="placeholder"
        class="w-full bg-transparent outline-0 text-[18px] font-[400] leading-[1.48]"
        :class="[inverted ? 'text-[#000]' : 'text-[#fff]']"
        v-on:[focusEvent]="changeEvent"
      />
      <svg-icon
        v-if="passwordInput"
        name="eye"
        :hide="passwordVisible"
        class="eye-btn"
        @click="togglePasswordVisibility"
      />
      <label
          :for="name"
          class="absolute pointer-events-none transition duration-300 origin-left top-0 left-0 text-[18px] font-[400] leading-[1.48] opacity-40"
          :class="[inverted ? 'text-[#000]' : 'text-[#fff]', {'label-peer !pointer-events-auto': isFocused || modelValue}]"
      >
        {{ label }}
      </label>
    </div>

    <textarea
      v-else
      :name="name"
      :id="name"
      v-model="value"
      :placeholder="placeholder"
      v-on:[focusEvent]="changeEvent"
    />

    <transition name="fade" mode="out-in">
      <p v-show="error" class="text-[12px] text-error">
        {{ error }}
      </p>
    </transition>
  </div>
</template>

<script setup>
import { useFocusInput } from '@/composables/useFocusInput.js';
import states from '../../../common/input-fields/index.js';
import { ref, computed } from 'vue';

const value = defineModel();
const props = defineProps({
  type: {
    type: String,
    default: 'text',
  },
  form: {
    type: Object,
    required: true
  },
  inverted: {
    type: Boolean,
    default: false,
  },
  textArea: {
    type: Boolean,
    default: false,
  },
  error: {
    type: String,
    default: '',
  },
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    default: '',
  },
});

const onFocus = () => {
  const formInput = Object.values(props.form);
  const input = formInput.find(item => item.id === props.name)
  input['validationError'] = '';
  input['serverError'] = '';
};
const { isFocused, changeEvent, focusEvent } = useFocusInput({
  focus: onFocus,
});

const passwordInput = computed(() => props.name === states.password?.id);
const passwordVisible = ref(false);
const inputType = computed(() =>
  passwordVisible.value ? props.type : props.name
);
const togglePasswordVisibility = () => {
  passwordVisible.value = !passwordVisible.value;
};
</script>
