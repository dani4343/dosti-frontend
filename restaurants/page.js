"use client";
import React from "react";

const restaurants = [
  { id: 1, name: "Spicy Biryani House", rating: 4.5, image: "https://source.unsplash.com/400x300/?biryani,food" },
  { id: 2, name: "Tandoori Flames", rating: 4.3, image: "https://source.unsplash.com/400x300/?tandoori,restaurant" },
  { id: 3, name: "Pizza Corner", rating: 4.6, image: "https://source.unsplash.com/400x300/?pizza,food" },
  { id: 4, name: "Burger Hub", rating: 4.2, image: "https://source.unsplash.com/400x300/?burger,fastfood" },
  { id: 5, name: "Kebab Junction", rating: 4.4, image: "https://source.unsplash.com/400x300/?kebab,grill" },
  { id: 6, name: "Dosa Express", rating: 4.1, image: "https://source.unsplash.com/400x300/?dosa,southindian" },
  { id: 7, name: "Chinese Bowl", rating: 4.3, image: "https://source.unsplash.com/400x300/?chinese,food" },
  { id: 8, name: "Ice Cream Villa", rating: 4.8, image: "https://source.unsplash.com/400x300/?icecream,dessert" },
  { id: 9, name: "Veggie Delight", rating: 4.0, image: "https://source.unsplash.com/400x300/?vegetarian,food" },
  { id: 10, name: "BBQ Nation", rating: 4.7, image: "https://source.unsplash.com/400x300/?bbq,grill" },
  { id: 11, name: "Andhra Spice", rating: 4.4, image: "https://source.unsplash.com/400x300/?andhra,food" },
  { id: 12, name: "Punjabi Tadka", rating: 4.3, image: "https://source.unsplash.com/400x300/?punjabi,food" },
  { id: 13, name: "Cafe Mocha", rating: 4.5, image: "https://source.unsplash.com/400x300/?coffee,cafe" },
  { id: 14, name: "Samosa Point", rating: 4.1, image: "https://source.unsplash.com/400x300/?samosa,snack" },
  { id: 15, name: "Street Treat", rating: 4.2, image: "https://source.unsplash.com/400x300/?street,food" },
];

export default function RestaurantsPage() {
  return (
    <div
      style={{
        padding: "25px",
        backgroundColor: "#f5f6fa",
        minHeight: "100vh",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#ff6347",
          marginBottom: "30px",
          fontSize: "2rem",
          fontWeight: "bold",
        }}
      >
        🍽️ Explore Popular Restaurants
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        {restaurants.map((r) => (
          <div
            key={r.id}
            style={{
              backgroundColor: "white",
              borderRadius: "20px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
              overflow: "hidden",
              transition: "transform 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.04)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <div style={{ overflow: "hidden" }}>
              <img
                src={r.image}
                alt={r.name}
                style={{
                  width: "100%",
                  height: "180px",
                  objectFit: "cover",
                  transition: "transform 0.3s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              />
            </div>

            <div style={{ padding: "15px", textAlign: "center" }}>
              <h3 style={{ marginBottom: "8px", color: "#333" }}>{r.name}</h3>
              <p style={{ color: "#666", marginBottom: "10px" }}>⭐ {r.rating} / 5</p>
              <button
                style={{
                  backgroundColor: "#ff6347",
                  color: "white",
                  border: "none",
                  padding: "8px 18px",
                  borderRadius: "25px",
                  cursor: "pointer",
                  fontWeight: "500",
                }}
              >
                View Menu 🍴
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

