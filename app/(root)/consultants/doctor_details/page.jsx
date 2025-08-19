import { Suspense } from "react";
import DoctorDetailsContent from "./DoctorDetailsContainer";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading doctor details...</div>}>
      <DoctorDetailsContent />
    </Suspense>
  );
}
