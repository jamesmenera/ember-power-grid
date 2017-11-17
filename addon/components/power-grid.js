import Component from '@ember/component';
import layout from '../templates/components/power-grid';
import { computed } from "@ember/object";
import { htmlSafe } from '@ember/string';
import { A } from "@ember/array";
import { schedule } from "@ember/runloop";
import { observer } from "@ember/object";

export default Component.extend({
  init() {
    this._super(...arguments);
  },
  
  tagName: 'power-grid',
  layout,
  gridGap: 0,
  gridColumnGap: 0,
  gridRowGap: 0,
  
  gridTemplateAreas: null,
  gridTemplateColumns: null,
  gridTemplateRows: null,
  
  gridAutoColumns: null,
  gridAutoRows: null,
  
  totalRows: 0,
  totalColumns: 0,
  
  showModal: false,
  availableAreas: A(),
  
  updateStyle: observer('gridGap', 'gridTemplateAreas', 'gridTemplateColumns', 'gridTemplateRows', 'gridAutoColumns', 'gridAutoRows', 'preview', function(){
    this.setStyles();
  }),
  
  createGrid(gridTemplateAreas, type) {
    const elementId = this.get('elementId');
    let separator = (type === 'html' ? '&nbsp;&nbsp;&nbsp;' : ' ');
    let lineBreak = (type === 'html' ? '</br>' : '\n');
    let availableAreas = A();
    let totalRows = gridTemplateAreas.length;
    let totalColumns = 0;
    
    let formattedGridArea = gridTemplateAreas.map((y)=> {
      
      if (y.length > totalColumns) {
        totalColumns = y.length;
      }
      
      let gridRow = y.map((x)=> {
        availableAreas.push(x);
        
        if (x.includes('.')) {
          for (let i = 0; i < `-${elementId}`.length; i++) {
            x = x + '.';
          }
          
          return x; 
        }
        return `${elementId}-${x}`;
      });
      
      return `"${gridRow.join(separator)}"`;
    }).join(lineBreak);
    
    
    schedule('afterRender', () => {
      this.setProperties({
        availableAreas: availableAreas.uniq(),
        totalColumns,
        totalRows
      });
    })
    
    
    return formattedGridArea;
  },
  
  cssGridArea: computed('gridTemplateAreas', function() {
    const gridTemplateAreas = this.get('gridTemplateAreas');
    
    return this.createGrid(gridTemplateAreas);
  }),
  
  cssGridAreaHtml: computed('gridTemplateAreas', function() {
    const gridTemplateAreas = this.get('gridTemplateAreas');
    
    return htmlSafe(this.createGrid(gridTemplateAreas, 'html'));
  }),
  
  setStyles() {
    const elem = document.getElementById(this.get('elementId'));
    elem.style.display = 'grid';
    
    elem.style.gridTemplateAreas = this.get('cssGridArea');
    elem.style.gridGap = this.get('gridGap');
    elem.style.gridColumnGap = this.get('gridColumnGap');
    elem.style.gridRowGap = this.get('gridRowGap');
    
    elem.style.gridTemplateColumns = this.get('gridTemplateColumns');
    elem.style.gridTemplateRows = this.get('gridTemplateRows')
    elem.style.gridAutoColumns = this.get('gridAutoColumns');
    elem.style.gridAutoRows = this.get('gridAutoRows');
    
    if (this.get('preview')) {
      elem.style.border = "1px solid red";
    } else {
      elem.style.border = 0;
    }
  },
  
  didInsertElement() {
    this.setStyles();
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
