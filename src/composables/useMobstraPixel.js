import { useAuthStore } from '@/stores/auth-store.js';

export function useMobstraPixel() {
  const auth = useAuthStore();

  const newClickId = (pixel_id) => {
    let searchParams = new URLSearchParams(window.location.search).get('f');
    let subs = window.location.search.match(/(\&|\?)sub(3|5)=\w+/gm);
    const F = searchParams ? searchParams : pixel_id;
    subs = subs ? subs.toString().split(',').join('').replace('?', '&') : '';
    window.mbp = { f: F, b: '{clickid}', k: '{subid}' };
    let el_tag = document.createElement('script');
    el_tag.async = 1;
    el_tag.src = import.meta.env.VITE_APP_LINK + '/event/js?v=' + mbp.f + subs;
    let bd = document.getElementsByTagName('script')[0];
    bd.parentNode.append(el_tag);
    el_tag.onload = async () => {
      if (window.mbp) {
        const response = await window.mbp.pixel.send('click');
        auth.user.click_id = response;
      }
      bd.parentNode.removeChild(el_tag);
    };
  };

  return {
    newClickId,
  };
}
