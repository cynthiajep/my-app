// import React from 'react';
// import './CSS/SellerSignup.css';

// const SellerSignup = () => {
//   return (
//     <div className='seller-registration'>
//       <div className="seller-registration-container">
//         <h1>SELLER REGISTRATION</h1>
//         <div className="seller-registration-fields">
//           <input type="text" placeholder='Company Name'/>
//           <input type="text" placeholder='Contact Person Name'/>
//           <input type="email" placeholder='Email Address'/>
//           <input type="password" placeholder='Password'/>
//         </div>
//         <button>Create Seller Account</button>
//         <p className="seller-registration-login">Already a seller? <span>Login</span></p>
//         <div className="seller-registration-agree">
//           <input type="checkbox" name='' id=''/>
//           <p>By registering, I agree to the terms and conditions for sellers.</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SellerSignup;





// import React, { useState } from 'react';
// import './CSS/SellerSignup.css';
// import { Principal } from "@dfinity/principal";
// import { registerShop, getShopDetails } from './marketplace'; // Assuming getShopDetails is also exported from './marketplace'

// const SellerSignup = () => {
//   // State for shop registration
//   const [name, setName] = useState('');
//   const [description, setDescription] = useState('');
//   const [termsAgreed, setTermsAgreed] = useState(false);

//   // State for fetching and displaying shop details
//   const [shopDetails, setShopDetails] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     if (!termsAgreed) {
//       alert("You must agree to the terms and conditions to register.");
//       return;
//     }

//     const shopId = `shop_${Date.now()}`;
//     console.log(`details: ${shopId}`)
//     const ownerPrincipal = Principal.fromText(window.auth.principalText);

//     setLoading(true); // Start loading
//     try {
//       await registerShop(ownerPrincipal, shopId, name, description);
//       alert("Shop registered successfully!");

//       // Fetch and display shop details after successful registration
//       const details = await getShopDetails(shopId);
//       console.log(details)
//       setShopDetails(details); // Update state with fetched shop details
//     } catch (error) {
//       console.error("Error registering shop:", error);
//       alert("Failed to register shop. Please try again.");
//     } finally {
//       setLoading(false); // End loading
//     }
//   };


//   return (
//     <div className="seller-registration">
//       <form className="seller-registration-container" onSubmit={handleSubmit}>
//         <h1>SELLER REGISTRATION</h1>
//         <div className="seller-registration-fields">
//           <input
//             type="text"
//             placeholder="Shop Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//           <input
//             type="text"
//             placeholder="Shop Description"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//           />
//           {/* Assuming Email and Password are part of user profile registration and not shown here */}
//         </div>
//         <div className="seller-registration-agree">
//           <input
//             type="checkbox"
//             checked={termsAgreed}
//             onChange={(e) => setTermsAgreed(e.target.checked)}
//           />
//           <p>By registering, I agree to the terms and conditions for sellers.</p>
//         </div>
//         <button type="submit" disabled={loading}>Create Seller Account</button>
//         <p className="seller-registration-login">
//           Already a seller? <span>Login</span>
//         </p>
//       </form>
  
//       {loading && <p>Loading...</p>}
//       {shopDetails && (
//         <div className="shop-details">
//           <h2>Shop Details</h2>
//           <p><strong>Name:</strong> {shopDetails.name}</p>
//           <p><strong>Description:</strong> {shopDetails.description}</p>
//           {/* Display more shop details as needed */}
//         </div>
//       )}
//     </div>
//   );
  
// }

// export default SellerSignup;



import React, { useState } from 'react';
import './CSS/SellerSignup.css';
import { Principal } from "@dfinity/principal";
import { registerShop, getShopDetails, addProductToShop } from './marketplace';

