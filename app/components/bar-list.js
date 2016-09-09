import Ember from 'ember';

export default Ember.Component.extend({
    filterString: null,
    filteredBars: Ember.computed('filterString', function() {
        //filter bars model based on input string
        var result = this.get('model.bars');
        var keyword = this.get('filterString');
        if(keyword !== null && keyword.length > 0) {
            result = this.get('model.bars').filter((bar) =>{
                return bar.get('name').toLowerCase().includes(keyword);
            });
        }

        return result;     
    })
});
