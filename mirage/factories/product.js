import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
    name() { return `${faker.name.firstName()}'s cocktail`; },
    imageUrl(i) { return faker.image.cats(80,80,i);  }
});
