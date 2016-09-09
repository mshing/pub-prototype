import DS from 'ember-data';

export default DS.Model.extend({
    bar: DS.belongsTo('bar', {async: false}),
    orderedAt: DS.attr("string"),
    orderedBeverage: DS.hasMany('ordered-beverage', {async: false})
});
