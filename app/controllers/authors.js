import Controller from '@ember/controller';
export default Controller.extend({
	actions:{
		createAuthor(){
			this.transitionToRoute('create-author');
		},
		onAuthorDelete(author){
			let answer = confirm('¿Estás seguro de que quieres eliminar este registro?');
			if(answer === true){
			author.destroyRecord();
			}
		}
	}

});
