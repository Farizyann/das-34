import { productSlice } from './features/product/productSlice';
import type { Action, ThunkAction } from "@reduxjs/toolkit";
import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./features/user/userSlice";
import { categorySlice } from './features/category/categorySlice';


const rootReducer = combineSlices(userSlice, productSlice, categorySlice);
export type RootState = ReturnType<typeof rootReducer>;

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
  
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware()
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = AppStore["dispatch"];
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>;
