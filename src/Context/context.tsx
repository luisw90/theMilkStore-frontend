"use client";
import React, { PropsWithChildren, useState, createContext } from "react";
import { Milk } from "@/app/Types";

type ICartContext = [Milk[], React.Dispatch<React.SetStateAction<Milk[]>>];
export const CartContext = createContext<ICartContext>([[], () => null]);

export const CartContextProvider = (props: PropsWithChildren) => {
  const [state, setState] = useState<Milk[]>([]);
  return (
    <CartContext.Provider value={[state, setState]}>
      {props.children}
    </CartContext.Provider>
  );
};
