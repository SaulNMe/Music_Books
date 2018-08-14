// import DS from 'ember-data';
// import { decamelize } from '@ember/string';
// import {underscore} from '@ember/string';
// import { pluralize } from 'ember-inflector';
import ActiveModelAdapter from 'active-model-adapter';
export default ActiveModelAdapter.extend({
	// pathForType (modelName){
	// 	var underscored =  underscore(modelName);
	// 	console.log(underscored);
	// 	return pluralize(underscored);
	// },
	host:'https://still-garden-88285.herokuapp.com'
});
