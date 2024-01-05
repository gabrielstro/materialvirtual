import React from 'react';

function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-5xl font-bold mb-4">Product Name</h1>
      <p className="text-lg text-gray-700 mb-4">This is a great product that you should definitely buy.</p>
      <img className="h-64 w-64 object-cover rounded mb-4" src="path_to_your_product_image.jpg" alt="Product image" />
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Buy Now
      </button>
    </div>
  );
}

export default LandingPage;