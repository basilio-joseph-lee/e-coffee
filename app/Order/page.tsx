"use client";

import { useState } from "react";

export default function OrderPage() {
  const [cart, setCart] = useState<any[]>([]);
  const [category, setCategory] = useState("All");
  const [step, setStep] = useState<"cart" | "payment" | "receipt">("cart");

  const [payment, setPayment] = useState({
    name: "",
    card: "",
    expiry: "",
    cvv: "",
  });

  const [receipt, setReceipt] = useState<any>(null);

  const menu = [
    {
      id: 1,
      name: "Caramel Latte",
      price: 3.99,
      category: "Coffee",
      image: "https://i.pinimg.com/736x/f0/65/5f/f0655f2737da76be9b4ac435c65e3d9b.jpg",
    },
    {
      id: 2,
      name: "Cappuccino",
      price: 3.5,
      category: "Coffee",
      image: "https://i.pinimg.com/1200x/f8/56/d2/f856d2d30045e34f7a3d7438d81c5141.jpg",
    },
    {
      id: 3,
      name: "Espresso",
      price: 2.5,
      category: "Coffee",
      image: "https://i.pinimg.com/1200x/2f/53/13/2f53139ff4cb36a33ff4a9582b5be6a9.jpg",
    },
    {
      id: 4,
      name: "Mocha",
      price: 4.2,
      category: "Coffee",
      image: "https://i.pinimg.com/1200x/74/f3/6f/74f36f2ca43d24d39c4ce5ebeff34249.jpg",
    },
    {
      id: 5,
      name: "Sandwich",
      price: 2.99,
      category: "Snacks",
      image: "https://i.pinimg.com/736x/1c/2a/8f/1c2a8f3d2c7a1d4c5c8b0c1a0a9d9a2c.jpg",
    },
    {
      id: 6,
      name: "Donut",
      price: 1.5,
      category: "Snacks",
      image: "https://i.pinimg.com/736x/3a/9d/5c/3a9d5c9c8c7d8e8a9b1c2d3e4f5a6b7c.jpg",
    },
  ];

  const filteredMenu = category === "All" ? menu : menu.filter(i => i.category === category);

  const addToCart = (item: any) => {
    const existing = cart.find((c) => c.id === item.id);
    if (existing) {
      setCart(cart.map((c) => c.id === item.id ? { ...c, qty: c.qty + 1 } : c));
    } else {
      setCart([...cart, { ...item, qty: 1 }]);
    }
  };

  const increase = (id: number) => setCart(cart.map(c => c.id === id ? { ...c, qty: c.qty + 1 } : c));

  const decrease = (id: number) => setCart(cart.map(c => c.id === id ? { ...c, qty: c.qty - 1 } : c).filter(c => c.qty > 0));

  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

  const getCardType = (number: string) => {
    if (number.startsWith("4")) return "visa";
    if (number.startsWith("5")) return "mastercard";
    return "unknown";
  };

  const placeOrder = () => {
    const order = {
      id: Math.floor(Math.random() * 1000000),
      items: cart,
      total,
    };
    setReceipt(order);
    setStep("receipt");
    setCart([]);
  };

  const cardType = getCardType(payment.card);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-900 via-amber-800 to-amber-950 text-white">

      {/* HEADER */}
      <div className="flex justify-between items-center px-10 py-6 border-b border-white/10">
        <h1 className="text-2xl font-extrabold">BrewNest</h1>
        <a href="/" className="text-sm border px-4 py-2 rounded-lg hover:bg-white hover:text-amber-900 transition">Back Home</a>
      </div>

      {/* CATEGORY */}
      <div className="flex gap-3 px-10 pt-6">
        {["All", "Coffee", "Snacks"].map(cat => (
          <button key={cat} onClick={() => setCategory(cat)} className={`px-4 py-2 rounded-lg text-sm border ${category === cat ? "bg-white text-amber-900" : "border-white/30"}`}>{cat}</button>
        ))}
      </div>

      {/* CONTENT */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 p-10">

        {/* MENU */}
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-bold mb-6">Order Items</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {filteredMenu.map(item => (
              <div key={item.id} className="bg-white/10 rounded-2xl p-4 flex justify-between gap-4">
                <div>
                  <p className="font-bold">{item.name}</p>
                  <p className="text-sm text-white/70">${item.price}</p>
                  <button onClick={() => addToCart(item)} className="text-xs bg-white text-amber-900 px-3 py-1 rounded-lg mt-2">Add</button>
                </div>
                <img src={item.image} className="w-20 h-20 object-cover rounded-lg" />
              </div>
            ))}
          </div>
        </div>

        {/* CART */}
        <div className="bg-white/10 rounded-2xl p-6 h-fit sticky top-10">
          <h2 className="text-xl font-bold mb-4">Your Order</h2>

          {cart.length === 0 ? (
            <p className="text-sm text-white/60">No items yet</p>
          ) : (
            <div className="flex flex-col gap-4">
              {cart.map(item => (
                <div key={item.id} className="flex justify-between items-center text-sm">
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-xs text-white/60">${item.price}</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <button onClick={() => decrease(item.id)} className="px-2 bg-white text-amber-900 rounded">-</button>
                    <span>{item.qty}</span>
                    <button onClick={() => increase(item.id)} className="px-2 bg-white text-amber-900 rounded">+</button>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="mt-6 flex justify-between border-t border-white/20 pt-4 font-bold">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>

          <button disabled={cart.length === 0} onClick={() => setStep("payment")} className={`w-full mt-5 py-3 rounded-xl font-semibold transition ${cart.length === 0 ? "bg-gray-500" : "bg-white text-amber-900 hover:bg-amber-200"}`}>Checkout</button>
        </div>
      </div>

      {/* PAYMENT MODAL */}
      {step === "payment" && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4">
          <div className="w-full max-w-md bg-white text-black rounded-2xl shadow-2xl overflow-hidden">

            <div className="bg-amber-900 text-white p-5">
              <h2 className="text-lg font-bold">Secure Checkout</h2>
              <p className="text-xs opacity-80">Enter payment details</p>
            </div>

            <div className="p-5 space-y-3">

              {/* CARD ANIMATION AREA */}
              <div className="flex items-center justify-between bg-gray-100 p-3 rounded-lg">
                <span className="text-sm font-semibold">Card Type</span>

                <div className="flex items-center gap-2 transition-all duration-300">
                  {cardType === "visa" && (
                    <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs animate-pulse">VISA</span>
                  )}
                  {cardType === "mastercard" && (
                    <span className="bg-red-500 text-white px-2 py-1 rounded text-xs animate-pulse">MC</span>
                  )}
                  {cardType === "unknown" && (
                    <span className="bg-gray-400 text-white px-2 py-1 rounded text-xs">CARD</span>
                  )}
                </div>
              </div>

              <input placeholder="Full Name" className="w-full border p-2 rounded" onChange={e => setPayment({ ...payment, name: e.target.value })} />
              <input placeholder="Card Number" className="w-full border p-2 rounded" onChange={e => setPayment({ ...payment, card: e.target.value })} />

              <div className="flex gap-2">
                <input placeholder="MM/YY" className="w-1/2 border p-2 rounded" />
                <input placeholder="CVV" className="w-1/2 border p-2 rounded" />
              </div>

              <div className="bg-gray-100 p-3 rounded text-sm">
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <div className="p-5 border-t flex gap-3">
              <button onClick={() => setStep("cart")} className="w-1/2 py-2 rounded bg-gray-200">Cancel</button>
              <button onClick={placeOrder} className="w-1/2 py-2 rounded bg-amber-900 text-white">Pay Now</button>
            </div>
          </div>
        </div>
      )}

      {/* RECEIPT */}
      {step === "receipt" && receipt && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
          <div className="bg-white text-black p-6 rounded-xl w-96">
            <h2 className="font-bold mb-2">Receipt</h2>
            <p className="text-sm mb-2">Order ID: {receipt.id}</p>

            <div className="text-sm mb-3">
              {receipt.items.map(i => (
                <div key={i.id} className="flex justify-between">
                  <span>{i.name} x{i.qty}</span>
                  <span>${(i.price * i.qty).toFixed(2)}</span>
                </div>
              ))}
            </div>

            <div className="font-bold border-t pt-2 flex justify-between">
              <span>Total</span>
              <span>${receipt.total.toFixed(2)}</span>
            </div>

            <button onClick={() => setStep("cart")} className="w-full mt-4 bg-amber-900 text-white py-2 rounded">Done</button>
          </div>
        </div>
      )}

    </div>
  );
}
