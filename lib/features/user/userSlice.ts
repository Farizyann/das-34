import { IUserLogin } from "./../../../type/type";
import { createAppSlice } from "@/lib/createAppSlice";
import { IUser } from "@/type/type";
import {
  createUserApi,
  deleteUserByIdApi,
  getUserByIdApi,
  getUserProfileApi,
  getUsersApi,
  loginApi,
  updateUserApi,
} from "./userApi";

interface IState {
  users: IUser[];
  user: IUser;
}

const initialState: IState = {
  users: [],
  user: {} as IUser,
};

export const userSlice = createAppSlice({
  name: "user",
  initialState,
  reducers: (create) => ({
    getUsersData: create.asyncThunk(
      async () => {
        return await getUsersApi();
      },
      {
        fulfilled: (state, action) => {
          state.users = action.payload;
        },
      }
    ),
    getUserByIdData: create.asyncThunk(
      async (id: number) => {
        return await getUserByIdApi(id);
      },
      {
        fulfilled: (state, action) => {
          state.user = action.payload;
        },
      }
    ),
    createUserData: create.asyncThunk(async (obj: IUser) => {
      return await createUserApi(obj);
    }),
    updateUserData: create.asyncThunk(
      async ({ id, obj }: { id: number; obj: IUser }) => {
        return await updateUserApi({ id, obj });
      },
      {
        fulfilled: (state, action) => {
          state.user = action.payload;
        },
      }
    ),
    deleteUserByIdData: create.asyncThunk(async (id: number) => {
      return await deleteUserByIdApi(id);
    }),
    loginUserData: create.asyncThunk(async (user: IUserLogin) => {
      return await loginApi(user);
    }),
    getUserProfileData: create.asyncThunk(async () => {
      return await getUserProfileApi();
    },
    {
        fulfilled:(state, action)=>{
            state.user = action.payload
        }
    }),
  }),
  selectors: {
    selectUsers: (app) => app.users,
    selectUser: (app) => app.user,
  },
});

export const {
  getUsersData,
  loginUserData,
  getUserByIdData,
  createUserData,
  updateUserData,
  getUserProfileData,
  deleteUserByIdData,
} = userSlice.actions;
export const { selectUsers, selectUser } = userSlice.selectors;
