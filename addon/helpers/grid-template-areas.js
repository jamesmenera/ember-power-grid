import { helper } from '@ember/component/helper';

export function gridTemplateAreas(grid) {
  return grid.map(function(row){
    return row.split(' ');
  });
}

export default helper(gridTemplateAreas);
