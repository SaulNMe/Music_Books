import DS from 'ember-data';

export default DS.RESTAdapter.extend({
	pathForType (){
		return 'music_books';
	},
	host:'https://evening-cove-21405.herokuapp.com'
});
