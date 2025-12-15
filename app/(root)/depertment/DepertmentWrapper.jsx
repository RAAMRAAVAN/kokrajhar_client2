"use client"

import React from 'react'
import { useSearchParams } from 'next/navigation';
import DepertmentClient from "./DepertmentClient";

export default function DepertmentWrapper() {
  const searchParams = useSearchParams();
  const depertment = searchParams.get('id');
  
  return <DepertmentClient depertment={depertment} />
}
