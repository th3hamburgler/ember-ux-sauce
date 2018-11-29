import Component from '@ember/component';

export default Component.extend({
  text: "Displaying Filtered Results",
  actions: {
    noticeAction() {
      window.alert("List Notice Hit");
    },
  }
});