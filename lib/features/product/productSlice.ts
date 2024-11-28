import { createAppSlice } from "@/lib/createAppSlice";
import { IProduct } from "@/type/type";
import { createProductApi, deleteProductByIdApi, getProductsApi, getProductsByIdApi, getProductsByCategoryApi, updateProductApi } from "./productApi";
import { selectUsers } from "../user/userSlice";

interface IState {
    products: IProduct[]
    product: IProduct
}

const initialState: IState = {
    products: [],
    product: {} as IProduct
}

export const productSlice = createAppSlice({
    name: 'product',
    initialState,
    reducers: (create) => ({
        getProductsData: create.asyncThunk(
            async () => {
                return await getProductsApi()
            },
            {
                fulfilled: (state, action) => {
                    state.products = action.payload
                }
            }
        ),
        getProductsByCategoryData: create.asyncThunk(
            async (id: number) => {
                return await getProductsByCategoryApi(id);
            },
            {
                fulfilled: (state, action) => {
                    state.products = action.payload;
                },
            }
        ),
        getProductsByIdData: create.asyncThunk(
            async (id: number) => {
                return await getProductsByIdApi(id)
            },
            {
                fulfilled: (state, action) => {
                    state.product = action.payload
                }
            }
        ),
        createProductData: create.asyncThunk(
            async (obj: IProduct) => {
                return await createProductApi(obj)
            }
        ),
        updateProductData: create.asyncThunk(
            async ({ id, obj }: { id: number, obj: IProduct }) => {
                return await updateProductApi({ id, obj })
            },
            {
                fulfilled: (state, action) => {
                    state.product = action.payload
                }
            }
        ),
        deleteProductByIdData: create.asyncThunk(
            async (id: number) => {
                return await deleteProductByIdApi(id)
            }
        ),
        // paginationProductData: create.asyncThunk(
        //     async ({offset, limit} : {offset: number, limit: number}) => {
        //         return await paginationProductApi(offset, limit)
        //     }
        // )
    }),
    selectors: {
        selectProducts: (app) => app.products,
        selectProduct: (app) => app.product
    }
})

export const {
    getProductsData,
    getProductsByIdData,
    getProductsByCategoryData,
    createProductData,
    updateProductData,
    deleteProductByIdData
} = productSlice.actions;

export const {selectProducts, selectProduct} = productSlice.selectors;

