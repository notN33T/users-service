
# BGH users-service

This service implements operations with the user entity such as updating, creating, deleting, getting all or one user

To run this project you'll need:

* Install Node, npm
* Upload code of this repository
* Run console command ```npm install``` from the root of repository
* Run console command ```npm run start:dev``` for running application in dev, or ```npm run start:prod``` to run in production mode (without updates when code changed)

### Technologies used in this project

* [Nest.js](https://docs.nestjs.com) for microservice
* [Objection](https://vincit.github.io/objection.js/) as ORM
* [GRPC](https://docs.nestjs.com/microservices/grpc) as transporter
* [Postgresql](https://www.postgresql.org/docs/) as database

## GRPC methods

1. GetAllUsers

* With empty body of request
* You will get response that will contain array of Users (id, name, email, password, role, points), or message and status in case of error

2. GetUserById

* Body of request should contain id (UUID or GUID in C#)
* Body of response will contain User (id, name, email, password, role, points),  or message and status in case of error

3. CreateUser

* Body of request should contain name, email, password
* Body of response will contain status (SUCCESS or DENIED) and message

4. DeleteUserById

* Body of request should contain id (UUID or GUID in C#)
* Body of response will contain status (SUCCESS or DENIED) and message

5. UpdateUser

* Body of request should contain id, and can contain one, one couple of next fields: email, password, role, name, points
* Body of response will contain status (SUCCESS or DENIED) and message

### Tests

To run tests, run console command ```npm run test:e2e``` from the root of repository
