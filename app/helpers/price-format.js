import Ember from 'ember';

export function priceFormat(params/*, hash*/) {
    //handlebars helper for formatting prices

    let value = parseFloat(params[0]);
    if (typeof value !== 'undefined') {
        return value >= 0 ? "£"+(value.toFixed(2)) : "-£"+(-value.toFixed(2));
    } else {
        throw "priceFormat helper requires a parameter";
    }
}

export default Ember.Helper.helper(priceFormat);