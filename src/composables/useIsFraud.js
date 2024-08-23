import { ref } from 'vue';

export function useIsFraud() {
  const isWasFraudRequest = ref(false);
  const isFraud = ref(false);
  const sendClick = (event) => {
    if (window.mbp) {
      if (window.mbp.af && !isWasFraudRequest.value && !isFraud.value) {
        window.mbp.pixel.send('is_fraud').then((response) => {
          if (response.status === 200) {
            window.mbp.pixel.send('cta');
            isWasFraudRequest.value = true;
            window.location.href = event.target.href;
          } else {
            isFraud.value = true;
          }
        });
      } else if (!isFraud.value && isWasFraudRequest.value) {
        window.mbp.pixel.send('cta');
        window.location.href = event.target.href;
      }
    }
  };

  return {
    sendClick,
  };
}
