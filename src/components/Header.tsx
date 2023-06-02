"use client";
import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { CartContext } from "@/Context/context";
import { Milk } from "@/app/Types";
import "../app/css-group/cart.css";
import "../app/css-group/dropdownsearch.css";

export const Header = () => {
  const [state, setState] = useContext(CartContext);
  const [open, setOpen] = useState(false);
  const [milkPrice, setMilkPrice] = useState<number>(0);

  const handleOpen = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (state.length > 0) {
      setOpen(true);
    }
    let milkCount: number[] = [];
    state.map((milk: Milk) => {
      milkCount.push(Number(milk.orderquantity));
    });
    console.log(milkCount);
    let total = milkCount.reduce((a, b) => {
      return a + b;
    }, 0);
    console.log(total);
    setMilkPrice(total * 17);
  }, [state]);

  const removeFromCart = (e: any) => {
    const id = e.target.value;
    const newCartArray = state.filter(
      (CartProduct: Milk) => CartProduct.id !== id
    );
    setState(newCartArray);
  };

  return (
    <header className="header__container">
      <div className="header__title">The Milk Store</div>

      {state.length > 0 && (
        <div className="cart__container">
          <button className="cart__topcontainer" onClick={handleOpen}>
            {" "}
            <div className="cart__number">
              <div>{state.length}</div>
            </div>
            <Image
              className="cart__image"
              src="/shoppingcart.png"
              alt=""
              width={150}
              height={150}
            />
          </button>
          {open ? (
            <div id="dropdown__container" className="cart__itemcontainer">
              <div className="dropdown__header">
                <p className="dropdown__itemtitle">Cart items</p>
                <button className="cart__cancelbutton" onClick={handleOpen}>
                  X
                </button>
              </div>

              {state &&
                state.map((data: Milk) => {
                  return (
                    <div className="cart__item" key={data.id}>
                      <Image
                        className="cart__itemimage"
                        src="/milk.png"
                        alt=""
                        width={150}
                        height={150}
                      />
                      <div>
                        <div>{data.name}</div>
                        <div className="cart__itemsubtitle">{data.type}</div>
                        <div className="cart__itemsubtitle">
                          Liter: x{data.orderquantity}
                        </div>
                      </div>
                      <button
                        className="cart__itembutton"
                        value={data.id}
                        onClick={removeFromCart}
                      >
                        Remove
                      </button>
                    </div>
                  );
                })}
              <div className="cart__totalnumber">Total: {milkPrice} kr</div>
              <button className="cart__checkoutbutton">Checkout</button>
            </div>
          ) : null}
        </div>
      )}
    </header>
  );
};
