"use client";
import {
  getProductsData,
  paginationProductData,
  selectProducts,
  selectProductsLimit,
} from "@/lib/features/product/productSlice";
import { getUserProfileData, selectUser } from "@/lib/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { IProduct } from "@/type/type";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

export default function Profile() :JSX.Element{
  const user = useAppSelector(selectUser);
  const products = useAppSelector(selectProducts);
  const productsLimit = useAppSelector(selectProductsLimit);
  const [itemOffset, setItemOffset] = useState<number>(0);
  console.log(user, products, productsLimit);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getUserProfileData());
    dispatch(getProductsData());
  }, []);

  useEffect(() => {
    dispatch(paginationProductData({ limit: 5, offset: itemOffset }));
  }, [itemOffset]);

  const handlePageClick = (event: any) => {
    const newOffset =
      (event.selected * 5) % products.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <div>
      <h1>Profile</h1>
      <div>
        <h1>{user.name} {user.email}</h1>
      </div>
      <Items productsLimit={productsLimit} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={products.length/5}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </div>
  );
}

function Items({ productsLimit }: { productsLimit: IProduct[] }) {
  return (
    <>
      {productsLimit &&
        productsLimit.map((elm) => {
          return (
            <div key={elm.id}>
              <p>{elm.title}</p>
            </div>
          );
        })}
    </>
  );
}
