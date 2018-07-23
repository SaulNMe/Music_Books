import Controller from '@ember/controller';

export default Controller.extend({
	actions:{
		books(){
			this.transitionToRoute('auth.books');
		},
		authors(){
			this.transitionToRoute('auth.authors');
		},
		shoppingCart(){
			this.transitionToRoute('auth.shopping-cart');
		}
	}
});
