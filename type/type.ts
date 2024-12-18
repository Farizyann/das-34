export interface IUser {
    id: number;
    email: string;
    password: string;
    name: string;
    role: string;
    avatar: string;
  }
export interface IUserLogin {
    email: string;
    password: string;
  }
  
  export interface ICategory {
    id: number;
    name: string;
    image: string;
  }
  
  export interface IProduct {
    id: number;
    title: string;
    price: number;
    description: string;
    category: ICategory;
    images: string[];
  }
  