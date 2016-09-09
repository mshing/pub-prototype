export default function(server) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.

    Make sure to define a factory for each model you want to create.
  */

    // server.createList('post', 10);

    


    for(let i = 1; i <= 10; i++) {
        server.create('bar', {id:i});
        for(let j = 1; j <= 30; j++) {
            server.create('product', {id:j});

            if(Math.random() > 0.3) {
                server.create('current-price', {barId:i, productId:j});
            }
        }
    }

}
