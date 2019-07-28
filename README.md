[![Build Status](https://travis-ci.org/gianisegatto/leap-core.svg?branch=master)](https://travis-ci.org/gianisegatto/leap-core)

Welcome to leap core!
===================
I'm here to provide to the leap stack the core classes to be used among the leap framework.

I can help you providing the generic ErrorBuilder and the EnvironmentLoader.

### ErrorBuilder 
Is a class to help you create errors given:
* source - Usually it's the name of the class which is throwing the error.
* message - And error message which you want to show to your client
* deatils - In case you want to give more details to you client or want to send the exception which created the error.

### EnvironmentLoader
Is a class to help you load the application.json file based on different environments for example:

Your configuration files must be on the following structure:
```
    src
    ---> main
    --------> resources
    -----------------> application.json
    -----------------> application-local.json
    -----------------> application-dev.json
```

* application.json - You can set all the commons configuration here and the EnvironmentLoader will concat the data from this file to the environment which you are starting up your application.

* applicaiton-development.json - You can set all the DEVELOPMENT configuration here and it will be concatenated to the application.json file if it exists.

* application-staging.json - You can set all the STAGING configuration here  and it will be concatenated to the application.json file if it exists.

* application-production.json - You can set all the PRODUCTION configuration here  and it will be concatenated to the application.json file if it exists.

How to use it:
-------------
### ErrorBuilder:
```js
const ErrorBuilder = require("leap-core").ErrorBuilder;

ErrorBuilder.build("YourClassName", "Error during bla bla bla");
```
or
```js
const ErrorBuilder = require("leap-core").ErrorBuilder;

ErrorBuilder.build("YourClassName", "Error during bla bla bla", error);

ErrorBuilder.build("YourClassName", "Error during bla bla bla", {"detail": "some detail"});

```
### EnvironmentLoader:
```js
const EnvironmentLoader = require("leap-core").EnvironmentLoader;

EnvironmentLoader.load();
```
Let's supose you have and application.json file like this:
```json
{
    "applicationName": "My Amazing App",
    "serverPort": 8080
}
```
Loading the configuration file you can do:
```js
const EnvironmentLoader = require("leap-core").EnvironmentLoader;

const environment = EnvironmentLoader.load();

console.log("Application name: " + environment.applicationName);
console.log("Server port: " + environment.serverPort);
```
You should see
```bash
Application name: My Amazing App
Server port: 8080
```

## Feel free to bring any suggestion or sending a pull request and as soon I get more inspired I'll update better this page