const SellerSignup = () => {
  // State for shop registration
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [termsAgreed, setTermsAgreed] = useState(false);

  // State for adding products
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productPrice, setProductPrice] = useState('');

  // State for fetching and displaying shop details
  const [shopDetails, setShopDetails] = useState(null);
  const [loading, setLoading] = useState(false);

  // Newly added state to keep track of the registered shopId
  const [registeredShopId, setRegisteredShopId] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!termsAgreed) {
      alert("You must agree to the terms and conditions to register.");
      return;
    }

    const shopId = `shop_${Date.now()}`;
    const ownerPrincipal = Principal.fromText(window.auth.principalText);

    setLoading(true); // Start loading
    try {
      const response = await registerShop(ownerPrincipal, shopId, name, description);
      console.log(response); // Log or handle response
      alert("Shop registered successfully!");
      setRegisteredShopId(shopId); // Save the registered shopId for product addition

      // Fetch and display shop details after successful registration
      const details = await getShopDetails(shopId);
      setShopDetails(details[0]); // Assuming details is the first element in the array
    } catch (error) {
      console.error("Error registering shop:", error);
      alert("Failed to register shop. Please try again.");
    } finally {
      setLoading(false); // End loading
    }
  };

  // Function to handle product addition
  // const handleAddProduct = async (event) => {
  //   event.preventDefault();
  //   setLoading(true);
  //   try {
  //     await addProductToShop(registeredShopId, {
  //       name: productName, 
  //       description: productDescription, 
  //       price: productPrice,
  //       inStock: true // Assuming inStock is required, adjust as necessary
  //     });
  //     alert("Product added successfully!");


  //     // Optionally, fetch and update shop details to include the new product
  //     const details = await getShopDetails(registeredShopId);
  //     setShopDetails(details[0]); // Update with the new shop details
  //   } catch (error) {
  //     console.error("Error adding product:", error);
  //     alert("Failed to add product. Please try again.");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // Function to handle product addition
const handleAddProduct = async (event) => {
  event.preventDefault();
  setLoading(true);
  try {
    // Generate a unique productId, here using Date.now() for simplicity
    const productId = `product_${Date.now()}`;

    await addProductToShop(registeredShopId, {
      productId, // Include this productId in the product details
      name: productName, 
      description: productDescription, 
      price: productPrice,
      inStock: true // Assuming inStock is required, adjust as necessary
    });
    alert("Product added successfully!");

    // Optionally, fetch and update shop details to include the new product
    const details = await getShopDetails(registeredShopId);
    setShopDetails(details[0]); // Update with the new shop details
  } catch (error) {
    console.error("Error adding product:", error);
    alert("Failed to add product. Please try again.");
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="seller-registration">
      <form className="seller-registration-container" onSubmit={handleSubmit}>
        <h1>SELLER REGISTRATION</h1>
        <div className="seller-registration-fields">
          <input
            type="text"
            placeholder="Shop Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Shop Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="seller-registration-agree">
          <input
            type="checkbox"
            checked={termsAgreed}
            onChange={(e) => setTermsAgreed(e.target.checked)}
          />
          <p>By registering, I agree to the terms and conditions for sellers.</p>
        </div>
        <button type="submit" disabled={loading}>Create Seller Account</button>
      </form>

      <form className="product-addition-form" onSubmit={handleAddProduct}>
        <h2>Add Product</h2>
        <input
          type="text"
          placeholder="Product Name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Product Description"
          value={productDescription}
          onChange={(e) => setProductDescription(e.target.value)}
        />
        <input
          type="text"
          placeholder="Product Price"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
        />
        <button type="submit" disabled={loading || !registeredShopId}>Add Product</button>
      </form>

      {loading && <p>Loading...</p>}
      {shopDetails && (
        <div className="shop-details">
          <h2>Shop Details</h2>
          <p><strong>Name:</strong> {shopDetails.name}</p>
          <p><strong>Description:</strong> {shopDetails.description}</p>
          {/* Display more shop details as needed */}
        </div>
      )}
    </div>
  );
}

export default SellerSignup;
