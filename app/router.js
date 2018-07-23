import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});
Router.map(function() {
  this.route('main');
  this.route('detail', {path: 'detail/:id'});
  this.route('authors');
  this.route('detail-author',{path: 'detail-author/:id'});
  this.route('shopping-cart');
  this.route('login');
  this.route('add-book');
  this.route('create-author');
  this.route('auth',{path: '/'}, function() {
    this.route('authors', function() {});
    this.route('shopping-cart');
    this.route('books', function() {});
    this.route('detail-book',{path: 'books/detail/:id'});
    this.route('detail-author',{path: 'authors/detail/:id'});
    this.route('add-book',{path: 'books/add-book'});
    this.route('add-author',{path: 'authors/add-author'});
    this.route('add-sale',{path: 'sales/add-sale'});
  });
});

export default Router;