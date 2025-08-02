import React, { useEffect, useState } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);

  // Form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState("");

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];

    const normalizedCart = savedCart.map((item) => ({
      ...item,
      quantity: item.quantity || 1,
      image:
        item.image ||
        item.image1 ||
        "https://dummyimage.com/150x150/cccccc/ffffff&text=No+Image",
    }));

    setCartItems(normalizedCart);
    localStorage.setItem("cart", JSON.stringify(normalizedCart));
  }, []);

  const updateCart = (updatedItems) => {
    setCartItems(updatedItems);
    localStorage.setItem("cart", JSON.stringify(updatedItems));
  };

  const increaseQuantity = (index) => {
    const updatedItems = [...cartItems];
    updatedItems[index].quantity += 1;
    updateCart(updatedItems);
  };

  const decreaseQuantity = (index) => {
    const updatedItems = [...cartItems];
    if (updatedItems[index].quantity > 1) {
      updatedItems[index].quantity -= 1;
      updateCart(updatedItems);
    }
  };

  const removeItem = (index) => {
    const updatedItems = [...cartItems];
    updatedItems.splice(index, 1);
    updateCart(updatedItems);
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + (item.price || 0) * item.quantity,
    0
  );

  const handleCheckoutClick = () => {
    setShowCheckoutForm(true);
    setFormSubmitted(false);
    setFormError("");
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !address.trim()) {
      setFormError("Please fill in all fields.");
      return;
    }

    // Simple email validation
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      setFormError("Please enter a valid email address.");
      return;
    }

    setFormError("");
    setFormSubmitted(true);

    // Clear cart and form (optional, depends on your flow)
    localStorage.removeItem("cart");
    setCartItems([]);
    setName("");
    setEmail("");
    setAddress("");
  };

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-6">
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row items-center border rounded-lg p-4 shadow-sm gap-4"
              >
                {/* Product Image */}
                <img
                  src={item.image}
                  alt={item.title || "Product"}
                  className="w-full max-w-[150px] h-32 object-contain rounded"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://dummyimage.com/150x150/cccccc/ffffff&text=No+Image";
                  }}
                />

                {/* Product Details */}
                <div className="flex-1 w-full">
                  <h3 className="text-lg sm:text-xl font-semibold">
                    {item.title || "Untitled"}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 mt-1">
                    Size: {item.size || "N/A"}
                  </p>
                  <p className="text-green-600 font-bold mt-2 text-lg sm:text-xl">
                    ₹{item.price || 0}
                  </p>

                  {/* Quantity + Remove Controls */}
                  <div className="flex items-center mt-4 space-x-3">
                    <button
                      onClick={() => decreaseQuantity(index)}
                      className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded text-lg sm:text-xl select-none"
                      aria-label="Decrease quantity"
                    >
                      -
                    </button>
                    <span className="min-w-[30px] text-center text-lg sm:text-xl">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => increaseQuantity(index)}
                      className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded text-lg sm:text-xl select-none"
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeItem(index)}
                      className="ml-6 text-red-600 hover:underline text-base sm:text-lg"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Total Price */}
          <div className="mt-6 text-right text-xl font-semibold">
            Total: ₹{totalPrice}
          </div>

          {/* Proceed to Checkout Button */}
          {!showCheckoutForm && (
            <div className="mt-6 flex justify-center">
              <button
                onClick={handleCheckoutClick}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded text-lg sm:text-xl transition"
              >
                Proceed to Checkout
              </button>
            </div>
          )}
        </>
      )}

      {/* Checkout Form */}
      {showCheckoutForm && cartItems.length > 0 && (
        <form
          onSubmit={handleFormSubmit}
          className="mt-10 max-w-md mx-auto bg-gray-50 p-6 rounded shadow-md"
        >
          <h3 className="text-2xl font-semibold mb-6 text-center">
            Checkout Details
          </h3>

          {formError && (
            <p className="text-red-600 mb-4 text-center font-medium">{formError}</p>
          )}

          {formSubmitted ? (
            <p className="text-green-700 font-semibold text-center text-lg">
              Thank you for your purchase, {name}! We will process your order
              shortly.
            </p>
          ) : (
            <>
              <label className="block mb-3">
                <span className="block text-gray-700 mb-1 font-medium">Name</span>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                  placeholder="Your full name"
                />
              </label>

              <label className="block mb-3">
                <span className="block text-gray-700 mb-1 font-medium">Email</span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                  placeholder="you@example.com"
                />
              </label>

              <label className="block mb-5">
                <span className="block text-gray-700 mb-1 font-medium">Shipping Address</span>
                <textarea
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  rows={4}
                  className="w-full p-3 border rounded resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                  placeholder="Your full address"
                />
              </label>

              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded text-lg font-semibold transition"
              >
                Submit Order
              </button>
            </>
          )}
        </form>
      )}
    </div>
  );
};

export default Cart;
