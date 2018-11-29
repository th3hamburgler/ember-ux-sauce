import Component from '@ember/component';

export default Component.extend({
  text: "Displaying Filtered Results",
  icon: "filter_list",
  actionText: "Clear",
  actions: {
    noticeAction() {
      window.alert("List Notice Hit");
    },
  }
});