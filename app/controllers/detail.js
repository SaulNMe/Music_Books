import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
export default Controller.extend({
	currentUser: service(),
	actions:{
		showAuthors(){
			this.toggleProperty('isChangingAuthor');
		},
		selectAuthor(author){
			let book = this.get('model.musicBook');
			book.set('author',author);
		}
	}
});
