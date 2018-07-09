import DS from 'ember-data';
import {computed} from '@ember/object'
export default DS.Model.extend({
	title: DS.attr('string'),
	author: DS.belongsTo('author'),
	price: DS.attr('number'),
	imgUrl: DS.attr('string')
});
