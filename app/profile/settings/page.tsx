import Settings from '@/app/components/Settings';
import { Metadata } from 'next';
import React from 'react'

export default function SettingsPage() {
  return (
    <Settings/>

  )
}

export const metadata: Metadata = {
  title: "Settings",
};