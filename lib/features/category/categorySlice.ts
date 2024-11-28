import {
  createCategoryApi,
  deleteCategoryByIdApi,
  getCategoriesApi,
  getCategoryByIdApi,
  updateCategoryApi,
} from "./categoryApi";
import { createAppSlice } from "./../../createAppSlice";
import { ICategory } from "@/type/type";

interface IState {
  categories: ICategory[];
  category: ICategory;
}
const initialState: IState = {
  categories: [],
  category: {} as ICategory,
};

export const categorySlice = createAppSlice({
  name: "category",
  initialState,
  reducers: (create) => ({
    getCategoriesData: create.asyncThunk(
      async () => {
        return await getCategoriesApi();
      },
      {
        fulfilled: (state, action) => {
          state.categories = action.payload;
        },
      }
    ),
    getCategoryByIdData: create.asyncThunk(
      async (id: number) => {
        return await getCategoryByIdApi(id);
      },
      {
        fulfilled: (state, action) => {
          state.category = action.payload;
        },
      }
    ),
    createCategoryData: create.asyncThunk(
      async (obj: ICategory) => {
        return await createCategoryApi(obj);
      },
    ),
    updateCategoryData: create.asyncThunk(
      async ({
        id,
        obj,
      }: {
        id: number;
        obj: ICategory;
      }) => {
        return await updateCategoryApi({ id, obj });
      },
      {
        fulfilled: (state, action) => {
          state.category = action.payload
        }
      }
    ),
    deleteCategoryByIdData: create.asyncThunk(
      async (id: number) => {
        return await deleteCategoryByIdApi(id)
      }
    )
  }),
  selectors: {
    selectCategories: (app) => app.categories,
    selectCategory: (app) => app.category,
  },
});


export const { getCategoriesData, getCategoryByIdData, createCategoryData, updateCategoryData, deleteCategoryByIdData } = categorySlice.actions
export const {
  selectCategories, selectCategory
} = categorySlice.selectors