"use client";
import React, { FC, useContext, useRef, useState } from "react";
import { CartContext } from "@/Context/context";
import { Milk } from "@/app/Types";
import "../app/css-group/input.css";

type SliderProps = {
  data: Milk;
};

export const Slider: FC<SliderProps> = ({ data }) => {
  const [range, setRange] = useState<number>(1);
  const [leftRange, setLeftRange] = useState<number>(1);
  const [message, setMessage] = useState<string>("");
  const [state, setState] = useContext(CartContext);

  const bar = useRef<HTMLInputElement>(null);
  const handle = useRef<HTMLOutputElement>(null);

  const changeRange = (event: any) => {
    const barWidth = bar.current!.offsetWidth;
    const handleWidth = handle.current!.offsetWidth;
    const rangeNumber = event.target.value;
    if (barWidth && handleWidth) {
      const position = ((barWidth - 24) / 100) * rangeNumber;
      const position2 = position - handleWidth / 4;

      setRange(rangeNumber);
      setLeftRange(position2);
    }
  };

  const addToCart = () => {
    if (range > data.storage) {
      setMessage("Sorry, not enough in storage");
      setTimeout(() => setMessage(""), 2500);
    } else {
      const CartIndex = state.findIndex((items: Milk) => items.id === data.id);
      if (CartIndex != -1) {
        if (
          data.storage <
          Number(range) + Number(state[CartIndex].orderquantity!)
        ) {
          setMessage("Sorry, not enough in storage");
          setTimeout(() => setMessage(""), 2500);
        } else {
          setState((prevState) => {
            const newArray = [...prevState];
            Object.assign(newArray[CartIndex], {
              orderquantity:
                Number(prevState[CartIndex].orderquantity)! + Number(range),
            });
            return newArray;
          });
        }
      } else {
        const newObject = Object.assign(data, { orderquantity: range });
        setState((previous) => [...previous, newObject]);
      }
    }
  };

  return (
    <>
      <div className="slider__container">
        <input
          className="slider"
          name="foo"
          type="range"
          min="1"
          max="100"
          ref={bar}
          value={range}
          step="1"
          onChange={changeRange}
        ></input>

        <output name="rangeVal" ref={handle} style={{ left: `${leftRange}px` }}>
          {range} liter
        </output>
      </div>
      <button className="productCard__button" onClick={addToCart}>
        Order {range}
      </button>
      {message.length > 0 && (
        <div className="productCard__errorcontainer">
          <div>{message}</div>
        </div>
      )}
    </>
  );
};
