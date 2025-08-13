export default {
  menu: {
    component: 'MobileMenu',
    props: {transition: {name: 'from-right'}, selfClick: false}
  },
  findTalent: {
    component: 'FindTalent',
    props: {transition: {name: 'from-right'}, selfClick: false, chatId: import.meta.env.VITE_CHAT_ID}
  },
  getJob: {
    component: 'GetJob',
    props: {transition: {name: 'from-right'}, selfClick: false}
  },
}
