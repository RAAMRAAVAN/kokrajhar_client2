"use client"

import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { selectDepertments } from "@/redux/features/depertmentSlice";
import { selectDoctors } from '@/redux/features/doctorSlice';
import NewDoctorCard from '@/app/(components)/NewDoctorCard';
import Overview from '../consultants/doctor_details/Overview';

export default function DepertmentClient({ depertment }) {
  const depertments = useSelector(selectDepertments) || [];
  const doctors = useSelector(selectDoctors);

  const [departmentDoctors, setDepartmentDoctors] = useState([]);

  useEffect(() => {

    if (!doctors?.length || !depertmentData?.name) return;

    const filteredDoctors = doctors.filter(
      (doctor) => doctor.depertment === depertmentData.name
    );
    setDepartmentDoctors(filteredDoctors);
  }, []);

  // Handle undefined or null depertment
  if (!depertment) {
    return (
      <div className="max-w-2xl mx-auto text-center text-gray-600 py-16 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">No department selected</h2>
        <p className="text-gray-600">Please select a department from the list.</p>
      </div>
    )
  }

  const id = typeof depertment === 'string' && !isNaN(parseInt(depertment))
    ? parseInt(depertment)
    : depertment;

  const depertmentData = depertments.find(dep => dep.id === id || String(dep._id) === String(depertment));


  if (!depertmentData) {
    return (
      <div className="max-w-2xl mx-auto text-center text-gray-600 py-16 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Department not found</h2>
        <p className="text-gray-600">Try selecting a different department or go back to the departments list.</p>
      </div>
    )
  }

  return (
    <main className="max-w-6xl mx-auto my-8 md:my-12 px-4 md:px-6 text-slate-900">
      <section className="flex flex-col md:flex-row gap-6 md:gap-8 items-start bg-gradient-to-b from-white/80 to-blue-50/60 p-6 md:p-8 rounded-lg shadow-lg">
        {/* Image Section - col-3 (25%) */}
        <div className="w-full md:w-1/4 flex-shrink-0 bg-gray-100 rounded-lg p-4 flex items-center justify-center">
          <img 
            className="w-full h-auto max-h-64 object-contain" 
            src={`https://accf-api.cancercareinstituteguwahati.org/storage/${depertmentData.icon}` || '/dep-placeholder.jpg'} 
            alt={depertmentData.name} 
          />
        </div>

        {/* Content Section - col-9 (75%) */}
        <div className="w-full md:w-3/4 pt-1 md:pt-0">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-4">{depertmentData.name}</h1>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">{depertmentData.description}</p>
        </div>
      </section>

<section>
      <h2 className="text-xl md:text-2xl font-semibold mt-10 mb-6">Our Specialists</h2>
      {departmentDoctors.length === 0 ? (
        <p className="text-gray-600">No doctors available in this department at the moment.</p>
      ) : (
        <section className="mt-8 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6">
          {departmentDoctors.map((doctor) => (
            <Overview key={doctor.id} doctorData={doctor} />
          ))}
        </section>
      )}  
</section>
      
    </main>
  )
}
