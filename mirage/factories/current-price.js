import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
    currentPrice() {
        return (5 + (Math.random() * 5)).toFixed(2);
    }
});
