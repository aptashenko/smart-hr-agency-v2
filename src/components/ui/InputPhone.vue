<template>
  <div class="input-phone-container">
    <label :for="id">
      {{ label }}
    </label>
    <div class="input-phone__fields">
      <button
        type="button"
        :class="[{ 'opened-list': dropdown }, { error }]"
        @click="toggle"
      >
        <span>
          {{ selectedCode }}
        </span>
      </button>
      <div>
        <input
          v-model.number="phoneBody"
          type="number"
          class="input-phone__input"
          :class="{ error }"
          :placeholder="placeholder"
          v-on:[event]="handleInput"
          v-on:[focusEvent]="changeEvent"
        />
        <button v-if="value" @click.stop="clear">
          X
        </button>
      </div>
    </div>
    <p v-if="helpText" class="input-phone__help-text">
      {{ helpText }}
    </p>
    <p v-if="error" class="input-phone__error">
      {{ error }}
    </p>
    <transition>
      <div v-if="dropdown" class="input-phone__list">
        <div class="input-phone__item input-phone__item-search">
          <input
            id="search"
            v-model="searchItem"
            class="plain plex-large plex-large-regular"
            :placeholder="searchPlaceholder"
          />
        </div>
        <div
          v-for="code of filteredCodes"
          :key="code.countryCode"
          @click="selectCode(code.code)"
          class="input-phone__item input-phone__item-codes"
          :class="{ selected: code.code === selectedCode }"
        >
          <span class="plain plex-large plex-large-regular">
            ({{ code.code }}) {{ code.name }}
          </span>
        </div>
      </div>
    </transition>
    <div v-if="dropdown" class="input-phone__overlay" @click="toggle" />
  </div>
</template>

<script setup>
import { phoneCodeList } from '@/utils/helpers/country-codes.js';
import { computed, ref, watch } from "vue"
import { useToggler } from '@/composables/useToggler';
import { useFocusInput } from '@/composables/useFocusInput';
import { useSwitchLanguage } from "@/composables/useSwitchLanguage.js"

const { isToggled: dropdown, toggle } = useToggler();

const props = defineProps({
  label: { type: String },
  placeholder: { type: String },
  id: { type: String, required: true },
  event: { type: String, default: 'input' },
  helpText: { type: String },
  searchPlaceholder: { type: String, default: 'Type for search..' },
  error: { type: String, default: '' },
});

const value = defineModel()
const error = defineModel('error')
const { usersLocale } = useSwitchLanguage()

const defaultCountry = usersLocale.value.replace('en', 'gb');

const searchItem = ref(null);
const phoneBody = ref(null);
const codes = phoneCodeList();
const codeSettings = computed(() =>
  codes.find((item) => item.countryCode.toLowerCase() === defaultCountry),
);
const selectedCode = ref(codeSettings.value.code);
const resultPhone = computed(() => selectedCode.value + phoneBody.value);
const onFocus = () => {
  error.value = '';
};

const { changeEvent, focusEvent } = useFocusInput({ focus: onFocus });

const filteredCodes = computed(() =>
  codes.filter((item) =>
    searchItem.value
      ? item.name.toLowerCase().includes(searchItem.value?.toLowerCase()) ||
        item.code.includes(searchItem.value) ||
        item.countryCode.toLowerCase().includes(searchItem.value?.toLowerCase())
      : codes,
  ),
);

const selectCode = (code) => {
  selectedCode.value = code;
  searchItem.value = '';
  toggle();
};

const clear = () => {
  phoneBody.value = '';
  handleInput();
};

const handleInput = () => {
  const val = phoneBody.value ? resultPhone.value : '';
  value.value = val
};

watch(value, (val) => {
 if (!val) phoneBody.value = ''
})
</script>

<style lang="scss" scoped>
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.input-phone-container {
  display: flex;
  flex-direction: column;
  position: relative;
}

.input-phone {
  &__fields {
    display: flex;
  }

 &__input {
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
   -webkit-background-clip: text;
   -webkit-text-fill-color: #fff;
   transition: background-color 5000s ease-in-out 0s;
   box-shadow: inset 0 0 20px 20px rgba(33, 37, 54, 0.1);
  }

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    appearance: none;
  }
 }
 &__list {
  position: absolute;
  top: 100%;
  background: #fff;
  max-height: 200px;
  overflow-y: auto;
  z-index: 10;
 }
 &__overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
 }
}
</style>
