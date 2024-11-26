import UserDetils from '@/app/components/UserDetails';
import { Metadata } from 'next';
import React from 'react'

export default function UserDetailsPage() {
  return (
    <UserDetils/>
  )
}

export const metadata: Metadata = {
  title: "User Details",
};