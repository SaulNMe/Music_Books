import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
	currentUser: service(),	
	actions:{
		login(username,password){
			// var user = this.get('user');
			// var password = this.get('password');
			if (username === 'Loquillo' && password === 'elchido'){
				this.get('currentUser').set('username',username);
				this.transitionTo('example');
			} else {
				alert('Access Denied');
			}
		}
	}
});
