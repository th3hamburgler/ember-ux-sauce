import Component from '@ember/component';

export default Component.extend({
  actions: {
    noticeAction() {
      window.alert("List Notice Hit");
    },
  }
});