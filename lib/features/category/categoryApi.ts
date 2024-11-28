import { ICategory } from "@/type/type";
import axios from "axios";

export const getCategoriesApi = async () => {
  const { data } = await axios.get(
    "https://api.escuelajs.co/api/v1/categories"
  );
  return data;
};

export const getCategoryByIdApi = async (id: number) => {
  const { data } = await axios.get(
    "https://api.escuelajs.co/api/v1/categories/" + id
  );
  return data;
};

export const createCategoryApi = async (obj: ICategory) => {
  const { data } = await axios.post(
    "https://api.escuelajs.co/api/v1/categories/",
    obj
  );
  return data;
};

export const updateCategoryApi = async ({
  id,
  obj,
}: {
  id: number;
  obj: ICategory;
}) => {
  const { data } = await axios.put(
    "https://api.escuelajs.co/api/v1/categories/" + id,
    obj
  );
  return data;
};

export const deleteCategoryByIdApi = async (id: number) => {
  const { data } = await axios.delete(
    "https://api.escuelajs.co/api/v1/categories/" + id
  );
  return data;
};
