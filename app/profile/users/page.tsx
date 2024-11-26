import Users from '@/app/components/Users';
import { Metadata } from 'next';
import React from 'react'

export default function UsersPage() {
  return (
    <Users/>

  )
}

export const metadata: Metadata = {
  title: "Users",
};
