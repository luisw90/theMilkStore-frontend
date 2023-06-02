import { getMilkById } from "@/utils/apiCall";
import { Milk } from "@/app/Types";
import Image from "next/image";
import Link from "next/link";
import { Slider } from "@/components/Slider";
import "../../css-group/productpage.css";

type Props = {
  params: { id: string };
};

const Product = async ({ params }: Props) => {
  const id = params.id;
  const data: Milk = await getMilkById(id);

  return (
    <article className="product__container">
      <Link
        className="goback__container"
        href={"https://themilkstore.vercel.app/"}
      >
        <button className="goback__button">&#60; Back</button>
      </Link>
      <div className="productCard__container">
        <div className="productCard__imagecontainer">
          <Image
            className="productCard__image"
            src={"/milk.png"}
            alt=""
            width={150}
            height={150}
          />
        </div>
        <div className="productCard__infocontainer">
          <div>
            <h2 className="productCard__title">{data.name}</h2>
            <h3 className="productCard__subtitle">{data.type}</h3>
            <h3 className="productCard__subtitle">{data.storage} liter</h3>
          </div>
          <Slider data={data} />
        </div>
      </div>
    </article>
  );
};

export default Product;
