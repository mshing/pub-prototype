import Ember from 'ember';
import moment from 'moment';

export function dateFormat(params/*, hash*/) {
    //handlebars helper for formatting dates using moment lib
    try {
        let momentDate;
        if (typeof params[2] === 'undefined') {
            momentDate = moment(new Date(params[0]));
        } else {
            momentDate = moment(params[0], params[2]);
        }
        return momentDate.format(params[1]);
    } catch(err) {
        console.log(err);
        console.log("ERROR - date format helper requires a valid date and moment format string");
    }
}

export default Ember.Helper.helper(dateFormat);
