import Controller from '@ember/controller';
import { inject as service} from '@ember/service';
import getSum from 'music-book/utils/get-sum';
import { computed } from '@ember/object';

export default Controller.extend({
	shoppingCart: service(),
	sum: computed(function () {
		console.log('calculating sum');
		let prices = this.get('shoppingCart').get('musicBooks').map((musicBook) => {
			let price = musicBook.get('price');
			return price;
		})
		return getSum(prices);
	}).volatile()
});

// .[], .@each, .length
// volatile computed properties
// manually updating computed properties - notifyPropetyChange()
// built in computed properties