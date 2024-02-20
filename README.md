
## Aureum


## Project Structure


1. `backend` - Contains the backend canister code for marketplace logic and user data management.
2. `frontend` - Houses the frontend code; serves as the asset canister for the project.

## Prerequisites

- Node.js (version 18 recommended)
- DFX (version 0.15.0 recommended)
- Internet access for downloading dependencies and deploying canisters.

## Local Development Setup

Follow these steps to set up the Aureum project locally:

### 1. Clone the Repository

Start by cloning the Aureum repository to your local machine.
 ```sh
git clone https://github.com/cynthiajep/my-app.git
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

