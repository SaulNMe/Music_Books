import Route from '@ember/routing/route';
import {hash} from 'rsvp';
export default Route.extend({
	model(){
		let musicBook = this.store.findAll('music-book');
		let authors = this.store.findAll('author');
		return hash({
			musicBook,
			authors
		});
	}

});
