import axios from "axios";

export const getMilk = async () => {
  const result = await axios.get(
    "https://thenr1milkstore.netlify.app/.netlify/functions/api/milk"
  );
  return result.data.results;
};

export const getMilkById = async (milkid: string) => {
  const result = await axios.get(
    `https://thenr1milkstore.netlify.app/.netlify/functions/api/milk/${milkid}`
  );
  return result.data.milkProduct[0];
};
