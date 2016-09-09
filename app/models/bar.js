import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr("string"),
    lat: DS.attr("number"),
    long: DS.attr("number"),
    imageUrl: DS.attr("string"),
    currentPrice: DS.hasMany('current-price')
});
