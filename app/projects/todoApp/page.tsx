"use client";

import React, { useState } from 'react';

type TodoItem = {
  id: number;
  text: string;
  completed: boolean;
};

const TodoList = () => {
  const [todo, setTodo] = useState<TodoItem[]>([]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    if (!inputValue.trim()) return;
    setTodo([
      ...todo,
      {
        id: Date.now(),
        text: inputValue,
        completed: false,
      },
    ]);
    setInputValue('');
  };

  const toggleTodo = (id: number) => {
    setTodo((currentTodo) =>
      currentTodo.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const incompleteTodos = todo.filter((t) => !t.completed).length;

  const deleteItem = (id: number) => {
    setTodo((currentTodo) => currentTodo.filter((todo) => todo.id !== id));
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-pink-400 via-purple-400 to-blue-400 flex flex-col items-center p-6">
      <section className="w-full max-w-3xl py-16 px-6 animate-fade-in">
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-pink-500 to-blue-500 text-center mb-12">
          ✅ Todo List
        </h2>

        {/* Input Section */}
        <div className="flex gap-4 mb-6">
          <input
            type="text"
            data-testid="todo-input"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Add new todo..."
            className="flex-1 px-4 py-2 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <button
            data-testid="add-button"
            onClick={addTodo}
            disabled={inputValue.trim() === ''}
            className="bg-pink-500 text-white px-4 py-2 rounded-2xl hover:bg-pink-600 disabled:bg-pink-300 transition"
          >
            Add Todo
          </button>
        </div>

        {/* Todo Count */}
        <div
          data-testid="todo-count"
          className="text-white font-semibold mb-4"
        >
          {incompleteTodos} items remaining
        </div>

        {/* Todo Items */}
        <div className="flex flex-col gap-4">
          {todo.map((item) => (
            <div
              key={item.id}
              className="bg-white bg-opacity-80 rounded-3xl p-4 flex items-center justify-between shadow-2xl hover:shadow-3xl transition"
            >
              <div className="flex items-center gap-4">
                <input
                  type="checkbox"
                  checked={item.completed}
                  onChange={() => toggleTodo(item.id)}
                  data-testid={`todo-checkbox-${item.id}`}
                  className="w-5 h-5 accent-pink-500"
                />
                <span
                  className={`${
                    item.completed ? 'line-through text-gray-400' : ''
                  }`}
                >
                  {item.text}
                </span>
              </div>
              <button
                onClick={() => deleteItem(item.id)}
                data-testid={`todo-delete-${item.id}`}
                className="bg-red-500 text-white px-3 py-1 rounded-xl hover:bg-red-600 transition"
              >
                Delete
              </button>
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
};

export default TodoList;
