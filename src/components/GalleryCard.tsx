import React, { FC } from "react";
import { Milk } from "@/app/Types";
import Link from "next/link";
import "../app/css-group/gallerycard.css";

type GalleryCardProps = {
  milkProduct: Milk;
};
export const GalleryCard: FC<GalleryCardProps> = ({ milkProduct }) => {
  return (
    <Link
      key={milkProduct.id}
      href={`/Product/${milkProduct.id}`}
      className="link"
    >
      <article className="card__container">
        <div className="card__imagecontainer">
          <img className="card__image" src="milk.png" alt="" />
        </div>
        <div className="cardinfo__container">
          <h3 className="cardinfo__title">{milkProduct.name}</h3>
          <div className="cardinfo__typecontainer">
            <h3 className="cardinfo__type">{milkProduct.type}</h3>
            <h3 className="cardinfo__liter">{milkProduct.storage} liter</h3>
          </div>
        </div>
      </article>
    </Link>
  );
};
