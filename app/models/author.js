import DS from 'ember-data';
import {computed} from '@ember/object';
import {observer} from '@ember/object';
export default DS.Model.extend({
	firstName: DS.attr('string'),
	lastName: DS.attr('string'),
	nickname: DS.attr('string'),
	age: DS.attr('number'),
	musicBook: DS.hasMany('musicBook'),
	fullName: computed('firstName', 'lastName', 'nickname', function () {
		let firstName = this.get('firstName');
		let lastName = this.get('lastName');
		let nickname = this.get('nickname');
		return `${firstName} ${lastName} (${nickname})`;
		
	}),
	changedName: observer('fullName',function(){
		// if(this.get('fullName')){
			console.log(`Now my name is ${this.get('fullName')}`);
		// }
	}),

});
