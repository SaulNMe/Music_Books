import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import {hash} from 'rsvp';
export default Route.extend({
	model(params){
		let musicBook = this.store.findRecord('musicBook', params.id);
		let authors = this.store.findAll('author');
		return hash({
			musicBook,
			authors
		});
	},
	// musicBooks: service('shopping-cart')
	shoppingCart: service(),
	actions:{
		saveBook(book){
			book.save();
			this.transitionTo('main');
		},
		willTransition(){
			let book = this.get('controller.model.musicBook');
			book.rollbackAttributes();
		},
		comeBack(){
			this.transitionTo('main')
		},
		deleteBook(model){
			model.musicBook.destroyRecord().then(()=>{
				this.transitionTo('main');
			});
		},
		buyBook(model){
			this.get('shoppingCart').get('musicBooks').pushObject(model.musicBook);
			// this.get('shoppingCart').notifyPropertyChange('musicBooks');
			alert('Added to cart');
			// console.log(model.price);
		}
	}
});
