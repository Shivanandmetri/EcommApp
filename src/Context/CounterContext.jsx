import { createContext, useState } from "react";

export const CounterContext = createContext();

export function CounterProvider({ children }) {
  const [counter, setcounter] = useState(0);
  return (
    <CounterContext.Provider
      value={{
        counter,
        setcounter,
      }}
    >
      {children}
    </CounterContext.Provider>
  );
}
