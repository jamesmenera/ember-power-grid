import Controller from '@ember/controller';

export default Controller.extend({
  sideBarIsMinimized: false,
  
  actions: {
    toggleSideBar() {
      this.toggleProperty('sideBarIsMinimized');
    }
  }
});
