"use client";

import React, { useState } from "react";
import Image from "next/image";

const initialItems = [
   { id: 1, name: "T-Shirt", quantity: 0, image: "https://img.freepik.com/free-psd/psd-isolated-pack-black-tshirts-front-view_1409-3405.jpg?semt=ais_hybrid&w=740&q=80" },
  { id: 2, name: "Jeans", quantity: 0, image: "https://via.placeholder.com/150?text=Jeans" },
  { id: 3, name: "Shoes", quantity: 0, image: "https://via.placeholder.com/150?text=Shoes" },
];

export default function CartApp() {
  const [items, setItems] = useState(initialItems);

  const addItems = (itemId: number) => {
    setItems((currentItems) =>
      currentItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const removeItems = (itemId: number) => {
    setItems((currentItems) =>
      currentItems.map((item) =>
        item.id === itemId
          ? { ...item, quantity: Math.max(item.quantity - 1, 0) }
          : item
      )
    );
  };

  const totalItems = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="min-h-screen bg-linear-to-br from-pink-400 via-purple-400 to-blue-400 flex flex-col items-center p-6">
      <section className="w-full max-w-3xl py-16 px-6 animate-fade-in">
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-pink-500 to-blue-500 text-center mb-12">
          🛒 Shopping Cart
        </h2>

        {/* Total Items */}
        <div
          data-testid="total"
          className="text-white font-semibold text-xl mb-6 text-center"
        >
          Total Items: {totalItems}
        </div>

        {/* Items List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              data-testid={`item-${item.id}`}
              className="bg-white bg-opacity-80 rounded-3xl p-6 shadow-2xl flex flex-col items-center gap-4 hover:scale-105 transition-transform hover:shadow-3xl"
            >
              <Image
                src={item.image}
                alt={item.name}
                className="w-32 h-32 object-cover rounded-xl"
                width={228}
                height={228}
              />
              <h3 className="text-xl font-bold">{item.name}</h3>
              <span className="text-gray-700">Quantity: {item.quantity}</span>
              <div className="flex gap-4">
                <button
                  data-testid={`remove-${item.id}`}
                  onClick={() => removeItems(item.id)}
                  disabled={item.quantity === 0}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 disabled:bg-red-300 transition"
                >
                  -
                </button>
                <button
                  data-testid={`add-${item.id}`}
                  onClick={() => addItems(item.id)}
                  className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition"
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tailwind-friendly fade-in animation */}
      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 1.2s ease forwards;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
