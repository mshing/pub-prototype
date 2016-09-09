import { Factory , faker } from 'ember-cli-mirage';

export default Factory.extend({
    name() { return `${faker.name.firstName()}'s bar`; },
    lat() { return ((Math.random() - 0.5) * 100).toFixed(4); },
    long() { return ((Math.random() - 0.5) * 100).toFixed(4); },
    imageUrl(i) { return faker.image.nightlife(80,80,i);  }

});
