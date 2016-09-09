import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {
        let round = this.store.findRecord('round',params.orderId);

        return Ember.RSVP.hash({
            round: round,
            products: round.orderedBeverage
        });
    }
});
