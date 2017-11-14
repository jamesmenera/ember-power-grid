import Component from '@ember/component';
import layout from '../templates/components/power-grid-area';
import { computed } from "@ember/object";

export default Component.extend({
  layout,
  classNameBindings: ['areaClass'],
  parentId: null,
  gridArea: null,
  gridGap: null,
  preview: false,
  
  areaClass: computed('parentId', 'gridArea', function(){
    return `${this.get('parentId')}-${this.get('gridArea')}`;
  }),
  
  didInsertElement() {
    var elem = document.getElementById(this.get('elementId'));
    
    elem.style.gridArea = this.get('areaClass');
    elem.style.gridGap = this.get('gridGap');
    
    if (this.get('preview')) {
      elem.style.border = "1px solid red";
    }
  }
});
