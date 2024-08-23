import axios from 'axios';
import router from '@/router';
import i18n from '@/i18n';
import { useSwitchLanguage } from '@/composables/useSwitchLanguage';
import { useAuthStore } from '@/stores/auth-store';
import { usePopups } from "@/composables/usePopups.js"

const requireToken = [
  'profile',
];

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  'X-Service-Id': import.meta.env.VITE_SERVICE_ID,
};

const baseRequest = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    post: headers,
    get: headers,
    patch: headers,
    delete: headers,
  },
});

baseRequest.interceptors.request.use(
  (config) => {
    const currentUrl = new URL(config.url, config.baseURL);
    const { usersLocale } = useSwitchLanguage();

    config.headers['X-Locale'] = usersLocale.value;

    if (config.url_params) {
      Object.entries(config.url_params || {}).forEach(([k, v]) => {
        currentUrl.pathname = currentUrl.pathname.replace(`:${k}`, encodeURIComponent(v));
      });
    } else {
      currentUrl.pathname = currentUrl.pathname.replace('/:id', '');
    }

    if (config.query) {
      Object.entries(config.query || {}).forEach(([k, v]) => {
        currentUrl.searchParams.set(k, v);
      });
    }
    if (requireToken.find((item) => config.url.includes(item))) {
      config.headers['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
    }

    return {
      ...config,
      url: currentUrl.pathname + currentUrl.search,
    };
  },
  (error) => Promise.reject(error),
);

baseRequest.interceptors.response.use(
  (config) => {
    return config;
  },
  (error) => {
    const {
      response: { status, data },
    } = error;
    const auth = useAuthStore();
    const { openAlert } = usePopups();

    if (status === 401) {
      auth.logout();
      openAlert({
        title: 'Error',
        text: data.message,
      });
    }


    if (status === 500) {
      openAlert({
        title: 'TITLE',
        text: 'TEXT',
      });
    }

    return Promise.reject(error);
  },
);

export { baseRequest };
