import Component from '@ember/component';
import layout from '../templates/components/power-grid-area';
import { computed } from "@ember/object";
import { observer } from "@ember/object";
import { schedule } from "@ember/runloop";
import { next } from "@ember/runloop"

export default Component.extend({
  layout,
  classNames: ['power-grid-area'],
  classNameBindings: ['areaClass'],
  parentId: null,
  gridArea: null,
  gridGap: null,
  preview: false,
  
  updateStyles: observer('gridArea', 'gridGap', 'preview', function() {
    next(() => {
      this.setStyles();
    });
  }),
  
  // gridTemplateColumns: null,
  // gridTemplateRows: null,
  
  // gridAutoColumns: null,
  // gridAutoRows: null,
  
  setStyles() {
    const elem = document.getElementById(this.get('elementId'));
    
    elem.style.gridArea = this.get('areaClass');
    elem.style.gridGap = this.get('gridGap');
    
    if (this.get('preview')) {
      elem.style.border = "1px solid red";
    } else {
      elem.style.border = 0;
    }
  },
  
  areaClass: computed('parentId', 'gridArea', function(){
    return `${this.get('parentId')}-${this.get('gridArea')}`;
  }),
  
  didInsertElement() {
    this.setStyles();
  }
});
