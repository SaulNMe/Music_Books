import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
export default Route.extend({
	model(params){
		return this.store.findRecord('music-book',params.id);
	},
	// musicBooks: service('shopping-cart')
	shoppingCart: service(),
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
		},
		buyBook(model){
			this.get('shoppingCart').get('musicBooks').pushObject(model);
			// this.get('shoppingCart').notifyPropertyChange('musicBooks');
			alert(model.price);
			// console.log(model.price);
		}
	}
});
