# otus-tech-challenge

Instructions:

Backend

* install nodejs, if you have not already
* install mongodb, if you have not already
* navigate to otus/back, `cd back`
* run `npm install`
* create database name otus by importing the files below:
  * ./data/classes.json
  * ./data/students.json
  * using the commands below
    * `mongoimport -d otus -c classes --file=./data/classes.json --jsonArray`
    * `mongoimport -d otus -c students --file=./data/students.json --jsonArray`

* Note: the class json object looks incorrect. When reading the json, it reads like
  * for field name "1", the value is "Math 101
  * for field name "2", the value is "English 101", etc
  so I changed the json to be
  classes: [
    {"id": 1, "name": "Math 101"},
    {"id": 2, "name": "English 101"},
    etc...
  ]

* run test, `npm test`
* run the backend, `npm run start`
* backend server should now be running in port 3000 (make sure other no other services are running on that port)

Backend testing libraries
* Jest, https://jestjs.io/
* supertest, https://github.com/visionmedia/supertest, so I don't need to start a server instance when testing the routes


FrontEnd

* navigate to otus/front, `cd front`
* run `npm install`
* execute tests, `ng test`
* start the application, run `ng serve`

* Design
  * group the student related components and features into a module
  * models, services or classes to be used thru out the application goes into the `/core` folder
  * for components to be used thru out the application, they should go into a `/shared` folder (note: folder to be created when needed, not created for this POC)
  * for more info on the folder structure, see https://angular.io/guide/styleguide#overall-structural-guidelines