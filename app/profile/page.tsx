import { Metadata } from 'next';
import React from 'react'
import Profile from '../components/Profile';

export default function ProfilePage() {
  return (
    <Profile/>
  )
}

export const metadata: Metadata = {
  title: "Profile",
};