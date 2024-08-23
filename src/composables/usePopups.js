import { defineAsyncComponent, reactive } from 'vue';
import POPUPS from '@/components/popups/components/enums'
const defaultProps = {
  transition: { name: 'fade' },
  selfClick: true,
};

const globalPopUpState = reactive({ component: null, props: defaultProps, showContent: false });
export function usePopups() {
  const openPopup = (name, props = {}) => {
    const component = defineAsyncComponent(
      () => import(`../components/popups/components/${name}.vue`),
    );
    globalPopUpState.component = component;
    globalPopUpState.props = { ...defaultProps, ...props };
  };

  const toggleComponent = (state) => {
    const value = typeof state === 'boolean' ? state : !globalPopUpState.showContent;
    globalPopUpState.showContent = value;
  };
  const closePopup = () => {
    globalPopUpState['component'] = null;
    globalPopUpState['props'] = defaultProps;
  };

  const openAlert = props => {
    openPopup(POPUPS.notification.component, {...POPUPS.notification.props, ...props})
  }

  return { globalPopUpState, closePopup, openPopup, openAlert, toggleComponent };
}
