import Route from '@ember/routing/route';

export default Route.extend({
	model(params){
		return this.store.findRecord('author',params.id);
	},
	actions:{
		saveAuthor(author){
			author.save();
			this.transitionTo('auth.authors');
		},
		willTransition(){
			let author = this.get('controller.model');
			author.rollbackAttributes();
		},
		deleteAuthor(model){
			model.destroyRecord().then(()=>{
				this.transitionTo('auth.authors');
			});
		}
	}
});
