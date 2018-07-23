import Controller from '@ember/controller';

export default Controller.extend({
	actions:{
		showAuthors(){
			this.toggleProperty('isChangingAuthor');
		},
		selectAuthor(author){
			let book = this.get('model.musicBook');
			book.set('author',author);
			this.toggleProperty('isChangingAuthor');
		}
	}
});
