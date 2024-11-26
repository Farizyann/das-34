import AddProduct from '@/app/components/AddProduct';
import { Metadata } from 'next';
import React from 'react'

export default function AddProductPage() {
  return (
    <AddProduct/>

  )
}
export const metadata: Metadata = {
  title: "Add Product",
};
