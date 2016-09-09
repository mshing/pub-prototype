import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
    location: config.locationType,
    rootURL: config.rootURL
});

Router.map(function() {
  this.route('bar', { path: 'bar/:barId'});
  this.route('order', { path: 'order/:orderId'});
  this.route('view-orders');
});

export default Router;
