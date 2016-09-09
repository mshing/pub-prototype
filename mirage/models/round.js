import { Model, belongsTo, hasMany } from 'ember-cli-mirage';

export default Model.extend({
    bar: belongsTo(),
    orderedBeverage: hasMany()
});
