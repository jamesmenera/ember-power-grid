import { helper } from '@ember/component/helper';

export function gridTemplateAreas(grid) {
  return grid.map(function(row){
    return row.split(/\s*/);
  });
}

export default helper(gridTemplateAreas);
