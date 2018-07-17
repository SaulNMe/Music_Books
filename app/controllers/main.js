import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
export default Controller.extend({
	// currentUser: service(),
	actions:{
		createBook(){
			let title = this.get('title');
			let author = this.get('author');
			let price = this.get('price');
			let imgUrl = this.get('imgUrl');
			let newBook = this.store.createRecord('music-book',{title,author,price,imgUrl});
			newBook.save();
			this.set('imgUrl','');
			this.set('title','');
			this.set('author','');
			this.set('price','');
		}, 
		linkAuthor(){
			this.transitionToRoute('authors');
		}
	}

});
