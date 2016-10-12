# Pub-app

Prototype application for assignment: https://gist.github.com/sunpig/5e5973a09c13d3382026

The application is written in EmberJs and makes use of emberData and mirage to generate placeholder data each time the application is loaded, orders are only persisted for the the current session. The data schema in the application directly matches the specification in the assignment as well as the relationships. It is currently using the faker.js library to generate images for the data models and can sometimes be slow to load. The burger menu button in the header is used to view created orders. The requirements for the API is that it is a restful crud service which follows the schema defined in the assignment and that it follows the json api format (http://jsonapi.org/). 

## Build instructions 

* npm install -g ember-cli 
* npm install -g bower

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
