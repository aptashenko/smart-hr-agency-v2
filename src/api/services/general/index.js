import { GENERAL_URLS } from './enums.js';

export default (api) => ({
  makePayment: (data) => api.post(GENERAL_URLS.make_payment, data),
  sendSupportMessage: (data) =>
    api.post(GENERAL_URLS.send_support_message, data),
});
