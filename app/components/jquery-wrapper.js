import Component from '@ember/component';

export default Component.extend({
	query: null,
	method: null,
	options: {},

	didInsertElement () {
		let query = this.get('query');
		let method = this.get('method');
		let options = this.get('options');

		$(query)[method](options);
	}
});
