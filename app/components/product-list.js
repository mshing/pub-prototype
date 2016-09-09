import Ember from 'ember';

export default Ember.Component.extend({
    store: Ember.inject.service(),
    routing: Ember.inject.service('-routing'),
    orderedProducts: {},
    redirectToOrder: 'redirectToOrder',
    toggleLoading: 'toggleLoading',
    init() {
        this._super(...arguments);

        this.set('orderedProducts', {});

        if(this.get('summary') === true) {
            this.set('products', this.get('model.round.orderedBeverage'));
        } else {
            this.set('products', this.get('model.products'));
        }
    },
    totalPrice: Ember.computed('products.@each.actualPrice', function() {
        //sum total price of all products in order
        var total = 0;
        
        this.get('products').forEach((product)=> {
            total += product.get('actualPrice') * product.get('count');
        });

        return total;
    }),
    totalCount: 0,
    actions: {
        addProduct(product, price) {
            //increment ordered products by id
            let count = this.get(`orderedProducts.${product.get('id')}.count`);
            this.set(`orderedProducts.${product.get('id')}`, {
                count:!isNaN(count) ? count + 1 : 1, 
                price:price,
                product:product
            });

            this.set('totalCount', this.get('totalCount') + 1);

            console.log(this.get('orderedProducts'));
        },
        removeProduct(id) {
            //decrement ordered products by id
            let count = this.get(`orderedProducts.${id}.count`);
            if(!isNaN(count)) {
                this.set(`orderedProducts.${id}.count`, count > 0 ? count - 1 : 0);
                this.set('totalCount', count > 0 ? this.get('totalCount') - 1 : this.get('totalCount'));
            }
        },
        createOrder() {
            let that = this;
            that.sendAction('toggleLoading', 'main', true);

            //create round model
            let round = that.get('store').createRecord('round', { bar: that.get('model.bar'), orderedAt: new Date()});

            round.save().then((result)=> {
                let promises = [];
                let roundId =  result.get('id');

                //create ordered beverages models
                for(let productKey in that.orderedProducts) {
                    if(that.get(`orderedProducts.${productKey}.count`) > 0) {
                        promises.push(that.get('store').createRecord('orderedBeverage', {
                            product: that.get(`orderedProducts.${productKey}.product`), 
                            round: round, 
                            actualPrice: that.get(`orderedProducts.${productKey}.price`),
                            count: that.get(`orderedProducts.${productKey}.count`)
                        }).save());
                    }
                }

                Ember.RSVP.all(promises).then(()=> {
                    this.sendAction('redirectToOrder', roundId);
                });
            });

        }
    }
});
