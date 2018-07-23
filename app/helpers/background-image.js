import { helper } from '@ember/component/helper';
import { htmlSafe } from '@ember/string';

export function backgroundImage(params/*, hash*/) {
	let url = params[0] || '';
		
	return htmlSafe(`background-image: url(${url})`);
}

export default helper(backgroundImage);
