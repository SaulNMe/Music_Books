			import Route from '@ember/routing/route';

export default Route.extend({
	model(){
		//Inside findAll must be the name of the model
		return this.store.findAll('music-book');
	}
});
