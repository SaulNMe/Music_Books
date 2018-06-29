import Route from '@ember/routing/route';

export default Route.extend({
	model(params){
		return this.store.findRecord('music-book',params.id);
	},
	actions:{
		saveBook(book){
			book.save();
		},
		willTransition(){
			let book = this.get('controller.model');
			book.rollbackAttributes();
		},
		comeBack(){
			this.transitionTo('main')
		},
		deleteBook(model){
			model.destroyRecord().then(()=>{
				this.transitionTo('main');
			});
		}
	}
});
