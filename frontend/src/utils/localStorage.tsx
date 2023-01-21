import { useState } from "react";

export const useLocalStorage = <T,>(key: string): [T, (value: T) => void] => {
  const setStateAndLocalStorage = (value: T): void => {
    typeof window !== "undefined" &&
      localStorage.setItem(key, JSON.stringify(value));

    setState(value);
  };

  const [state, setState] = useState<T>(() => {
    const value =
      typeof window !== "undefined" ? localStorage.getItem(key) : null;

    return value ? JSON.parse(value) : [];
  });

  return [state, setStateAndLocalStorage];
};
