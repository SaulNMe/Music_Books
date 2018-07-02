import Route from '@ember/routing/route';

export default Route.extend({
	model(params){
		return this.store.findRecord('author',params.id);
	},
	actions:{
		saveAuthor(author){
			author.save();
		},
		willTransition(){
			let author = this.get('controller.model');
			author.rollbackAttributes();
		},
		comeBack(){
			this.transitionTo('authors')
		},
		deleteBook(model){
			model.destroyRecord().then(()=>{
				this.transitionTo('authors');
			});
		}
	}
});
