import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {
        let products = this.store.query('product', {'barId': params.barId});
        let bar = this.store.findRecord('bar',params.barId);

        return Ember.RSVP.hash({
            bar: bar,
            products: products,
        });
    },
    actions: {
        redirectToOrder: function(orderID) {
            this.transitionTo('order',orderID);
        }
    }
});
