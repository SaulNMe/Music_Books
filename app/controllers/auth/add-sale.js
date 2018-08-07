import Controller from '@ember/controller';

export default Controller.extend({
	actions: {
		createSale(){
			alert('Sale added');
			this.transitionToRoute('auth.shopping-cart');
		}
	}
});
