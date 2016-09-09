import DS from 'ember-data';

export default DS.Model.extend({
    product: DS.belongsTo('product'),
    round: DS.belongsTo('round'),
    actualPrice: DS.attr("number"),
    count: DS.attr("number")
});
