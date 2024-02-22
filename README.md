
## Aureum - E-Commerce MVP on Internet Computer Protocol

## Overview
This repository contains the codebase for an MVP (Minimum Viable Product) of an e-commerce platform built using Azle, React, and JavaScript to be deployed on the Internet Computer Protocol. The MVP aims to demonstrate core functionalities of an e-commerce platform including product management, user management, shopping cart, order management, and checkout.

## Features
The MVP includes the following core functionalities:
- **Product Management**: Allows administrators to add, edit, and remove products, and users to view product details and search/filter products.
- **User Management**: Enables users to register, login, update their profile, and view their order history.
- **Shopping Cart**: Provides users with the ability to add/remove items to/from their cart, update item quantities, and view the cart summary.
- **Order Management**: Allows users to place orders, view order details, track order status, and update order status.
- **Checkout**: Facilitates secure payment processing and order confirmation.

## Technologies Used
- **Azle**: Frontend framework specifically designed for building applications on the Internet Computer Protocol.
- **React**: JavaScript library for building user interfaces.
- **Internet Computer Protocol**: A blockchain-based decentralized computing platform that serves as the backend infrastructure.
- **JavaScript**: Programming language used for frontend logic and interactions.
- **HTML/CSS**: Standard markup and styling languages for building web interfaces.

## Getting Started
To run the application locally or deploy it on the Internet Computer Protocol, follow these steps:


## Project Structure


1. `backend` - Contains the backend canister code for marketplace logic and user data management.
2. `frontend` - Houses the frontend code; serves as the asset canister for the project.

## Prerequisites

- Node.js (version 18 recommended)
- DFX (version 0.15.0 recommended)
- Internet access for downloading dependencies and deploying canisters.

## Local Development Setup

Follow these steps to set up the Aureum project locally:

#
   ```
### 2. Start the Local Internet Computer Replica

1. Navigate to the root directory of the cloned repository and switch to the master branch:
   ```sh
   cd my-app
   ```
    ```sh
   git switch master
   ```
2. Run the following command to start a local Internet Computer replica in the background:
   ```sh
   dfx start --background
   ```

### 3. Setup 

1. Install necessary dependencies:
   ```sh
   npm install
   ```


### 4. Deploy 

1. Deploy the canisters to the local Internet Computer replica:
   ```sh
   dfx deploy
   ```
3. (Optional) Generate necessary artifacts:
   ```sh
   dfx generate
   ```


### 6. Access the Application

After deploying the frontend canister, use the provided URL to access the application in your browser.


## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

