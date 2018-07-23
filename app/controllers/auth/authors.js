import Controller from '@ember/controller';

export default Controller.extend({
	actions:{
		addAuthor(){
			this.transitionToRoute('auth.add-author');
		},
		onAuthorDelete(author){
			let answer = confirm('¿Estás seguro de que quieres eliminar este registro?');
			if(answer === true){
			author.destroyRecord();
			}
		}
	}

	
});
