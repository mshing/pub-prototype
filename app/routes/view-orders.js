import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        let rounds = this.store.findAll('round');

        return Ember.RSVP.hash({
            rounds: rounds
        });
    },
});
