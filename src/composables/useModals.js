import {defineAsyncComponent, reactive, watch} from 'vue';
import MODALS from '@/components/modals/components/enums'
const defaultProps = {
  transition: { name: 'fade' },
  selfClick: true,
};

const globalModalState = reactive({ component: null, props: defaultProps, showContent: false });
export function useModals() {
  const openModal = (name, props = {}) => {
    const component = defineAsyncComponent(
      () => import(`../components/modals/components/${name}.vue`),
    );
    globalModalState.component = component;
    globalModalState.props = { ...defaultProps, ...props };
  };

  const toggleComponent = (state) => {
    const value = typeof state === 'boolean' ? state : !globalModalState.showContent;
    globalModalState.showContent = value;
  };
  const closeModal = () => {
    globalModalState['component'] = null;
    globalModalState['props'] = defaultProps;
  };

  const openMobileMenu = props => {
    openModal(MODALS.menu.component, {...MODALS.menu.props, ...props})
  }

  const openFindTalent = props => {
    openModal(MODALS.findTalent.component, {...MODALS.findTalent.props, ...props})
  }

  const openGetJob = props => {
    openModal(MODALS.getJob.component, {...MODALS.getJob.props, ...props})
  }

  return { globalModalState, openModal, closeModal, openMobileMenu, openGetJob, openFindTalent, toggleComponent };
}
