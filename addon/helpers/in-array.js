import { helper } from '@ember/component/helper';

export function inArray(params) {
  const [available = [], value] = params;
  
  return available.includes(value);
}

export default helper(inArray);
