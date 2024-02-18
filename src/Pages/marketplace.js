// import { Principal } from "@dfinity/principal";

// export async function createProduct(product) {
//     return window.canister.marketplace.registerShop(product);
// }

// export async function getProducts() {
//     try {
//         return await window.canister.marketplace.getProducts();
//     } catch (err) {
//         if (err.name === "AgentHTTPResponseError") {
//             const authClient = window.auth.client;
//             await authClient.logout();
//         }
//         return [];
//     }
// }


import { Principal } from "@dfinity/principal";

// Assuming the existence of `window.canister` which holds our canister methods

// Register or update a shop
export async function registerShop(owner, shopId, name, description) {
    try {
        // Ensure owner is converted to Principal if passed as a string
        const ownerPrincipal = typeof owner === 'string' ? Principal.fromText(owner) : owner;
        const response = await window.canister.marketplace.registerShop(ownerPrincipal, shopId, name, description);
        return response;
    } catch (err) {
        console.error('Error registering shop:', err);
        throw err;
    }
}

// Add a product to a specific shop
export async function addProductToShop(shopId, product) {
    try {
        const response = await window.canister.marketplace.addProductToShop(shopId, product);
        return response;
    } catch (err) {
        console.error('Error adding product to shop:', err);
        throw err;
    }
}

// Fetch products from a specific shop
export async function fetchProducts(shopId) {
    try {
        const products = await window.canister.marketplace.getProducts(shopId);
        return products;
    } catch (err) {
        console.error('Error fetching products:', err);
        if (err.name === "AgentHTTPResponseError") {
            const authClient = window.authClient;
            await authClient.logout();
        }
        return [];
    }
}

// Fetch shop details including products
export async function getShopDetails(shopId) {
    try {
        const shopDetails = await window.canister.marketplace.getShopDetails(shopId);
        return shopDetails;
    } catch (err) {
        console.error('Error fetching shop details:', err);
        throw err;
    }
}
