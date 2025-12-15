import React, { Suspense } from 'react'
import DepertmentWrapper from "./DepertmentWrapper";
import Loader from "../../(components)/Loader";

export default function page() {
  return (
    <Suspense fallback={<Loader/>}>
      <DepertmentWrapper />
    </Suspense>
  )
}
