import axios, { Axios } from "axios";

const foodService = axios.create({
  baseURL: "https://food-boutique.b.goit.study/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

export async function getProducts() {
  const result = await foodService.get("/products");
  console.log(result);
  return result;
}

export async function getPopular() {
  const result = await foodService.get("/products/popular");
  console.log(result);
  return result;
}

export async function getDiscount() {
  const result = await foodService.get("/products/discount");
  console.log(result);
  return result;
}
