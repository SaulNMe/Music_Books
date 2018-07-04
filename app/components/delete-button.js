import Component from '@ember/component';

export default Component.extend({
	author: null,
	onAuthorDelete(){
		//override me...
	},
	actions:{
		deleteAuthor(author){
			this.onAuthorDelete(author);
		}
	}
});
