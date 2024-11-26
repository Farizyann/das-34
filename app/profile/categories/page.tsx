import Categories from '@/app/components/Categories';
import { Metadata } from 'next';
import React from 'react'

export default function CategoriesPage() {
  return (
    <Categories/>
  )
}

export const metadata: Metadata = {
  title: "Categories",
};
