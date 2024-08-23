import { AUTH_URLS } from '@/api/services/auth/enums.js';

export default (api) => ({
  authorization: (data) => api.post(AUTH_URLS.login, data),
  getProfile: () => api.get(AUTH_URLS.profile),
  registration: (data) => api.post(AUTH_URLS.register, data),
  restorePassword: (data) => api.post(AUTH_URLS.restorePassword, data),
  updateProfile: (data) => api.patch(AUTH_URLS.profile, data),
  resetPassword: (data) => api.post(AUTH_URLS.resetPassword, data),
  getMeta: (id) =>
    api.get(AUTH_URLS.meta, {
      url_params: { click_id: id },
    }),
});
