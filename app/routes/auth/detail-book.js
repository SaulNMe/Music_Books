import Route from '@ember/routing/route';
import {hash} from 'rsvp';
import { inject as service } from '@ember/service';
export default Route.extend({
	model(params){
		let musicBook = this.store.findRecord('musicBook', params.id);
		let authors = this.store.findAll('author');
		return hash({
			musicBook,
			authors
		});
	},
	shoppingCart: service(),
	actions:{
		saveBook(book){
			book.save();
			this.transitionTo('auth.books');
		},
		willTransition(){
			let book = this.get('controller.model.musicBook');
			book.rollbackAttributes();
		},
		deleteBook(model){
			model.musicBook.destroyRecord().then(()=>{
				this.transitionTo('auth.books');
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
