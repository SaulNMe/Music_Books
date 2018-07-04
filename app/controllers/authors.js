import Controller from '@ember/controller';
export default Controller.extend({
	actions:{
		createAuthor(){
			let firstName = this.get('firstName');
			let lastName = this.get('lastName');			
			let nickname = this.get('nickname');
			let age = this.get('age');
			let newAuthor = this.store.createRecord('author',{firstName,lastName,nickname,age});
			newAuthor.save();
			this.set('firstName');
			this.set('lastName');
			this.set('nickname');
			this.set('age');
		},
		onAuthorDelete(author){
			let answer = confirm('¿Estás seguro de que quieres eliminar este registro?');
			if(answer === true){
			author.destroyRecord();
			}
		}
	}

});
