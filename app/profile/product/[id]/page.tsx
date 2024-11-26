import ProductDetails from '@/app/components/ProductDetails';
import { Metadata } from 'next';
import React from 'react'

export default function ProductDetailsPage() {
  return (
    <ProductDetails/>

  )
}

export const metadata: Metadata = {
  title: "Product Details",
};