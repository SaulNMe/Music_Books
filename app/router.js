import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});
Router.map(function() {
  this.route('main',{path: '/'});
  this.route('detail', {path: 'detail/:id'});
  this.route('authors');
  this.route('detail-author',{path: 'detail/:id'});
});

export default Router;