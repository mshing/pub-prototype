import Ember from 'ember';

/**
* Displays loading overlay element
*
* @class components loading-overlay
*/
export default Ember.Component.extend({
    /**
     * intialises component and exposes id to application controller
     *
     * @method init
     * @return null
     */
    init() {
        this._super(...arguments);

        var app_controller = this.get('targetObject');
        var exposedName = "overlay-" + this.get('id');
        app_controller.set(exposedName, this);
    },
    showOverlay:false,
    tagName:'',
    actions: {
        /**
         * changes the toggle state of loading overlay
         *
         * @method toggle
         * @return null 
         */
        toggle: function(show) {
            this.set('showOverlay', show);
        }
    }
});
