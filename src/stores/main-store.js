import { useLoading } from '@/composables/useLoading.js';
import { useRouter } from 'vue-router';
import { API } from '@/api';

import { defineStore } from 'pinia';
import { computed } from 'vue';
import { handleFormRequest } from "@/utils/formRequrest.js"

export const useMainStore = defineStore('main-store', () => {
  const router = useRouter();
  const { setLoaderState, isLoading } = useLoading();

  const device = computed(() => {
    const MobileUserAgent =
      navigator.userAgent || navigator.vendor || window.opera;

    if (/iPhone|iPod|iPad/i.test(MobileUserAgent)) {
      return 'ios';
    } else if (/Android/i.test(MobileUserAgent)) {
      return 'android';
    } else {
      return 'desktop';
    }
  });

  const newPayment = async (click_id) => {
    const payload = { pay_type: 'sms', new_click_id: click_id };

    try {
      const {
        data: { data },
        status,
      } = await API.general.makePayment(payload);

      if (status === 200 || status === 204) {
        return true;
      }
    } catch (error) {
      console.error(error);
    }
  };

  const sendSupportMessage = async (payload, form) => {

    const onSuccess = () => {
      router.push({name: 'home'})
    }

    return handleFormRequest(API.general.sendSupportMessage, payload, onSuccess, form, setLoaderState)
  };

  return {
    device,
    newPayment,
    sendSupportMessage,
  };
});
