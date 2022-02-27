import { useState } from "react";

export const useLocalStorage = (key: string) => {
  const setLocalStorage = (value: any): void => {
    if (typeof window !== "undefined") {
      localStorage.setItem(key, JSON.stringify(value));
    }
    setStoredValue(value);
  };

  const [storedValue, setStoredValue] = useState(() => {
    let value;
    if (typeof window !== "undefined") {
      value = localStorage.getItem(key);
    }
    return value ? JSON.parse(value) : [];
  });

  return [storedValue, setLocalStorage];
};
