import Ember from "ember";

//mix in default route behavoir
var transition = Ember.Mixin.create({
    //on transition
    activate: function() {
        this._super();        
        
        Ember.run.next(function() {
            //set min height on main element
            let minHeight = Ember.$(window).height() - Ember.$('footer').height();
            Ember.$('main').css('min-height',`${minHeight}px`);
        });
    },
    beforeModel: function(transition) {
        //show loading overlay, trigger action on application route
        transition.send('toggleLoading', 'main', true);
    },
    afterModel: function(posts, transition) {
        //hide loading overlay, trigger action on application route
        transition.send('toggleLoading', 'main', false);
    },
    actions: {
        didTransition: function() {
            this._super();
            
            Ember.run.next(function() {
                //scroll to top
                window.scrollTo(0,0);
            });

            return true;
        }
    }
});

export function initialize(/* application */) {
    Ember.Route.reopen(transition);
}

export default {
  name: 'transition',
  initialize
};
