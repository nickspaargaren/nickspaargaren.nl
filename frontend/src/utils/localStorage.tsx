import { useState } from "react";
import { ZodSchema } from "zod";

/**
 * Hook to manage state synchronized with localStorage.
 *
 * @template T
 * @param {string} key - The key under which the value is stored in localStorage.
 * @param {ZodSchema<T>} schema - A Zod schema to validate the data.
 * @param {T} defaultValue - The default value to use if no value is found in localStorage or if the value is invalid.
 *
 * @example
 * import { z } from "zod";
 *
 * const schema = z.object({
 *   name: z.string(),
 *   age: z.number(),
 * });
 *
 * type schemaType = z.infer<typeof schema>;
 *
 * export const Test = () => {
 *   const [user, setUser] = useLocalStorage<schemaType>("user", schema, {
 *     name: "John Doe",
 *     age: 30,
 *   });
 *
 *   return (
 *     <div>
 *       <p>Name: {user.name}</p>
 *       <p>Age: {user.age}</p>
 *       <button onClick={() => setUser({ name: "Jane Doe", age: 25 })}>
 *         Update User
 *       </button>
 *     </div>
 *   );
 * };
 */
export const useLocalStorage = <T,>(
  key: string,
  schema: ZodSchema<T>,
  defaultValue: T,
): [T, (value: T) => void] => {
  const setStateAndLocalStorage = (value: T): void => {
    typeof window !== "undefined" &&
      localStorage.setItem(key, JSON.stringify(value));

    setState(value);
  };

  const [state, setState] = useState<T>(() => {
    if (typeof window !== "undefined") {
      const value = localStorage.getItem(key);
      if (value) {
        try {
          const validated = schema.parse(JSON.parse(value));
          return validated;
        } catch (error) {
          console.error("Invalid data in localStorage:", error);
          localStorage.setItem(key, JSON.stringify(defaultValue));
          return defaultValue;
        }
      }
    }
    return defaultValue;
  });

  return [state, setStateAndLocalStorage];
};
