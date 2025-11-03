"use client";

import { useState } from "react";

export default function Home() {
  const [restaurants, setRestaurants] = useState<any[]>([]);
  const [showList, setShowList] = useState(false);

  const handleOrderNow = async () => {
    try {
      const res = await fetch("https://dosti-backend.onrender.com/restaurants");
      const data = await res.json();
      setRestaurants(data);
      setShowList(true);
    } catch (err) {
      console.error("Error fetching restaurants:", err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <header className="bg-green-600 text-white p-4 text-center text-2xl font-bold">
        🍴 DOSTI FOOD DELIVERY
      </header>

      <main className="p-6 text-center">
        <h1 className="text-3xl font-semibold mb-4">
          Welcome to DOSTI FOOD DELIVERY
        </h1>
        <p className="mb-6 text-lg">Order your favourite food now 🍕</p>

        <button
          onClick={handleOrderNow}
          className="bg-green-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-700"
        >
          Order Now
        </button>

        {showList && (
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Available Restaurants</h2>
            <ul className="space-y-3">
              {restaurants.map((r, i) => (
                <li
                  key={i}
                  className="bg-white shadow p-4 rounded-lg border border-gray-200"
                >
                  <h3 className="text-xl font-semibold">{r.name}</h3>
                  <p className="text-gray-600">{r.cuisine}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </main>
    </div>
  );
}

