import CategoryDetails from '@/app/components/CategoryDetails';
import { Metadata } from 'next';
import React from 'react'

export default function CategoryDetailsPage() {
  return (
    <CategoryDetails/>

  )
}

export const metadata: Metadata = {
  title: "Category details",
};