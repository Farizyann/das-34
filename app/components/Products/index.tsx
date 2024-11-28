"use client";
import { getProductsData, selectProducts } from '@/lib/features/product/productSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import React, { useEffect } from 'react'

const Products = () => {

  const products = useAppSelector(selectProducts);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getProductsData());
  }, []);
  return (
    <div>
      {products.map((elm) => {
        return( 
          <div>
          <h1>{elm.title}</h1>
          </div>
        )
      })}
    </div>
  )
}

export default Products
