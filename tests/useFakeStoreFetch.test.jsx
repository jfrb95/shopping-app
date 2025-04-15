import { renderHook, waitFor } from '@testing-library/react';
import { describe, test, expect, vi, beforeEach } from 'vitest';
import useFakeStoreFetch from '../src/hooks/useFakeStoreFetch';
import { useState } from 'react';

const [testState, setTestState] = useState(null);
const [testLoading, setTestLoading] = useState(true);
const [testError, setTestError] = useState(null);

const mockData = [
  {
    id: 1,
    title: "Wireless Bluetooth Earbuds",
    price: 59.99,
    description: "High-quality wireless earbuds with 20hr battery life and noise cancellation",
    category: "electronics",
    image: "https://example.com/images/earbuds.jpg"
  },
  {
    id: 2,
    title: "Organic Cotton T-Shirt",
    price: 24.99,
    description: "Comfortable 100% organic cotton t-shirt available in multiple colors",
    category: "clothing",
    image: "https://example.com/images/tshirt.jpg"
  },
  {
    id: 3,
    title: "Stainless Steel Water Bottle",
    price: 29.95,
    description: "Insulated 32oz bottle that keeps drinks cold for 24 hours",
    category: "home",
    image: "https://example.com/images/bottle.jpg"
  },
  {
    id: 4,
    title: "Professional Chef's Knife",
    price: 89.99,
    description: "8-inch high-carbon steel knife with ergonomic handle",
    category: "kitchen",
    image: "https://example.com/images/knife.jpg"
  },
  {
    id: 5,
    title: "Yoga Mat",
    price: 39.50,
    description: "Eco-friendly non-slip mat with carrying strap",
    category: "fitness",
    image: "https://example.com/images/yogamat.jpg"
  }
];

describe('useFakeStoreFetch', () => {

  beforeEach(() => {
    //This one would be used in the case where we simply
    //  set window.fetch = vi.fn();
    
    //fetch.mockReset();

    //This one is for use with the .then approach. Giving
    //  vi.fn() a callback for an argument makes it return
    //  the result of the callback
    window.fetch = vi.fn(() => 
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockData)
      })
    );

    setTestState(null);
    setTestLoading(true);
    setTestError(null);
  });



});