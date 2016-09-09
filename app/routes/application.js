import Ember from 'ember';

export default Ember.Route.extend({
    appLoaded: function() {
        Ember.run.next(this, function() {
            //remove app loading overlay
            Ember.$('.appLoading').remove();
        });
    }.on('init'),
    actions: {
        error(error, transition) {
            console.log(error);
            console.log(transition);
            if (error) {
                console.log('error occured, redirect to index');
                this.transitionTo('index');
            }
        },
        toggleLoading: function(ID, show) {
            //toggle display of loading overlay component
            var app_controller = this.controllerFor('application');
            var component = app_controller.get('overlay-' + ID);
            if (component) { 
                component.send('toggle', show);
            }
        },
        didTransition: function() {
            this.send('toggleLoading', 'main', false);
            return true;
        }
    }
});