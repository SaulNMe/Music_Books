import Controller from '@ember/controller';

export default Controller.extend({
	actions:{
		addBook(){
			this.transitionToRoute('auth.add-book');
		}
	}
});
