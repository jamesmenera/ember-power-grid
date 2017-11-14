import Component from '@ember/component';
import layout from '../templates/components/power-grid-modal';
import { computed } from "@ember/object";

export default Component.extend({
  tagName: 'power-grid-modal',
  layout,
  showModal: false,
  
  setStyles() {
    const elem = document.getElementById(this.get('elementId'));
    
    elem.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    elem.style.zIndex = 100;
    elem.style.gridColumnStart = 1;
    elem.style.gridRowStart = 1;
    elem.style.gridColumnEnd = this.get('totalColumns') + 1;
    elem.style.gridRowEnd = this.get('totalRows') + 1;
  },
  
  didRender() {
    this.setStyles()
  },
  
  actions: {
    openModal() {
      this.set('showModal', true);
      
    },
    
    closeModal() {
      this.set('showModal', false);
    }
  }
});
