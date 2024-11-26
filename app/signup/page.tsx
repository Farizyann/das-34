import { Metadata } from 'next';
import React from 'react'
import SignUp from '../components/SignUp';

export default function SignupPage() {
  return (
<SignUp/>
  )
}

export const metadata: Metadata = {
  title: "Sign Up",
};