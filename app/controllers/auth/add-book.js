import Controller from '@ember/controller';

export default Controller.extend({
	authorFullName: null,
	hola: 'hola',
	actions:{
		showAuthors(){
			this.toggleProperty('isChangingAuthor');
		},
		selectAuthor(author){
			let book = this.get('model.musicBook');
			book.set('author',author);
			this.toggleProperty('isChangingAuthor');
		},
		
		createBook(){
			let title = this.get('title');
			let author = this.get('model.musicBook.author.fullName');
			let price = this.get('price');
			let imgUrl = this.get('imgUrl');
			let newBook = this.store.createRecord('music-Book',{title,author,price,imgUrl});
			newBook.save();
			this.set('imgUrl','');
			this.set('title','');
			this.set('author','');
			this.set('price','');
			this.transitionToRoute('auth.books');
		}
	}
});
