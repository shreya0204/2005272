# Trains Schedule Web Application

A responsive React-based Frontend Web Application to display the Trains Schedule provided by John Doe Railways.

## Preview

![image](https://github.com/shreya0204/2005272/assets/78657883/8095450e-15c1-4c19-9008-780c18a6f25f)

![image](https://github.com/shreya0204/2005272/assets/78657883/6636f437-36d0-443e-8e09-696504cd5e89)


## Introduction

This web application allows users to view the real-time schedule of all trains along with seat availability and prices for different coach types (sleeper and AC). The application fetches data from the John Doe Railways API and displays the train details in an organized manner.

The application consists of two pages:

1. All Trains: Displays the schedule of all available trains.
2. Single Train: Displays detailed information about a specific train.

## Features

1. Real-time display of train schedules, seat availability, and prices.
2. Responsive design for seamless usage on various devices.
3. User-friendly UI to prominently display important train details.
4. Fetches data from the John Doe Railways API using authentication.

## Installation

1. Clone the repository or download the source code.
2. Navigate to the project directory in the terminal.
3. Install the required dependencies using npm: `npm install`
4. To run the application locally, use the following command: `npm start`

The application will start on http://localhost:3000/ by default.

## API Authentication

1. To access the John Doe Railways API and fetch train data, the application requires an access token. Follow the steps below to obtain the access token:

2. Register your company with the John Doe Railway Server using the /train/register API endpoint. Provide the required data, including your company name, owner name, roll number, owner email, and access code.

3. After successful registration, you will receive a clientID and clientSecret. Use these credentials to obtain the access token by making a POST request to /train/auth API endpoint.

4. Update the getAccessToken function in api.js with your credentials obtained in step 2.

## Technologies Used

- React
- React Router DOM
- Axios
- CSS (Material UI)

With the access token in place, the application will be able to make API calls to fetch train data.
