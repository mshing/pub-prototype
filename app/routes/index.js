import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        var bars = this.store.findAll('bar');
        
        return Ember.RSVP.hash({
            bars: bars,
        });
    },
});
