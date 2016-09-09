import DS from 'ember-data';

export default DS.Model.extend({
    bar: DS.belongsTo('bar'),
    product: DS.belongsTo('product'),
    currentPrice: DS.attr("number")
});
