import Component from '@ember/component';
import layout from '../templates/components/power-grid';
import { computed } from "@ember/object";
import { htmlSafe } from '@ember/string';

export default Component.extend({
  layout,
  gridGap: 0,
  gridTemplateAreas: null,
  gridTemplateColumns: null,
  gridTemplateRows: null,
  
  gridAutoColumns: null,
  gridAutoRows: null,
  
  createGrid(gridTemplateAreas, type) {
    const elementId = this.get('elementId');
    let separator = (type === 'html' ? '&nbsp;&nbsp;&nbsp;' : ' ');
    let lineBreak = (type === 'html' ? '</br>' : '\n');
    
    let formattedGridArea = gridTemplateAreas.map(function(y) {
      let gridRow = y.map(function(x){
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
  
  didInsertElement() {
    var elem = document.getElementById(this.get('elementId'));
    
    elem.style.fontFamily = 'Fira Code';
    elem.style.display = 'grid';
    elem.style.gridTemplateAreas = this.get('cssGridArea');
    elem.style.gridGap = this.get('gridGap');
    
    elem.style.gridTemplateColumns = this.get('gridTemplateColumns');
    elem.style.gridTemplateRows = this.get('gridTemplateRows')
    elem.style.gridAutoColumns = this.get('gridAutoColumns');
    elem.style.gridAutoRows = this.get('gridAutoRows');
    // debugger;
    
    // console.log('gridarea', `\n\n${this.get('cssGridArea')}\n\n`);
    // console.log('elem', elem.style);
  },
  
  didUpdateAttrs() {
    console.log('yo here', arguments);
  },
  
  didReceiveAttrs() {
    console.log('yo!!!', arguments);
  },
  
  willUpdate() {
    console.log('hello?', arguments)
  },
  
  didRender() {
    console.log('render', arguments);
  }
});
