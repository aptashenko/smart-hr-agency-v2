import { defineAsyncComponent, reactive } from 'vue';
import BANNERS from "@/components/banners/components/enums.js"

const defaultProps = {};

const globalBannerState = reactive({
  component: null,
  showContent: false,
  props: defaultProps,
});

export function useBanners() {
  const showBanner = (name, props = {}) => {
    const component = defineAsyncComponent(
      () => import(`../components/banners/components/${name}.vue`)
    );
    globalBannerState.component = component;
    globalBannerState.props = { ...defaultProps, ...props };
  };

  const toggleBanner = (state) => {
    const value = typeof state === 'boolean' ? state : !globalBannerState.showContent;
    globalBannerState.showContent = value;
  };

  const hideBanner = () => {
    globalBannerState['component'] = null;
    globalBannerState['props'] = defaultProps;
  };

  const showRenewSubscription = props => {
    showBanner(BANNERS.renew_subscription.component, {...BANNERS.renew_subscription.props, ...props})
  }

  return {
    globalBannerState,
    showRenewSubscription,
    showBanner,
    hideBanner,
    toggleBanner
  };
}
