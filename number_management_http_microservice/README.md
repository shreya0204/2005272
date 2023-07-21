# Number Management HTTP Microservice

This is a HTTP microservice designed to fetch JSON data from multiple URLs, merge the data, and return a unique sorted array. 

## Overview

This service, called `number-management-service`, exposes a GET REST API called `numbers`. This API receives a list of URLs through query parameters, fetches the JSON data from each URL, merges the data, and returns a unique sorted array.

The URL for the API is structured as follows:

`http://localhost:8008/numbers?url=http://example.com/numbers&url=http://another-example.com/numbers`

You can provide as many `url` query parameters as needed.

Each URL is expected to return a JSON data structure that looks like this:

```json
{
  "numbers": [ 1, 2, 3, 5, 8, 13]
}
```
The service will return the merged and sorted data in the following format

```json
{
  "numbers": [ 1, 2, 3, 5, 8, 13, ... ]
}
```

## Running the Service
To run the service, follow these steps:

1. Clone this repository.
2. Navigate to the project folder in your terminal.
3. Install the dependencies by running npm install.
4. Start the service by running node index.js.

You can now use the service at http://localhost:8008/numbers.

## Previews

![image](https://github.com/shreya0204/2005272/assets/78657883/6c09e2b2-ae8f-4c3e-a3df-282a01718825)


## Technology Stack
- Node.js
- Express.js
- Axios

## Limitations and Future Work
1. Currently, the service does not support pagination or rate limiting. This could be added in the future.
2. Error handling could be improved. Currently, the service simply ignores any URLs that do not respond within 500 milliseconds.
3. Unit tests and integration tests could be added to make the service more robust.
