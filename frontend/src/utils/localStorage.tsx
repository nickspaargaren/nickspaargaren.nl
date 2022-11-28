import { useState } from "react";

export const useLocalStorage = (key: string) => {
	const setStateAndLocalStorage = (value: any): void => {
		typeof window !== "undefined" &&
			localStorage.setItem(key, JSON.stringify(value));

		setState(value);
	};

	const [state, setState] = useState(() => {
		const value =
			typeof window !== "undefined" ? localStorage.getItem(key) : null;

		return value ? JSON.parse(value) : [];
	});

	return [state, setStateAndLocalStorage];
};
