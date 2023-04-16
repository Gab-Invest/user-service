## User Service

The user service will be a REST API responsible for managing a user's companies. It will communicate directly with the database and through the HTTP protocol, it will be possible to create, query, edit, and delete a company associated with a user.

## Project's structure

The system will implement the clean architecture as its architectural standard, given its advantage of isolating modules in layers, which helps to implement unit tests. Next, the package diagram describes the organization of the system. 

The following diagram presents the folder organization that's be used by this project:


<img src="https://user-images.githubusercontent.com/37307099/232260340-282be27d-e865-405d-ac33-d50ada8ade9c.png" height=500 width=700/>

## Technologies:

- [NodeJS](https://nodejs.org/en)
- [Typescript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [Jest](https://jestjs.io/)
- [Mongo](https://www.mongodb.com/)

## Config

### Requirements

Before running the project you must have installed:

- [Docker](https://www.docker.com/)


### Env 

````
# Server
PORT=

# Database
DB_PORT=
DB_URL=
````


## Running the project

To run the project, go to the root of the project and then run:

- running the project for the first time: 

````
make build
````

- running the project in other occasions: 

````
make up
````
