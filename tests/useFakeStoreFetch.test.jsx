import { renderHook, waitFor } from '@testing-library/react';
import { describe, test, expect, vi, beforeEach } from 'vitest';
import useFakeStoreFetch from '../src/hooks/useFakeStoreFetch';

//this line redefines fetch to be a mock function,
//  a common practice when testing. This particular 
//  version does not work with a fetch.then approach

const mockData = [
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
        json: () => Promise.resolve(mockData)
      })
    )
  });

  it('returns an array of length 2 with specified elements', () => {
    const { result } = renderHook(() => useFakeStoreFetch());
    expect(Array.isArray(result.current)).toBe(true);
  
    expect(result.current.length).toBe(2);

    expect(
      Array.isArray(result.current[0])) || result.current[0] === null;
    });

});