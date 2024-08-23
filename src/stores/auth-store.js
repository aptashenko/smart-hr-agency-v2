import { useRouter } from 'vue-router';
import { useSwitchLanguage } from '@/composables/useSwitchLanguage.js';
import { useLoading } from '@/composables/useLoading.js';
import { useBanners } from '@/composables/useBanners.js';
import { handleErrors } from '@/utils/helpers/errors-handler.js';
import { API } from '@/api';
import { v4 as uuidv4 } from 'uuid';
import dayjs from 'dayjs';
import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { handleFormRequest } from "@/utils/formRequrest.js"

export const useAuthStore = defineStore('auth-store', () => {
  const router = useRouter();
  const { switchLanguage, currentLocale } = useSwitchLanguage();
  const { setLoaderState, isLoading } = useLoading();
  const { showRenewSubscription } = useBanners();

  const user = ref({});
  const isAuth = computed(
    () => !!user.value.access_token || !!localStorage.getItem('token')
  );
  const isExpired = computed(() => {
    const paymentExpiredAt = user.value.payment_expired_at;

    if (paymentExpiredAt === null) {
      return true; // если null - подписка истекла
    } else if (typeof paymentExpiredAt === 'string') {
      return dayjs().isAfter(paymentExpiredAt); // если приходит дата, проверяем её актуальность
    } else {
      return false; // остальные кейсы
    }
  });

  const getUserProfile = async () => {
    document.getElementById('global-loader').style.display = 'grid';

    try {
      const {
        data: { data },
        status,
      } = await API.auth.getProfile();

      if (status === 200) {
        user.value = data;

        if (currentLocale.value !== data.language) {
          switchLanguage(data.language);
        }

        // проверяем истеклали подписка, если да, показываем баннер, если нет, прячем
        if (isExpired.value) showRenewSubscription()

        return data;
      }
    } catch (error) {
      console.error(error);
    } finally {
      document.getElementById('global-loader').style.display = 'none';
    }
  };
  const signUp = async (payload, form) => {
    const click_id =
      new URLSearchParams(window.location.search).get('click_id') ||
      new URLSearchParams(window.location.search).get('clickId') ||
      new URLSearchParams(window.location.search).get('clickid') ||
      sessionStorage.getItem('click_id');

    const payload_values = {
      click_id,
      ...payload,
    };

    const onSuccess = (data) => {
      localStorage.setItem('token', data.access_token);
      user.value.access_token = localStorage.getItem('token');
      Object.keys(data).forEach((key) => {
        user.value[key] = data[key];
      });
    };

    return handleFormRequest(API.auth.registration, payload_values, onSuccess, form, setLoaderState);
  };
  const signIn = async (payload, form) => {
    const payload_values = {
      device_id: uuidv4(),
      ...payload,
    };

    const onSuccess = (data) => {
      localStorage.setItem('token', data.access_token);
      user.value.access_token = localStorage.getItem('token');
      Object.keys(data).forEach((key) => {
        user.value[key] = data[key];
      });

      router.push({ name: 'main' });
    };

    return handleFormRequest(
      API.auth.authorization,
      payload_values,
      onSuccess,
      form,
      setLoaderState
    );
  };
  const accountRecovery = async (payload, form) => {
    return handleFormRequest(API.auth.restorePassword, payload, () => true, form, setLoaderState);
  };
  const resetPassword = async ({ password, password_confirmation }, form) => {
    const token = new URLSearchParams(window.location.search).get('token');
    const payload = {
      token,
      password,
      password_confirmation,
    };
    const onSuccess = () => {
      router.push({ name: 'sign-in' });
    };
    return handleFormRequest(API.auth.resetPassword, payload, onSuccess, form, setLoaderState);
  };
  const logout = async () => {
    localStorage.removeItem('token');
    router.push({ name: 'sign-in' });
  };

  return {
    isAuth,
    user,
    getUserProfile,
    signUp,
    signIn,
    accountRecovery,
    logout,
    resetPassword,
    isLoading,
  };
});
