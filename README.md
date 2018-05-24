# Pet Shelter API

The purpose of this API is:
- to list out all the pets in the Pet Shelter
- to add an individual pet into the Pet Shelter DB
- to get the details about an individual Pet
This is a node.js app built using express framework. 
It uses mongoDB on the cloud as a database.

## Getting Started

The App can be launched using the URL https://floating-fortress-31563.herokuapp.com
https://floating-fortress-31563.herokuapp.com/pets - returns the list of all the Pets in the Pet Shelter in JSON format
https://floating-fortress-31563.herokuapp.com/pets/{id} - returns the pet details with Id {Id} in JSON format

An individual Pet detail can be posted by sending the 
HTTP POST request to https://floating-fortress-31563.herokuapp.com/pets/ in JSON format

### Usage
Sample JSON format for HTTP POST:
{"name":"Doggo2","type":"Dog","breed":"Boxer","latitude":"47.60621","longitude":"-122.33207"}

Returns:
{
    "_id": "5b058ff25a8e640014480eee",
    "name": "Doggo3",
    "type": "Dog",
    "breed": "Boxer",
    "latitude": 47.60621,
    "longitude": -122.33207,
    "__v": 0
}

### Prerequisites

* node.js
* mongoDB

### Installing

clone the github then install the below nodejs modules

* npm install express
* npm install config
* npm install mongoose


## Built With

* (https://expressjs.com/) - The node.js web framework used
* (https://www.mongodb.com/) - For Database

## Known Defects
Even though the name is a unique field, the users would still be allowed to enter duplicate names by changing the case. Ideally, the pet name should stored in the DB as all upper or all lower case and should be converted to proper case using express after extracting the data from the DB and before sending the response to the REST call.

## Authors

Mayand Tiwari

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
