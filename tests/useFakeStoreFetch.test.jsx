import { renderHook, waitFor } from '@testing-library/react';
import { describe, test, expect, vi, beforeEach } from 'vitest';
import useFakeStoreFetch from '../src/hooks/useFakeStoreFetch';

//this line redefines fetch to be a mock function,
//  a common practice when testing. This particular 
//  version does not work with a fetch.then approach
//window.fetch = vi.fn();

const mockProducts = [
  { id: 1, title: 'Product 1', price: 10 },
  { id: 2, title: 'Product 2', price: 20 },
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
        json: () => Promise.resolve(mockProducts)
      })
  )
  });

  test('fetches and stores data successfully', () => {
    //mockResolvedValueOnce stores the given argument,
    //  and makes fetch resolve to that argument the next 
    //  time fetch is called
    fetch.mockResolvedValueOnce({
      //we want response.ok to be true, and json is used
      //  to give a json of products
      ok: true,
      json: () => Promise.resolve(mockProducts),
    });
  });

  //this is how you render a hook to test it:
  const { result } = renderHook(() => useFakeStoreFetch('https://fakestoreapi.com/products'));

  console.log(result.current);

  //the tests:
  expect(result.current.loading).toBe(true);
  

});